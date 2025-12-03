<script setup>
import { ref } from 'vue'
import { useCounterStore } from './stores/counter.js'
const store = useCounterStore()
const input = ref('')
function add(){ if(input.value.trim()) { store.addTodo(input.value); input.value = "" } }
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>状态管理演示</h1>
        <span class="desc">Pinia 风格的 Store</span>
        <div class="section-item">
          <span class="remark">状态：</span>
          <span class="code">
            count: {{ store.count }} | double: {{ store.double }}
            <button @click="store.inc" style="margin-left:8px">+1</button>
          </span>
        </div>
        <div class="section-item">
          <span class="remark">Todo：</span>
          <span class="code">
            <div style="display:flex;gap:4px">
              <input v-model="input" placeholder="新任务" style="width:100px"/>
              <button @click="add">添加</button>
            </div>
            <ul style="margin:4px 0 0 0;padding-left:16px">
              <li v-for="t in store.todos" :key="t.id">{{ t.text }}</li>
            </ul>
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
button { padding: 2px 8px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; }

input { padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 13px; outline: none; height: 28px; min-width: 160px; }
input:focus { border-color: #42b883; box-shadow: 0 0 0 2px rgba(66,184,131,0.1); }
</style>
