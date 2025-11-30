<script setup>
import Child from './Child.vue'
import { ref } from 'vue'
const msg = ref('Hello Props')
</script>

<template>
  <section>
    <div class="container">
      <h3>Props 演示</h3>
      <input v-model="msg" />
      <Child :msg="msg" />
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
input{
  padding: 8px 10px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; outline: none;
}
input:focus {
  border-color: #42b883; box-shadow: 0 0 0 3px rgba(66,184,131,.15);
}
</style>