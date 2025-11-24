<script setup>
import { ref } from 'vue'
const name = ref('Vue')
</script>

<template>
  <section>
    <h3>插件演示</h3>
    <p>{{ $greet(name) }}</p>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>