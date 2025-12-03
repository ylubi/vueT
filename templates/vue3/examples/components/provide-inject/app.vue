<script setup>
import { ref, provide } from 'vue'
import Child from './Child.vue'
const color = ref('#0ea5e9')
const size = ref(14)
provide("color", color)
provide("size", size)
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>依赖注入演示</h1>
        <span class="desc">provide 和 inject，可以实现跨层次的依赖注入。不同于prop 逐级透传</span>
        <div class="section-item">
          <span class="remark">控制：</span>
          <span class="code">
            <label>颜色 <input v-model="color" /></label> 
            <label style="margin-left:8px">字号 <input v-model.number="size" type="number" style="width:50px"/></label>
          </span>
        </div>
        <div class="section-item col">
          <span class="remark">子组件：</span>
          <span class="code"><Child /></span>
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
label { font-size: 13px; }
.col { flex-direction: column; display: flex; align-items: flex-start; }
</style>
