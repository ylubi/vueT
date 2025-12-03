<script setup>
import { useCounter } from './useCounter.js'
const { n, inc, dec } = useCounter()
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>组合式函数演示</h1>
        <span class="desc">useCounter 组合式函数</span>
        <div class="section-item">
          <span class="remark">计数器值：</span>
          <span class="code">{{ n }}</span>
        </div>
        <div class="section-item">
          <span class="remark">操作：</span>
          <span class="code">
            <button class="inc" @click="inc">增加</button>
            <button class="dec" @click="dec">减少</button>
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
  display: flex;
  align-items: center;
}

button { padding: 4px 8px; border:1px solid #e5e7eb; border-radius:4px; margin-right: 8px; cursor: pointer; }
.inc { background-color: #e0f2fe; color: #0369a1; }
.dec { background-color: #fecdd3; color: #b91c1c; }
</style>
