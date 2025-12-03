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
.btn {
  padding: 6px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 13px;
  color: #374151;
  transition: all 0.2s;
}
.btn:hover {
  border-color: #2ba46d;
  color: #2ba46d;
  background-color: #f0fdf4;
}
.group { margin-top: 8px; }
.label { font-size: 12px; color: #6b7280; margin-bottom: 4px; display: block; }
pre { 
  background: #f3f4f6; padding: 8px; border-radius: 6px; font-size: 12px; color: #1f2937; margin: 0; 
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
</style>