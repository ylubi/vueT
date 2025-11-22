<script setup>
import { ref, shallowRef, watchEffect } from 'vue'
import { Repl, useStore, useVueImportMap, mergeImportMap } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'

const hash = ref('')

const { importMap: builtinImportMap, vueVersion } = useVueImportMap({})
const customImportMap = ref(mergeImportMap(builtinImportMap.value, { imports: { pinia: 'https://unpkg.com/pinia@latest/dist/pinia.mjs' } }))
const storeRef = shallowRef(useStore({ builtinImportMap: customImportMap, vueVersion }, hash.value))

watchEffect(() => {
  history.replaceState({}, '', storeRef.value.serialize())
})

watch(hash, (h) => {
  storeRef.value = useStore({ builtinImportMap: customImportMap, vueVersion }, h)
})

</script>

<template>
  <section>
    <h2>Playground</h2>
    <p>在此页面可直接编写与运行 SFC 代码。</p>
    <Repl :store="storeRef" :editor="CodeMirror" :showCompileOutput="false" />
  </section>
  
</template>

<style scoped>
section { height: calc(100vh - 140px); display: grid; gap: 12px; }
section > :deep(.vue-repl) { min-height: 0; border: 1px solid #e5e7eb; border-radius: 12px; box-shadow: 0 6px 24px rgba(17,24,39,.06); }
</style>