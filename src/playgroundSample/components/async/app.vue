<script setup>
import { defineAsyncComponent, ref } from 'vue'
const show = ref(false)
const AsyncChild = defineAsyncComponent(() => import('./AsyncChild.vue'))
</script>

<template>
  <section>
    <h3>异步组件演示</h3>
    <button @click="show = !show">toggle</button>
    <AsyncChild v-if="show" />
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>