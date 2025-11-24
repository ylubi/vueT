<script setup>
import Child from './Child.vue'
const msg = 'Hello'
function onClose(){ alert("closed") }
</script>

<template>
  <section>
    <h3>组件基础演示</h3>
    <Child :msg="msg" @close="onClose" />
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>