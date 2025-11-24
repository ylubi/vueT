<script setup>
import { defineAsyncComponent, ref } from 'vue'
const Heavy = defineAsyncComponent(() => import('./Heavy.vue'))
const show = ref(false)
</script>

<template>
  <section>
    <h3>性能优化演示</h3>
    <button @click="show = !show">加载/卸载 Heavy</button>
    <Suspense>
      <template #default>
        <Heavy v-if="show" />
      </template>
      <template #fallback>加载中...</template>
    </Suspense>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>