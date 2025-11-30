<script setup>
import { ref, computed } from 'vue'
const count = ref(1)
const double = computed(() => count.value * 2)
const firstName = ref('貂')
const lastName = ref('蝉')
const fullName = computed({
  get: () => firstName.value + " " + lastName.value,
  set: (v) => { const p = v.split(" "); firstName.value = p[0] || ""; lastName.value = p[1] || "" }
})
</script>

<template>
  <section>
    <h3>计算属性演示</h3>
    <p>当前计数: {{ count }} / 加倍: {{ double }}</p>
    <button @click="count++">计数++</button>
  </section>
  <section>
    <div><input v-model="fullName" /></div>
    <p>{{ firstName }} | {{ lastName }}</p>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; margin: 18px 0;}
</style>