<script setup>
import { ref, computed } from 'vue'
const count = ref(1)
const double = computed(() => count.value * 2)
const firstName = ref('貂')
const lastName = ref('蝉')
const fullName = computed({
  get: () => firstName.value + " " + lastName.value,
  set: (v) => { const p = v.split(" "); firstName.value = p[0] || ""; lastName.value = p[1] || "" }
})
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>计算属性演示</h1>
        <span class="desc">基础计算属性与可写计算属性</span>
        <div class="section-item">
          <span class="remark">只读计算：</span>
          <span class="code">计数: {{ count }} | 加倍: {{ double }} <button @click="count++">+1</button></span>
        </div>
        <div class="section-item">
          <span class="remark">可写计算：</span>
          <span class="code">
            <input v-model="fullName" placeholder="修改全名" />
            <p style="margin-top:4px">姓: {{ firstName }} | 名: {{ lastName }}</p>
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
.section-item { display: flex; align-items: flex-start; gap: 8px; flex-direction: column; }
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
button { margin-left: 8px; padding: 2px 6px; border:1px solid #ccc; border-radius:4px; cursor:pointer;}
input { padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 13px; outline: none; height: 32px;}
input:focus { border-color: #42b883; box-shadow: 0 0 0 2px rgba(66,184,131,0.1); }
</style>
