<script setup>
import { ref } from 'vue'
const items = ref([{ id: 1, text: "A" }, { id: 2, text: "B" }])
const obj = ref({ a: 1, b: 2 })
</script>

<template>
  <section>
    <h3>列表渲染演示</h3>
    <ul><li v-for="item in items" :key="item.id">{{ item.text }}</li></ul>
    <div v-for="(val, key, i) in obj" :key="key">{{ i }}-{{ key }}: {{ val }}</div>
    <div v-for="n in 5" :key="n">{{ n }}</div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>