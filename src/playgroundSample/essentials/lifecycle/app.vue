<!-- 
 生命周期演示 
 修改下面任意代码，可以重新计数

 或者卸载子组件后，计数会停止。重新挂载子组件后，计数会重新开始。
 -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Child from './Child.vue'
const c = ref(0)
const showChild = ref(true)
let t = null
onMounted(() => { t = setInterval(() => c.value++, 500) })
onUnmounted(() => { if (t) { clearInterval(t); t = null } })
</script>

<template>
  <section>
    <div class="group">
      <h3>生命周期演示</h3>
      <p>计数：{{ c }}</p>
    </div>
    
    <div class="group column">
      <button @click="showChild = !showChild">
        {{ showChild ? '卸载子组件' : '挂载子组件' }}
      </button>
      <Child v-if="showChild" />
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.group { display: flex; align-items: center; padding: 10px 0; border-bottom: 4px solid #eee;}
.column {flex-direction: column; align-items: flex-start;}

button { padding: 4px 8px; background: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer; flex-wrap: wrap;}
</style>
