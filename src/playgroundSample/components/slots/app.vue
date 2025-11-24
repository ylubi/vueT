<script setup>
import Child from './Child.vue'
</script>

<template>
  <section>
    <h3>插槽演示</h3>
    <Child>
      <template #header>自定义头部</template>
      <template #default="{ count }">默认插槽：{{ count }}</template>
      <template #footer>底部</template>
    </Child>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>