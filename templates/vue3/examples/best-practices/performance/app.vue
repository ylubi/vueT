<script setup>
import { defineAsyncComponent, ref } from 'vue'
const Heavy = defineAsyncComponent(() => import('./Heavy.vue'))
const show = ref(false)
</script>

<template>
  <section>
    <div class="container">
      <h3>性能优化演示</h3>
      <button @click="show = !show">加载/卸载 Heavy</button>
      <Suspense>
        <template #default>
          <Heavy v-if="show" />
        </template>
        <template #fallback>加载中...</template>
      </Suspense>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
</style>