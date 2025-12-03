<script setup>
import { ref } from 'vue'
import A from './A.vue'
import B from './B.vue'
const view = ref('A')
const map = { A, B }
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>KeepAlive 演示</h1>
        <span class="desc">一个内置组件，它的功能是在多个组件间动态切换时缓存被移除的组件实例。</span>
        <div class="section-item">
          <span class="remark">切换组件：</span>
          <span class="code">
            <button @click="view = 'A'" :class="{ active: view === 'A' }">组件 A</button>
            <button @click="view = 'B'" :class="{ active: view === 'B' }">组件 B</button>
          </span>
        </div>
        <div class="section-item col">
          <span class="remark">当前组件：</span>
          <span class="code">
            <keep-alive><component :is="map[view]" /></keep-alive>
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
button { padding: 4px 10px; border:1px solid #e5e7eb; border-radius:6px; cursor: pointer; margin-right: 8px; }
button.active { background: #2ba46d; color: #fff; border-color: #2ba46d; }
.col {display: flex; flex-direction: column; align-items: flex-start;}
</style>
