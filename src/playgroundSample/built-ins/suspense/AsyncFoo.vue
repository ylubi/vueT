<script setup>
import { ref, onMounted } from 'vue'
const ready = ref(false)
onMounted(async () => { await new Promise(r => setTimeout(r, 1000)); ready.value = true })
</script>

<template>
  <div v-if="ready">异步内容已准备</div>
</template>