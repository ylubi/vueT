<script setup>
import { ref, useAttrs } from 'vue'
const childLogs = ref([])
defineOptions({ inheritAttrs: true })
const attrs = useAttrs()
</script>

<template>
  <div>
    <button class="btn" @click="childLogs.push('child click')">子组件按钮 (根元素)</button>
    <div class="group">
      <span class="label">子组件attrs</span>
      <pre>{{ attrs }}</pre>
    </div>
    <div class="group">
      <span class="label">子组件事件</span>
      <pre>{{ childLogs }}</pre>
    </div>
  </div>
</template>

<style scoped>
.btn { padding: 6px 10px; border:1px solid #e5e7eb; border-radius:6px }
</style>