<script setup>
import Child from './Child.vue'
import { ref } from 'vue'
const msg = ref('Hello Props')
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>Props 演示</h1>
        <span class="desc">组件间数据传递</span>
        <div class="section-item">
          <span class="remark">父组件输入：</span>
          <span class="code"><input v-model="msg" /></span>
        </div>
        <div class="section-item">
          <span class="remark">子组件接收：</span>
          <span class="code"><Child :msg="msg" /></span>
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
}
input { padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 13px; outline: none; height: 32px;}
input:focus { border-color: #42b883; box-shadow: 0 0 0 2px rgba(66,184,131,0.1); }
</style>