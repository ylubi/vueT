<script setup>
import { useCounter } from './useCounter.js'
const { n, inc, dec } = useCounter()
</script>

<template>
  <section>
    <h3>组合式函数演示</h3>
    <p>n: {{ n }}</p>
    <div><button @click="inc">inc</button> <button @click="dec">dec</button></div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>