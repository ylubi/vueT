<script setup>
import { ref, onMounted } from 'vue'
const serverData = { user: { name: "Ada" }, ts: 123 }
const hydrated = ref(false)
onMounted(() => { hydrated.value = true })
</script>

<template>
  <section>
    <h3>SSR 概念演示</h3>
    <p>服务端数据：{{ serverData }}</p>
    <p>是否已水合：{{ hydrated }}</p>
  </section>
</template>