<script setup>
// 该指令比 autofocus 属性更有用，因为它不仅在页面加载时有效，而且在 Vue 动态插入元素时也有效！
const vFocus = { mounted(el){ el.focus() } }
</script>

<template>
  <section>
    <div class="container">
      <h3>自定义指令演示</h3>
      <input v-focus placeholder="自动聚焦" />
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
input { padding: 6px 10px; border:1px solid #e5e7eb; border-radius:6px; }
input:focus { outline: none; border-color: #0369a1; }
</style>