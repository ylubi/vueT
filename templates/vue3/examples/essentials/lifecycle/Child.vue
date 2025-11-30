<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const cc = ref(0)
let t = null
onMounted(() => { t = setInterval(() => cc.value++, 500) })
onUnmounted(() => { if (t) { clearInterval(t); t = null } })
</script>

<template>
  <section>
    <h3>子组件生命周期演示</h3>
    <p>子组件计数：{{ cc }}</p>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>