<script setup>
import Child from './Child.vue'
import { ref } from 'vue'
const msg = ref('Hello Props')
</script>

<template>
  <section>
    <h3>Props 演示</h3>
    <input v-model="msg" />
    <Child :msg="msg" />
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>