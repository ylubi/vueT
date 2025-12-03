<script setup>
import { ref } from 'vue'
const text = ref('')
const checked = ref(false)
const picked = ref('A')
const age = ref(18)
const name = ref('')
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>表单输入绑定演示</h1>
        <span class="desc">v-model 双向绑定</span>
        <div class="section-item">
          <span class="remark">文本输入：</span>
          <span class="code"><input v-model="text" placeholder="文本" /></span>
        </div>
        <div class="section-item">
          <span class="remark">复选框：</span>
          <span class="code"><label><input type="checkbox" v-model="checked" />复选</label></span>
          <span>{{ checked }}</span>
        </div>
        <div class="section-item">
          <span class="remark">单选框：</span>
          <span class="code">
            <div style="display:flex;gap:8px">
              <label><input type="radio" value="A" v-model="picked" /> A</label>
              <label><input type="radio" value="B" v-model="picked" /> B</label>
            </div>
          </span>
          <span>选择：{{ picked }}</span>
        </div>
        <div class="section-item">
          <span class="remark">数字修饰符：</span>
          <span class="code">
            <input v-model.number="age" type="number" style="width:60px" /> 年龄：{{ age }} ({{ typeof age }})
          </span>
        </div>
        <div class="section-item">
          <span class="remark">Trim 修饰符：</span>
          <span class="code">
            <input v-model.trim="name" placeholder="去掉两端空格" /> "{{ name }}"
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
  gap: 8px;
}

input { padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 13px; outline: none; height: 32px;}
input:focus { border-color: #42b883; box-shadow: 0 0 0 2px rgba(66,184,131,0.1); }

label { display: flex; align-items: center; gap: 4px; cursor: pointer; }
</style>
