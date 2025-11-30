<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>组件 A</div>
  <div class="col">
    <button @click="count++">增加</button>
    <span>当前计数: {{ count }}</span>
    <span class="remark">切换tab页，不影响计数。</span>
    <span class="remark">keep-alive 包裹动态组件可在切换间保留内部状态。</span>
  </div>
</template>

<style scoped>
div { color: #2ba46d; font-size: 18px; font-weight: 500; }
.col { display: flex; flex-direction: column; align-items: flex-start; padding: 10px 0; }
.col span{ margin-top: 4px; }
.remark { color: #6b7280; font-size: 14px; font-weight: 400; }
</style>