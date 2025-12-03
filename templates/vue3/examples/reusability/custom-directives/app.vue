<script setup>
// 该指令比 autofocus 属性更有用，因为它不仅在页面加载时有效，而且在 Vue 动态插入元素时也有效！
const vFocus = { mounted(el){ el.focus() } }
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>自定义指令演示</h1>
        <span class="desc">自定义指令 v-focus</span>
        <div class="section-item">
          <span class="remark">自动聚焦输入框：</span>
          <span class="code"><input v-focus placeholder="自动聚焦" /></span>
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

input { padding: 6px 10px; border:1px solid #e5e7eb; border-radius:6px; }
input:focus { outline: none; border-color: #0369a1; }
</style>
