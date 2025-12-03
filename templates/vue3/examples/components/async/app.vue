<script setup>
import { defineAsyncComponent, ref } from 'vue'
const show = ref(false)
const AsyncChild = defineAsyncComponent(() => import('./AsyncChild.vue'))
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>异步组件演示</h1>
        <span class="desc">defineAsyncComponent 使用</span>
        <div class="section-item">
          <span class="remark">控制：</span>
          <span class="code"><button @click="show = !show">{{ show ? '卸载' : '加载' }} AsyncChild</button></span>
        </div>
        <div class="section-item" v-if="show">
          <span class="remark">组件：</span>
          <span class="code"><AsyncChild @close="show = false" /></span>
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
}
button { padding: 4px 10px; border:1px solid #e5e7eb; border-radius:6px; cursor: pointer; }
</style>
