<script setup>
import { ref, useAttrs } from 'vue'
const childLogs = ref([])
defineOptions({ inheritAttrs: true })
const attrs = useAttrs()
</script>

<template>
  <div>
    <button class="btn" @click="childLogs.push('child click')">子组件按钮 (根元素)</button>
    <p>child attrs: {{ attrs }}</p>
    <pre>{{ childLogs }}</pre>
  </div>
</template>

<style scoped>
.btn { padding: 6px 10px; border:1px solid #e5e7eb; border-radius:6px }
</style>