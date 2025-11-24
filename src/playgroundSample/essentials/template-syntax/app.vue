<script setup>
import { ref } from 'vue'
const msg = ref('Hello')
const rawHtml = '<span style="color: red">This should be red.</span>'
const dynamicId = 'list-1'
const isButtonDisabled = false
const objectOfAttrs = { id: 'container', class: 'wrapper' }
const number = 1
const ok = true
const id = 42
</script>

<template>
  <section>
    <h3>模板语法演示</h3>
    <p>文本插值：{{ msg }}</p>
    <p>原始 HTML：<span v-html="rawHtml"></span></p>
    <div :id="dynamicId">attribute 绑定</div>
    <button :disabled="isButtonDisabled">布尔属性</button>
    <div v-bind="objectOfAttrs">批量绑定</div>
    <p>表达式：{{ number + 1 }} / {{ ok ? 'YES' : 'NO' }}</p>
    <div :id="'list-' + id">模板内表达式与模板字符串</div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.wrapper { padding: 4px; background: #f3f4f6; }
</style>