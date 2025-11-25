<script setup>
import { ref } from 'vue'
const env = ref({ NODE_ENV: "production", API: "https://api.example.com" })
const meta = import.meta
</script>

<template>
  <section>
    <div class="container">
      <h3>生产部署概念演示</h3>
      <p>环境变量：{{ env }}</p>
      <p>环境变量（import.meta{{ meta }}</p>
      <p>环境变量（import.meta.env）：{{ meta.env }}</p>
      <p>静态资源可通过 CDN 部署并结合缓存策略。</p>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
.label { font-weight: bold; margin-right: 8px; }
</style>