<script setup>
import { ref, reactive, watch, watchEffect, toRefs } from 'vue'
const count = ref(0)
const user = reactive({ name: 'Ada', age: 18 })
const { name, age } = toRefs(user)
watch(count, (n, o) => console.log(`count: ${n}`))
watchEffect(() => { console.log(`name: ${name.value}`) })
</script>

<template>
  <section>
    <h3>响应式基础演示</h3>
    <p>count: {{ count }}</p>
    <button @click="count++">count++</button>
    <div>name: <input v-model="name" /></div>
    <div>age: <input v-model.number="age" type="number" /></div>
    <p>user: {{ user }}</p>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>