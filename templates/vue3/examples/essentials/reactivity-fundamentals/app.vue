<script setup>
import { ref, reactive, watch, watchEffect, toRefs } from 'vue'
const count = ref(0)
const user = reactive({ name: '貂蝉', age: 18 })
const { name, age } = toRefs(user)
watch(count, (n, o) => console.log(`count: ${n}`))
watchEffect(() => { console.log(`name: ${name.value}`) })
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>响应式基础演示</h1>
        <span class="desc">ref, reactive, watch</span>
        <div class="section-item">
          <span class="remark">ref 计数：</span>
          <span class="code">
            <button @click="count++">count++</button>
            <span style="margin-left:8px">{{ count }}</span>
          </span>
        </div>
        <div class="section-item col">
          <span class="remark">reactive 对象：</span>
          <span class="code">
            <div class="form-group">
              <label>Name: <input v-model="name" /></label>
              <label>Age: <input v-model.number="age" type="number" /></label>
              <div class="user-preview">User: {{ user }}</div>
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
button { padding: 4px 10px; border: 1px solid #e5e7eb; border-radius: 6px; cursor: pointer; background: #fff; transition: all 0.2s; }
button:hover { border-color: #2ba46d; color: #2ba46d; }
input { padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 13px; outline: none; height: 32px;}
input:focus { border-color: #42b883; box-shadow: 0 0 0 2px rgba(66,184,131,0.1); }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group label { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #4b5563; width: 100%; justify-content: space-between;}
.user-preview { margin-top: 4px; padding: 4px 8px; background: #fff; border: 1px dashed #d1d5db; border-radius: 4px; color: #6b7280; }
.col {flex-direction: column; align-items: flex-start;}
</style>
