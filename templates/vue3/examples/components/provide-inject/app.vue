<script setup>
import { ref, provide } from 'vue'
import Child from './Child.vue'
const color = ref('#0ea5e9')
const size = ref(14)
provide("color", color)
provide("size", size)
</script>

<template>
  <section>
    <div class="container">
      <h3>依赖注入演示</h3>
      <div>
        <label>颜色 <input v-model="color" /></label> 
        <label>字号 <input v-model.number="size" type="number" /></label>
      </div>
      <Child />
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