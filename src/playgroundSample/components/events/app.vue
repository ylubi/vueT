<script setup>
import Child from './Child.vue'
const log = []
function onClose(){ log.push("close") }
</script>

<template>
  <section>
    <h3>事件演示</h3>
    <Child @close="onClose" />
    <pre>{{ log }}</pre>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>