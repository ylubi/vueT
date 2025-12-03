<script setup>
// SSR 示例通常涉及服务器端逻辑，此处仅展示占位
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>SSR 概念演示</h1>
        <span class="desc">服务端渲染</span>
        <div class="section-item col">
          <span class="remark">说明：</span>
          <span class="code">
            这是一个 SSR 示例的占位符。<br>
            服务端渲染需要在 Node.js 环境中运行，此处仅展示前端组件结构。
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

.col { flex-direction: column; align-items: flex-start; }
</style>
