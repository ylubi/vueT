<script setup>
import { ref } from 'vue'
import A from './A.vue'
import B from './B.vue'
const view = ref('A')
const map = { A, B }
</script>

<template>
  <section>
    <h3>KeepAlive 演示</h3>
    <div><button @click="view = 'A'">A</button> <button @click="view = 'B'">B</button></div>
    <keep-alive><component :is="map[view]" /></keep-alive>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>