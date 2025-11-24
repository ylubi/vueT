<script setup>
import AsyncFoo from './AsyncFoo.vue'
</script>

<template>
  <section>
    <h3>Suspense 演示</h3>
    <Suspense>
      <template #default>
        <AsyncFoo />
      </template>
      <template #fallback>加载中...</template>
    </Suspense>
  </section>
</template>