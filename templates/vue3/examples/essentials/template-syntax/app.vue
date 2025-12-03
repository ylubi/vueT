<script setup>
import { ref } from 'vue'
const msg = ref('Hello')
const rawHtml = '<span style="color: red">This should be red.</span>'
const dynamicId = 'list-1'
const labelClass = 'label'
const isButtonDisabled = false
const objectOfAttrs = { id: 'container', class: 'wrapper' }
const number = 1
const ok = true
const id = 42
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>模板语法演示</h1>
        <span class="desc">模板语法演示</span>
        <div class="section-item">
          <span class="remark">文本插值：</span>
          <span class="code">{{ msg }}</span>
        </div>
        <div class="section-item">
          <span class="remark">v-html 渲染：</span>
          <span class="code"><span v-html="rawHtml"></span></span>
        </div>
        <div class="section-item">
          <span class="remark">attribute 绑定：</span>
          <span class="code"><div v-bind:id="dynamicId">attribute 绑定</div></span>
        </div>
        <div class="section-item">
          <span class="remark">布尔属性 绑定：</span>
          <span class="code"><button :id="dynamicId" :disabled="isButtonDisabled">布尔属性 绑定</button></span>
        </div>
        <div class="section-item">
          <span class="remark">批量绑定：</span>
          <span class="code"><div v-bind="objectOfAttrs">批量绑定</div></span>
        </div>
        <div class="section-item">
          <span class="remark">表达式：</span>
          <span class="code">{{ number + 1 }} / {{ ok ? 'YES' : 'NO' }}</span>
        </div>
        <div class="section-item">
          <span class="remark">:id 内拼接：</span>
          <span class="code"><div :id="'list-' + id">视作js代码拼接，拼接后id list-{{ id }}</div></span>
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
</style>