<script setup>
import { useCounter } from './useCounter.js'
const { n, inc, dec } = useCounter()
</script>

<template>
  <section>
    <div class="container">
      <h3>组合式函数演示</h3>
      <p>n: {{ n }}</p>
      <div>
        <button class="inc" @click="inc">inc 增加</button>
        <button class="dec" @click="dec">dec 减少</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
button { padding: 6px 10px; border:1px solid #e5e7eb; border-radius:6px; margin-right: 8px; }
.inc { background-color: #e0f2fe; color: #0369a1; }
.dec { background-color: #fecdd3; color: #b91c1c; }
</style>