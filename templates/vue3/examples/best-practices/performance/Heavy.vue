<script setup>
import { ref, computed } from 'vue'
const n = ref(10000)
const list = computed(() => Array.from({ length: n.value }, (_, i) => i))
const total = computed(() => list.value.reduce((a,b) => a + b, 0))
</script>

<template>
  <div>Heavy 组件：列表长度 {{ n }}，总和 {{ total }}</div>
</template>