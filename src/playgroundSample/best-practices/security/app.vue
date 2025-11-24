<script setup>
import { ref, computed } from 'vue'
const html = ref('<strong>Hello</strong> <img src=x onerror=\'alert(1)\' />')
const safe = computed(() => html.value.replace(/on\w+\s*=\s*("[^"]*"|\'[^\']*\')/gi, ""))
</script>

<template>
  <section>
    <h3>安全演示</h3>
    <p>避免对不可信内容使用 v-html。下方同时展示原始与简化处理后的内容：</p>
    <textarea v-model="html" rows="4" style="width:100%" />
    <div style="display:grid;gap:8px">
      <div>
        <h4>原始 v-html</h4>
        <div v-html="html"></div>
      </div>
      <div>
        <h4>简单移除事件属性</h4>
        <div v-html="safe"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>