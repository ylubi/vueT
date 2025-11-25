<script setup>
import Child from './Child.vue'
import { ref } from 'vue'
const logs = ref([])
</script>

<template>
  <section>
    <div class="container">
      <h3>透传 Attributes 演示</h3>
      <span class="remark">父组件传入的 class/style/id/@click 会自动透传到子组件根元素。</span>
      <Child class="large" style="color: rgb(43, 164, 109)" id="btn1" @click="()=>logs.push('parent click')" />
      <div class="group">
        <span class="label">父组件事件</span>
        <pre>{{ logs }}</pre>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
.group { display: grid; gap: 4px; margin-top: 10px;}
.label { font-weight: bold; margin-right: 8px; }
.large { font-size: 16px;}
.remark { font-size: 14px; color: #666; }
</style>