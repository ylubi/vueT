<script setup>
import { ref, shallowRef, watch, watchEffect } from 'vue'
import { Repl, useStore, useVueImportMap, mergeImportMap } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'

const props = defineProps({
  src: { type: String, default: '' },
  hash: { type: String, default: '' },
  files: { type: Object, default: null },
  mainFile: { type: String, default: 'App.vue' },
})

// 保持传入文件原样，避免在 SFC 中出现特殊字符串引起解析问题

const hash = ref(props.hash || '')

const { importMap: builtinImportMap, vueVersion } = useVueImportMap({})
const customImportMap = ref(mergeImportMap(builtinImportMap.value, { imports: { pinia: 'https://unpkg.com/pinia@latest/dist/pinia.mjs' } }))
const storeRef = shallowRef(useStore({ builtinImportMap: customImportMap, vueVersion }, hash.value))

watchEffect(() => {
  history.replaceState({}, '', storeRef.value.serialize())
})

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
  <div class="pane">
    <Repl :store="storeRef" :editor="CodeMirror" :showCompileOutput="false" />
  </div>
</template>

<style scoped>
.pane { display: grid; gap: 10px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 12px; box-shadow: 0 6px 24px rgba(17,24,39,.06); }
.pane > :deep(.vue-repl) { min-height: 300px; background: transparent; }
</style>