<script setup>
import { ref } from 'vue'
const name = ref('Vue')
</script>

<template>
  <section>
    <div class="container">
      <h3>插件演示</h3>
      <p>{{ $greet(name) }}</p>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
</style>