<script setup>
import { ref, shallowRef, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { Repl, useStore, useVueImportMap, mergeImportMap } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import KnowledgeHotspot from './KnowledgeHotspot.vue'


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
const getKnowledgeData = () => {
  const slug = getCurrentSlug()
  const knowledgeMap = {
    'introduction': {
      title: 'Vue 3 核心概念',
      points: [
        '🎯 声明式渲染：模板与状态的关系',
        '⭐ 响应式数据：修改数据自动更新视图',
        '✨ 双向绑定：输入框与数据同步',
        '🚀 条件渲染：根据状态显示不同内容'
      ]
    },
    'quick-start': {
      title: '快速开始指南',
      points: [
        '🚀 快速开始：无需构建即可使用',
        '⚡ Vite 构建：现代化的开发体验',
        '📦 项目结构：清晰的目录组织',
        '🔧 开发工具：热更新和构建优化'
      ]
    },
    'essentials-template-syntax': {
      title: '模板语法要点',
      points: [
        '📝 模板语法：基于HTML的扩展',
        '🔗 插值语法：{{ }} 文本绑定',
        '🎯 属性绑定：v-bind 或 : 简写',
        '⚠️ 安全注意：谨慎使用v-html防止XSS'
      ]
    },
    'essentials-reactivity-fundamentals': {
      title: '响应式基础',
      points: [
        '⚡ ref()：创建响应式引用',
        '🔄 reactive()：创建响应式对象',
        '📊 .value：访问ref的值',
        '🎯 自动更新：数据变化驱动视图更新'
      ]
    },
    'essentials-computed': {
      title: '计算属性',
      points: [
        '🧮 computed()：创建计算属性',
        '💾 缓存机制：基于依赖缓存结果',
        '⚡ 性能优化：避免重复计算',
        '🔍 依赖追踪：自动追踪相关数据'
      ]
    },
    'essentials-class-and-style': {
      title: '类与样式绑定',
      points: [
        '🎨 类绑定：:class 对象和数组语法',
        '💄 样式绑定：:style 对象语法',
        '🔄 动态切换：根据状态切换类名',
        '🎯 状态可视化：用样式表达组件状态'
      ]
    },
    'essentials-conditional': {
      title: '条件渲染',
      points: [
        '🌿 条件渲染：v-if/v-else-if/v-else',
        '👁️ v-show：通过display控制显示',
        '💡 性能差异：v-if切换时销毁重建',
        '🎯 使用场景：根据需求选择合适指令'
      ]
    },
    'essentials-list': {
      title: '列表渲染',
      points: [
        '📋 v-for：列表渲染指令',
        '🔑 :key：提供唯一标识优化性能',
        '🔄 遍历支持：数组和对象遍历',
        '⚠️ 最佳实践：避免使用索引作为key'
      ]
    },
    'essentials-event-handling': {
      title: '事件处理',
      points: [
        '🖱️ 事件监听：@click等事件语法',
        '🛡️ 事件修饰符：.prevent/.stop等',
        '⌨️ 按键修饰符：.enter/.esc等',
        '📤 参数传递：事件处理和数据传递'
      ]
    },
    'essentials-forms': {
      title: '表单输入绑定',
      points: [
        '🔄 v-model：双向数据绑定',
        '📝 表单支持：各种表单元素',
        '✨ 修饰符：.lazy/.number/.trim',
        '🔧 自定义：组件的v-model支持'
      ]
    },
    'components-registration': {
      title: '组件注册',
      points: [
        '🌍 全局注册：整个应用可用的组件',
        '📦 局部注册：特定组件可用的子组件',
        '📄 SFC结构：单文件组件组织方式',
        '🔧 组件命名：遵循Vue命名规范'
      ]
    },
    'components-props': {
      title: 'Props 传参',
      points: [
        '📤 props：父到子数据传递',
        '✅ 类型检查：支持props类型验证',
        '🔄 单向数据流：子组件不修改props',
        '📝 默认值：为props提供默认值'
      ]
    },
    'components-events': {
      title: '事件通信',
      points: [
        '📡 defineEmits：定义自定义事件',
        '📝 命名规范：小写短横线格式',
        '📊 参数传递：事件可以携带参数',
        '🔄 子父通信：实现子到父的数据传递'
      ]
    },
    'components-v-model': {
      title: '组件v-model',
      points: [
        '🔄 双向绑定：自定义组件v-model',
        '📝 modelValue：默认的prop名称',
        '📤 update:modelValue：默认的事件名称',
        '🔧 多v-model：支持多个双向绑定'
      ]
    },
    'components-attrs': {
      title: '透传Attributes',
      points: [
        '📋 属性透传：非prop属性自动传递',
        '🎨 class/style合并：特殊的合并行为',
        '🚫 inheritAttrs：控制属性继承',
        '🔧 useAttrs：获取透传属性的工具'
      ]
    },
    'components-slots': {
      title: '插槽机制',
      points: [
        '📦 插槽机制：内容分发API',
        '📝 默认插槽：未命名插槽内容',
        '🏷️ 具名插槽：指定名称的插槽',
        '🔄 作用域插槽：子组件向插槽传值'
      ]
    },
    'components-provide-inject': {
      title: '依赖注入',
      points: [
        '📤 provide：提供依赖给后代组件',
        '📥 inject：从祖先组件接收依赖',
        '🌍 跨层级：解决prop逐级传递问题',
        '⚡ 响应式：支持响应式的provide/inject'
      ]
    },
    'components-async': {
      title: '异步组件',
      points: [
        '⏳ defineAsyncComponent：异步组件定义',
        '🚀 按需加载：优化应用加载性能',
        '⚠️ 状态处理：加载状态和错误处理',
        '🎭 Suspense：配合异步组件使用'
      ]
    }
  }
  return knowledgeMap[slug] || knowledgeMap['introduction']
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
const customImportMap = ref(mergeImportMap(builtinImportMap.value, { imports: { pinia: 'https://unpkg.com/pinia@latest/dist/pinia.mjs' } }))
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
