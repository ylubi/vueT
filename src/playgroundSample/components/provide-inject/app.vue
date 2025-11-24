<script setup>
import { ref, provide } from 'vue'
import Child from './Child.vue'
const color = ref('#0ea5e9')
const size = ref(14)
provide("color", color)
provide("size", size)
</script>

<template>
  <section>
    <h3>依赖注入演示</h3>
    <div><label>颜色 <input v-model="color" /></label> <label>字号 <input v-model.number="size" type="number" /></label></div>
    <Child />
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>