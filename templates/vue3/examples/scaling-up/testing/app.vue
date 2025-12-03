<script setup>
import { ref } from 'vue'
import { sum } from './math.js'
const results = ref([])
function run(){ 
  results.value = []; 
  results.value.push("sum(1,2) => " + sum(1,2)); 
  results.value.push("sum(0,0) => " + sum(0,0)); 
  results.value.push("sum(-1,1) => " + sum(-1,1)) 
}

</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>测试演示</h1>
        <span class="desc">单元测试概念展示</span>
        <div class="section-item">
          <span class="remark">控制：</span>
          <button class="btn" @click="run">运行测试</button>
        </div>
        <div class="section-item col" v-if="results.length">
          <span class="remark">结果：</span>
          <span class="code output">
            <div v-for="(line, index) in results" :key="index" class="log-line">{{ line }}</div>
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
.section-item { display: flex; align-items: flex-start; gap: 8px; }
.section-item .remark { font-size: 14px; color: #333; margin-top: 6px; }
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
.output { display: grid; gap: 2px; }
.log-line { color: #059669; }
.btn { 
  background: #10b981; color: #fff; border: none; border-radius: 4px; padding: 4px 12px; cursor: pointer; font-size: 13px; transition: background 0.2s;
}
.btn:hover { background: #059669; }

.col { flex-direction: column; align-items: flex-start; }
</style>