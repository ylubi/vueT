<script setup>
import Child from './Child.vue'
</script>

<template>
  <section>
    <div class="container">
      <h3>插槽演示</h3>
      <Child>
        <template #header>自定义头部</template>
        <template #default="{ count }">默认插槽：{{ count }}</template>
        <template #footer>底部</template>
      </Child>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
</style>