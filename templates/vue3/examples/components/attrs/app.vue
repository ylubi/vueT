<script setup>
import Child from './Child.vue'
import { ref } from 'vue'
const logs = ref([])
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>透传 Attributes 演示</h1>
        <span class="desc">Attributes 继承</span>
        <div class="section-item">
          <span class="remark">说明：</span>
          <span class="desc">父组件传入的 class/style/id/@click 会自动透传到子组件根元素。</span>
        </div>
        <div class="section-item col">
          <span class="remark">组件：</span>
          <span class="code">
            <Child class="large" style="color: rgb(43, 164, 109)" id="btn1" @click="()=>logs.push('parent click')" />
          </span>
        </div>
        <div class="section-item col">
          <span class="remark">日志：</span>
          <span class="code">{{ logs }}</span>
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
:deep(.large) { font-weight: bold; }
.col {display: flex; flex-direction: column; align-items: flex-start;}
</style>
