<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
const log = ref([])
function onClose(){ log.value.push("close") }
</script>

<template>
  <section>
    <div class="container">
      <h3>事件演示</h3>
      <Child @close="onClose" />
      <span class="label">事件记录：</span>
      <pre>{{ log }}</pre>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
.label { font-weight: bold; margin-right: 8px; }
</style>