<script setup>
import { ref } from 'vue'
const env = ref({ NODE_ENV: "production", API: "https://api.example.com" })
</script>

<template>
  <section>
    <h3>生产部署概念演示</h3>
    <p>环境变量：{{ env }}</p>
    <p>静态资源可通过 CDN 部署并结合缓存策略。</p>
  </section>
</template>