<script setup>
import { defineAsyncComponent, ref } from 'vue'
const show = ref(false)
const Lazy = defineAsyncComponent(() => import('./Lazy.vue'))
</script>

<template>
  <section>
    <h3>工具链演示</h3>
    <button @click="show = !show">加载/卸载 Lazy 组件</button>
    <Suspense>
      <template #default><Lazy v-if="show" /></template>
      <template #fallback><span class="loading">加载中...</span></template>
    </Suspense>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.loading { display: inline-block; padding: 4px 8px; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 6px; color: #6b7280; }
</style>