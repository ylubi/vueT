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
    <h3>模板语法演示</h3>
    <div class="group">
      <span class="label">文本插值：</span>
      <span class="value">{{ msg }}</span>
    </div>
    <div class="group">
      <span class="label">v-html 渲染：</span>
      <span class="value"><span v-html="rawHtml"></span></span>
    </div>
    <div class="group">
      <span :class="labelClass">attribute 绑定：</span>
      <button :id="dynamicId" :disabled="isButtonDisabled">布尔属性 绑定</button>
    </div>
    <div class="group">
      <span class="label">批量绑定：</span>
      <div v-bind="objectOfAttrs">批量绑定</div>
    </div>
    <div class="group">
      <span class="label">表达式：</span>
      <span class="value">{{ number + 1 }} / {{ ok ? 'YES' : 'NO' }}</span>
    </div>
    <div class="group">
      <span class="label">:id 内拼接：</span>
      <div :id="'list-' + id">视作js代码拼接，拼接后id list-{{ id }}</div>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.group { display: flex; align-items: center; padding: 10px 0; border-bottom: 4px solid #eee;}
.label { font-weight: bold; margin-right: 8px; }
.value { flex: 1; }
.wrapper { padding: 4px; background: #f3f4f6; color:aqua ;}
</style>