<script setup>
import { defineAsyncComponent, ref } from 'vue'
const show = ref(false)
const AsyncChild = defineAsyncComponent(() => import('./AsyncChild.vue'))
</script>

<template>
  <section>
    <h3>异步组件演示</h3>
    <button @click="show = !show">{{ show ? '卸载' : '加载' }} AsyncChild</button>
    <AsyncChild v-if="show" @close="show = false" />
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>
