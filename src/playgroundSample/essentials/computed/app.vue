<script setup>
import { ref, computed } from 'vue'
const count = ref(1)
const double = computed(() => count.value * 2)
const firstName = ref('Ada')
const lastName = ref('Lovelace')
const fullName = computed({
  get: () => firstName.value + " " + lastName.value,
  set: (v) => { const p = v.split(" "); firstName.value = p[0] || ""; lastName.value = p[1] || "" }
})
</script>

<template>
  <section>
    <h3>计算属性演示</h3>
    <p>count: {{ count }} / double: {{ double }}</p>
    <button @click="count++">count++</button>
    <div><input v-model="fullName" /></div>
    <p>{{ firstName }} | {{ lastName }}</p>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>