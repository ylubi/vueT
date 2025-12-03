<script setup>
import { ref } from 'vue'
const env = ref({ NODE_ENV: "production", API: "https://api.example.com" })
const meta = import.meta
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>生产部署演示</h1>
        <span class="desc">环境变量与构建优化</span>
        <div class="section-item col">
          <span class="remark">Env：</span>
          <span class="code">{{ env }}</span>
        </div>
        <div class="section-item col">
          <span class="remark">Meta：</span>
          <span class="code">{{ meta }}</span>
        </div>
        <div class="section-item col">
          <span class="remark">说明：</span>
          <span class="code">生产环境应开启 gzip/brotli 压缩，配置 CDN 缓存策略，并使用 HTTP/2。</span>
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
  flex: 1;
}
.col { flex-direction: column; align-items: flex-start; }
</style>