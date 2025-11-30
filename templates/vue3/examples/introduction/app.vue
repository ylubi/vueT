<script setup>
import { ref } from 'vue'
const msg = ref('Hello Vue')
const count = ref(0)
</script>

<template>
  <section>
    <h3>简介演示</h3>
    <p>{{ msg }}</p>
    <button @click="count++">count: {{ count }}</button>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>