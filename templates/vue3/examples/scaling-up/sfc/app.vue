<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
const count = ref(0)
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>单文件组件 (SFC) 演示</h1>
        <span class="desc">Vue 组件的构建块</span>
        <div class="section-item">
          <span class="remark">父组件：</span>
          <span class="code">
            <span class="label">Count: {{ count }}</span>
            <button class="btn" @click="count++">增加</button>
          </span>
        </div>
        <div class="section-item">
          <span class="remark">子组件：</span>
          <span class="code"><Child :count="count" /></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
.section-container { display: grid; gap: 8px; padding: 12px; border: 1px solid #2ba46d; border-radius: 8px; background: #ffffff; }
.section-container h1 { font-size: 18px; font-weight: 600; color: #1f2937; }
.section-container .desc { font-size: 14px; font-weight: 500; color: #4b5563; }
.section-item { display: flex; align-items: center; gap: 8px; }
.section-item .remark { font-size: 14px; color: #333; }
.section-item .code { 
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 13px;
  color: #111827;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 6px 8px;
  line-height: 1.6;
  white-space: pre-wrap;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn { 
  background: #10b981; color: #fff; border: none; border-radius: 4px; padding: 4px 10px; cursor: pointer; font-size: 12px; transition: background 0.2s;
}
.btn:hover { background: #059669; }
.label { font-weight: 500; color: #374151; }
</style>