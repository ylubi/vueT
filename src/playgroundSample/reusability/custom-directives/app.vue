<script setup>
const vFocus = { mounted(el){ el.focus() } }
defineOptions({ directives: { focus: vFocus } })
</script>

<template>
  <section>
    <h3>自定义指令演示</h3>
    <input v-focus placeholder="自动聚焦" />
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>