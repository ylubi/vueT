<script setup>
import { ref } from 'vue'
import { useCounterStore } from './stores/counter.js'
const store = useCounterStore()
const input = ref('')
function add(){ store.addTodo(input.value); input.value = "" }
</script>

<template>
  <section>
    <h3>状态管理演示（Pinia 风格）</h3>
    <p>count: {{ store.count }} / double: {{ store.double }}</p>
    <button @click="store.inc">inc</button>
    <div style="display:flex; gap:6px; align-items:center">
      <input v-model="input" placeholder="todo" />
      <button @click="add">添加</button>
    </div>
    <ul><li v-for="t in store.todos" :key="t.id">{{ t.text }}</li></ul>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px }
</style>