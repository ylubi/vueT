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
    <div class="container">
      <div class="section-container">
        <h1>事件处理演示</h1>
        <span class="desc">事件监听与修饰符</span>
        <div class="section-item">
          <span class="remark">基础点击：</span>
          <span class="code"><button @click="onClick">点击我</button></span>
        </div>
        <div class="section-item">
          <span class="remark">停止冒泡：</span>
          <span class="code"><div @click.stop="handler" class="box">点击不冒泡</div></span>
        </div>
        <div class="section-item">
          <span class="remark">阻止提交：</span>
          <span class="code">
            <form @submit.prevent="onSubmit" style="display:flex;gap:4px">
              <input placeholder="表单" style="width:60px"/>
              <button type="submit">提交</button>
            </form>
          </span>
        </div>
        <div class="section-item">
          <span class="remark">按键修饰符：</span>
          <span class="code"><input @keyup.enter="onEnter" placeholder="按回车" /></span>
        </div>
        <div class="section-item col">
          <span class="remark">日志：</span>
          <span class="code">{{ log }}</span>
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
.section-item .remark { font-size: 14px; color: #333; min-width: 90px; }
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
button { padding: 2px 8px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; }
input { padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 13px; outline: none; height: 32px;}
input:focus { border-color: #42b883; box-shadow: 0 0 0 2px rgba(66,184,131,0.1); }
.box { border: 1px dashed #ccc; padding: 2px 6px; cursor: pointer; }
.col { flex-direction: column; align-items: flex-start; }
input {min-width: 160px;}
</style>
