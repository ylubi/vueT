<script setup>
import { ref } from 'vue'
const ok = ref(true)
const visible = ref(true)
</script>

<template>
  <section>
    <h3>条件渲染演示</h3>
    <p v-if="ok">OK</p><p v-else>NO</p>
    <p v-show="visible">Visible</p>
    <template v-if="ok"><p>A</p><p>B</p></template>
    <button @click="ok = !ok">toggle ok</button>
    <button @click="visible = !visible">toggle visible</button>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>