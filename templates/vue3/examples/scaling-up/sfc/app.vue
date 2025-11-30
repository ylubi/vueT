<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
const count = ref(0)
</script>

<template>
  <section class="wrapper">
    <h3>单文件组件 (SFC) 演示</h3>
    <p>父计数：{{ count }}</p>
    <button class="btn" @click="count++">count++</button>
    <Child :count="count" />
  </section>
</template>

<style scoped>
.wrapper { display: grid; gap: 8px; border: 1px solid #e5e7eb; padding: 10px; border-radius: 8px }
.btn { background: #10b981; color: #fff; border: none; border-radius: 6px; padding: 6px 10px }
</style>