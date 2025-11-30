<!-- 协调异步依赖并显示占位。 -->
 
<script setup>
import AsyncFoo from './AsyncFoo.vue'
</script>

<template>
  <section>
    <div class="container">
      <h3>Suspense 演示</h3>
      <Suspense>
        <template #default>
          <AsyncFoo />
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
