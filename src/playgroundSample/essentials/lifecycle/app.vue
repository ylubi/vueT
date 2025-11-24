<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const c = ref(0)
let t = null
onMounted(() => { t = setInterval(() => c.value++, 500) })
onUnmounted(() => { if (t) { clearInterval(t); t = null } })
</script>

<template>
  <section>
    <h3>生命周期演示</h3>
    <p>计数：{{ c }}</p>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>