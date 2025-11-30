<script setup>
import { ref } from 'vue'
const log = ref([])
function onClick(){ log.value.push("clicked") }
function handler(){ log.value.push("bubble stopped") }
function onSubmit(e){ log.value.push("submit prevented") }
function onEnter(){ log.value.push("enter key") }
</script>

<template>
  <section>
    <h3>事件处理演示</h3>
    <div class="group">
      <span class="label">点击事件:</span>
      <button @click="onClick">点击事件</button>
    </div>
    <div class="group">
      <span class="label">冒泡事件:</span>
      <div @click.stop="handler" style="border:1px solid #e5e7eb;padding:8px;">@click.stop</div>
    </div>
    <div class="group">
      <span class="label">提交事件:</span>
      <form @submit.prevent="onSubmit"><input /><button type="submit">提交</button></form>
    </div>
    <div class="group">
      <span class="label">回车事件:</span>
      <input @keyup.enter="onEnter" placeholder="回车触发" />
    </div>
    <div class="group">
      <span class="label">事件日志:</span>
      <pre>{{ log }}</pre>
    </div>
  </section>
</template>

<style scoped>
.group { display: flex; align-items: center; padding: 10px 0; border-bottom: 4px solid #eee;}
.label { font-weight: bold; margin-right: 8px; }
.group button { padding: 4px 8px; background: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer; margin: 0 20px; flex-wrap: wrap;}
input {
  padding: 8px 10px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; outline: none;
}
input:focus{
  border-color: #42b883; box-shadow: 0 0 0 3px rgba(66,184,131,.15);
}
</style>