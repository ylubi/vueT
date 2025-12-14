<script setup>
import { ref, shallowRef, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { Repl, useStore, useVueImportMap, mergeImportMap } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import KnowledgeHotspot from './KnowledgeHotspot.vue'
import playgroundRunBtn from './playgroundRunBtn.vue'
import Contact from './Contact.vue'

const replRef = ref(null)
const onRun = () => { replRef.value?.reload() }

const props = defineProps({
  src: { type: String, default: '' },
  hash: { type: String, default: '' },
  files: { type: Object, default: null },
  mainFile: { type: String, default: 'App.vue' },
  learningTitle: { type: String, default: '' },
  learningPoints: { type: Array, default: () => [] },
})

// 知识热点相关状态
const showKnowledgeTab = ref(false) // 是否显示知识热点而不是预览
const currentKnowledge = ref({ title: '', points: [] }) // 当前知识热点数据

// 获取当前页面的 slug
const getCurrentSlug = () => {
  const route = useRoute()
  return route.params.slug || 'introduction'
}



// 切换知识热点显示
const toggleKnowledgeTab = () => {
  showKnowledgeTab.value = !showKnowledgeTab.value
  if (showKnowledgeTab.value) {
    const knowledgeData = getKnowledgeData()
    if (knowledgeData) {
      currentKnowledge.value = knowledgeData
    }
  }
}

// 获取当前页面的知识数据
import { guideMap } from '../guide/content.js'
const getKnowledgeData = () => {
  const slug = getCurrentSlug()
  const item = guideMap[slug]
  return item ? { title: item.title, points: item.steps || [] } : { title: 'Vue 3 核心概念', points: [] }
}

// 计算outputMode，根据是否显示知识热点来决定
const outputMode = computed(() => 'preview')

let knowledgeTabEl = null
let knowledgeTabBtn = null
let previewSpanEl = null
let previewBtnEl = null
let tabButtonsEl = null
let tabObserver = null
let outputContainerEl = null
let iframeContainerEl = null
const teleportReady = ref(false)

const updateActiveTabStyle = () => {
  if (knowledgeTabBtn) {
    knowledgeTabBtn.classList.toggle('active', !!showKnowledgeTab.value)
  }
  if (previewBtnEl) {
    previewBtnEl.classList.toggle('active', !showKnowledgeTab.value)
  }
}

onMounted(() => {
  const bindPreviewSpan = (el) => {
    if (!el) return
    if (el.dataset && el.dataset.khBound === 'true') return
    el.addEventListener('click', () => { showKnowledgeTab.value = false; updateActiveTabStyle() })
    if (el.dataset) el.dataset.khBound = 'true'
  }

  const ensureKnowledgeTab = (previewSpan) => {
    if (!previewSpan) return
    previewBtnEl = previewSpan.closest('button')
    tabButtonsEl = previewBtnEl ? previewBtnEl.parentElement : null
    if (!tabButtonsEl) return

    const legacyInline = previewBtnEl.querySelector('.kh-tab')
    if (legacyInline) legacyInline.remove()

    if (!knowledgeTabBtn) {
      knowledgeTabBtn = document.createElement('button')
      knowledgeTabBtn.className = 'kh-tab-btn'
      knowledgeTabBtn.type = 'button'
      knowledgeTabEl = document.createElement('span')
      knowledgeTabEl.textContent = '热点知识'
      knowledgeTabEl.className = 'kh-tab-label'
      knowledgeTabBtn.appendChild(knowledgeTabEl)
      knowledgeTabBtn.addEventListener('click', () => { 
        showKnowledgeTab.value = true
        updateActiveTabStyle()
      })
    }
    if (knowledgeTabBtn.parentElement !== tabButtonsEl) {
      tabButtonsEl.appendChild(knowledgeTabBtn)
    }
    updateActiveTabStyle()
  }

  const locateAndBindPreview = () => {
    const spans = Array.from(document.querySelectorAll('span'))
    const found = spans.find(el => String(el.textContent).trim().toLowerCase() === 'preview') || null
    if (!found) return
    if (previewSpanEl !== found) {
      previewSpanEl = found
      bindPreviewSpan(previewSpanEl)
      ensureKnowledgeTab(previewSpanEl)
    }
  }

  locateAndBindPreview()
  tabObserver = new MutationObserver(() => {
    locateAndBindPreview()
  })
  tabObserver.observe(document.body, { childList: true, subtree: true })
  outputContainerEl = document.querySelector('.vue-repl .output-container')
  iframeContainerEl = document.querySelector('.vue-repl .iframe-container')
  const ensureMount = (container) => {
    if (!container) return false
    let mount = container.querySelector('#kh-mount')
    if (!mount) {
      mount = document.createElement('div')
      mount.id = 'kh-mount'
      mount.style.height = '100%'
      mount.style.display = 'none'
      container.appendChild(mount)
    }
    return mount
  }
  if (iframeContainerEl) {
    if (showKnowledgeTab.value) iframeContainerEl.classList.add('kh-mode')
    const mount = ensureMount(iframeContainerEl)
    if (mount) teleportReady.value = true
  } else if (outputContainerEl) {
    if (showKnowledgeTab.value) outputContainerEl.classList.add('kh-mode')
    const mount = ensureMount(outputContainerEl)
    if (mount) teleportReady.value = true
  }
  else {
    const observer = new MutationObserver(() => {
      const ic = document.querySelector('.vue-repl .iframe-container')
      const oc = document.querySelector('.vue-repl .output-container')
      if (ic || oc) {
        iframeContainerEl = ic || null
        outputContainerEl = oc || null
        const container = iframeContainerEl || outputContainerEl
        if (container && showKnowledgeTab.value) container.classList.add('kh-mode')
        const mount = ensureMount(container)
        if (mount) teleportReady.value = true
        observer.disconnect()
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
  }
})

onBeforeUnmount(() => {
  if (knowledgeTabBtn && knowledgeTabBtn.parentElement) knowledgeTabBtn.parentElement.removeChild(knowledgeTabBtn)
  if (knowledgeTabBtn) knowledgeTabBtn = null
  knowledgeTabEl = null
  if (previewSpanEl) {
    previewSpanEl.replaceWith(previewSpanEl.cloneNode(true))
    previewSpanEl = null
  }
  if (tabObserver) {
    tabObserver.disconnect()
    tabObserver = null
  }
  if (iframeContainerEl) {
    iframeContainerEl.classList.remove('kh-mode')
    iframeContainerEl = null
  }
  if (outputContainerEl) outputContainerEl = null
})

watch(showKnowledgeTab, (v) => {
  const container = document.querySelector('.vue-repl .iframe-container') || document.querySelector('.vue-repl .output-container')
  if (container) {
    container.classList.toggle('kh-mode', v)
    const mount = container.querySelector('#kh-mount')
    if (mount) mount.style.display = v ? 'block' : 'none'
  }
  updateActiveTabStyle()
})

// 保持传入文件原样，避免在 SFC 中出现特殊字符串引起解析问题

const hash = ref(props.hash || '')

const { importMap: builtinImportMap, vueVersion } = useVueImportMap({})
const customImportMap = ref(mergeImportMap(builtinImportMap.value, { 
  imports: { 
    pinia: 'https://unpkg.com/pinia@latest/dist/pinia.esm-browser.js',
    '@vue/devtools-api': 'https://unpkg.com/@vue/devtools-api@6.6.4/lib/esm/index.js',
    'vue': '/libs/runtime-dom.esm-browser.js',
    '@vue/runtime-dom': '/libs/runtime-dom.esm-browser.js'
  } 
}))
const storeRef = shallowRef(useStore({ builtinImportMap: customImportMap, vueVersion }, hash.value))

watch(hash, (h) => {
  storeRef.value = useStore({ builtinImportMap: customImportMap, vueVersion }, h)
  if (!h && props.files) {
    storeRef.value.setFiles(props.files, props.mainFile)
  }
})

watch(() => props.files, (f) => {
  if (f) {
    storeRef.value.setFiles(f, props.mainFile)
  }
}, { immediate: true })

const loadFromLink = () => {
  const val = linkInput.value.trim()
  if (!val) return
  const h = val.includes('#') ? val.split('#')[1] : val
  window.location.hash = '#' + h
  hash.value = window.location.hash
}
</script>

<template>
  <div class="playground-container">
    <div class="pane">
      <Repl 
        :store="storeRef" 
        :editor="CodeMirror" 
        :showCompileOutput="false"
        :outputMode="outputMode"
        ref="replRef"
      />
    </div>

    <Teleport v-if="teleportReady" to="#kh-mount">
      <div v-show="showKnowledgeTab" class="kh-panel">
        <KnowledgeHotspot 
          :slug="getCurrentSlug()" 
          :title="props.learningTitle"
          :points="props.learningPoints"
 
        />
      </div>
    </Teleport>

    <Teleport  v-if="teleportReady" to=".split-pane .file-selector" >
      <div @click="onRun"><playgroundRunBtn /></div>
    </Teleport>

    <Teleport v-if="teleportReady" to=".split-pane .tab-buttons" >
      <Contact />
    </Teleport>
  </div>
</template>

<style scoped>
.playground-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;
  position: relative;
}

.pane {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.pane > :deep(.vue-repl) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* 知识热点覆盖层 - 与iframe同一位置 */
.kh-panel { height: 100%; }
.kh-panel :deep(.knowledge-hotspot) { height: 100%; }
.kh-panel { display: flex; flex-direction: column; }

/* 知识热点切换按钮 */
.knowledge-overlay :deep(.knowledge-hotspot) { height: 100%; }

:deep(.kh-tab) {
  display: inline-block;
  color: #6b7280;
  font-size: 13px;
}

:deep(.kh-tab.active) {
  color: #0f172a;
}

/* 独立知识标签按钮，避免与 preview 共享同一个 button 导致双指示点 */
:deep(.kh-tab-btn) {
  margin-left: 12px;
  background: transparent;
  border: none;
  outline: none;
  padding: 8px 8px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
}

:deep(.kh-tab-btn.active) {
  border-bottom-color: #60a5fa;
}

:deep(.kh-tab-label) {
  color: #6b7280;
}

:deep(.kh-tab-btn.active .kh-tab-label) {
  color: #0f172a;
}

/* 当热点知识激活时隐藏 iframe 预览，仅右侧显示知识面板 */
:deep(.vue-repl .iframe-container.kh-mode iframe) { display: none !important; }
:deep(.vue-repl .output-container.kh-mode iframe) { display: none !important; }
/* 右侧容器在热点知识模式下的内边距优化 */
:deep(.vue-repl .iframe-container.kh-mode) { padding: 0 !important; }
:deep(.vue-repl .output-container.kh-mode) { padding: 0 !important; }

/* 覆盖原生REPL样式 */
:deep(.vue-repl) {
  height: 100% !important;
}

:deep(.vue-repl .editor-container),
:deep(.vue-repl .output-container) {
  height: 100% !important;
}

/* 确保输出区域正确显示 */
:deep(.vue-repl .output-container) {
  position: relative;
}

/* 修改 split-pane 高度为 90% - 更具体的选择器 */
:deep(.vue-repl .split-pane),
:deep(.vue-repl .split-pane[data-v-a9fd0472]) {
  height: 90% !important;
}

/* 额外的覆盖层 - 确保优先级足够高 */
:deep(.split-pane) {
  height: 90% !important;
}

:deep(.split-pane[data-v-a9fd0472]) {
  height: 90% !important;
}
</style>
