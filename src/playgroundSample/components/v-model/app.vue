<script setup>
import Child from './Child.vue'
import { ref } from 'vue'
const text = ref("")
</script>

<template>
  <section>
    <h3>组件 v-model 演示</h3>
    <Child v-model="text" />
    <p>父：{{ text }}</p>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>