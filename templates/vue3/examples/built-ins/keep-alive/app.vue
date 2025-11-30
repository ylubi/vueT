<script setup>
import { ref } from 'vue'
import A from './A.vue'
import B from './B.vue'
const view = ref('A')
const map = { A, B }
</script>

<template>
  <section>
    <div class="container">
      <h3>KeepAlive 演示</h3>
      <div>
        <button @click="view = 'A'">显示组件 A</button>&nbsp;
        <button @click="view = 'B'">显示组件 B</button>
      </div>
      <keep-alive><component :is="map[view]" /></keep-alive>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
</style>