<script setup>
import { ref } from 'vue'
import { sum } from './math.js'
const results = ref([])
function run(){ 
  results.value = []; 
  results.value.push("sum(1,2) => " + sum(1,2)); 
  results.value.push("sum(0,0) => " + sum(0,0)); 
  results.value.push("sum(-1,1) => " + sum(-1,1)) 
}
run()
</script>

<template>
  <section>
    <div class="container">
      <h3>测试概念演示</h3>
      <button @click="run">重新运行</button>
      <pre>{{ results }}</pre>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
</style>