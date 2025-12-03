<script setup>
import { ref } from 'vue'
const items = ref([{ id: 1, text: "A" }, { id: 2, text: "B" }])
const obj = ref({ a: 1, b: 2 })
const n = ref(5)
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>列表渲染演示</h1>
        <span class="desc">v-for 指令的使用</span>
        <div class="section-item">
          <span class="remark">数组循环：</span>
          <span class="code"><ul><li v-for="item in items" :key="item.id">{{ item.text }}</li></ul></span>
        </div>
        <div class="section-item">
          <span class="remark">对象循环：</span>
          <span class="code">
            <div v-for="(val, key, i) in obj" :key="key">{{ key }}: {{ val }} ({{ i }})</div>
          </span>
        </div>
        <div class="section-item">
          <span class="remark">范围循环：</span>
          <span class="code">
            <div class="col">
             <span v-for="i in n" :key="i" style="margin-right:4px">{{ i }}</span>
            </div>
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
.section-item { display: flex; align-items: flex-start; gap: 8px; flex-direction: column;}
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
  width: 100%;
  box-sizing: border-box;
}
ul { margin: 0; padding-left: 20px; }
.col {display: flex; flex-direction: column; align-items: flex-start; }
</style>
