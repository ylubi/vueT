<script setup>
import { ref, onMounted } from 'vue'
const loadedAt = ref('')
onMounted(() => { loadedAt.value = new Date().toLocaleString() })
</script>

<template>
  <div class="box">
    <h4>异步加载的子组件</h4>
    <p>组件挂载时间：{{ loadedAt }}</p>
    <button @click="$emit('close')" class="btn">关闭</button>
  </div>
  
</template>

<style scoped>
.box { border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:grid; gap:8px; }
.btn { padding:6px 10px; border:1px solid #e5e7eb; border-radius:6px; background:#f8fafc; }
.btn:hover { background:#eef2f7 }
</style>
