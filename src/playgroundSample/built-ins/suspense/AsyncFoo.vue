<script setup>
import { ref, onMounted } from 'vue'
const ready = ref(false)

// 会阻止组件渲染，setup() 阶段暂停
// setup 未完成， Suspense 显示 fallback
await new Promise(r => setTimeout(r, 1000)); 
ready.value = true 
</script>

<template>
  <div v-if="ready">异步内容已准备</div>
</template>
