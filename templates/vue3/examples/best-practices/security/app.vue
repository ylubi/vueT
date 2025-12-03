<script setup>
import { ref, computed } from 'vue'
const html = ref('<strong>Hello</strong> <img src=x onerror=\'alert(1)\' />')
const safe = computed(() => html.value.replace(/on\w+\s*=\s*("[^"]*"|\'[^\']*\')/gi, ""))
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>安全演示</h1>
        <span class="desc">XSS 防护与内容净化</span>
        <div class="section-item">
          <span class="remark">输入：</span>
          <span class="code" style="display:block;width:100%">
            <textarea v-model="html" rows="4" style="width:100%;border:1px solid #e5e7eb;border-radius:4px;padding:8px;font-family:monospace" />
          </span>
        </div>
        <div class="section-item">
          <span class="remark">原始渲染：</span>
          <span class="code"><div v-html="html"></div></span>
        </div>
        <div class="section-item">
          <span class="remark">净化渲染：</span>
          <span class="code"><div v-html="safe"></div></span>
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
</style>