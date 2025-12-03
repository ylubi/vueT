<script setup>
import Child from './Child.vue'
const msg = 'Hello'
function onClose(){ alert("closed") }
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>组件基础演示</h1>
        <span class="desc">父子组件通信</span>
        <div class="section-item col">
          <span class="remark">组件调用：</span>
          <Child :msg="msg" @close="onClose" />
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
}
.col { display: flex; flex-direction: column; align-items: flex-start;}
</style>
