<script setup>
import Child from './Child.vue'
import { ref } from 'vue'
const logs = ref([])
</script>

<template>
  <section>
    <h3>透传 Attributes 演示</h3>
    <p>父组件传入的 class/style/id/@click 会自动透传到子组件根元素。</p>
    <Child class="large" style="color:#0ea5e9" id="btn1" @click="()=>logs.push('parent click')" />
    <pre>{{ logs }}</pre>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>