<script setup>
import { defineAsyncComponent, ref } from 'vue'
const show = ref(false)
const Lazy = defineAsyncComponent(() => import('./Lazy.vue'))
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>工具链演示</h1>
        <span class="desc">异步加载与 Suspense</span>
        <div class="section-item">
          <span class="remark">控制：</span>
          <span class="">
            <button class="btn" @click="show = !show">{{ show ? '卸载' : '加载' }} Lazy 组件</button>
          </span>
        </div>
        <div class="section-item col">
          <span class="remark">组件：</span>
          <span class="" style="display:block;width:100%">
            <Suspense>
              <template #default><Lazy v-if="show" /></template>
              <template #fallback><span class="loading">加载中...</span></template>
            </Suspense>
          </span>
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
.btn { 
  background: #10b981; color: #fff; border: none; border-radius: 4px; padding: 4px 12px; cursor: pointer; font-size: 13px; transition: background 0.2s;
}
.btn:hover { background: #059669; }
.loading { color: #6b7280; font-style: italic; }

.col { flex-direction: column; align-items: flex-start; }
</style>