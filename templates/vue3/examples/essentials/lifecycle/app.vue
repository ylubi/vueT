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
    <div class="container">
      <div class="section-container">
        <h1>生命周期演示</h1>
        <span class="desc">onMounted 与 onUnmounted</span>
        <div class="section-item">
          <span class="remark">当前计数：</span>
          <span class="code">{{ c }}</span>
        </div>
        <div class="section-item">
          <span class="remark">子组件控制：</span>
          <span class="code">
            <button @click="showChild = !showChild">
              {{ showChild ? '卸载子组件' : '挂载子组件' }}
            </button>
          </span>
        </div>
        <div class="section-item col" v-if="showChild">
          <span class="remark">子组件：</span>
          <span class="code"><Child /></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
.section-container { display: grid; gap: 8px; padding: 12px; border: 1px solid #2ba46d; border-radius: 8px; background: #ffffff; }
.section-container h1 { font-size: 18px; font-weight: 600; color: #1f2937; }
.section-container .desc { font-size: 14px; font-weight: 500; color: #4b5563; }
.section-item { display: flex; align-items: center; gap: 8px; }
.section-item .remark { font-size: 14px; color: #333; }
.section-item .code { 
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 13px;
  color: #111827;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 6px 8px;
  line-height: 1.6;
  white-space: pre-wrap;
}
button { padding: 4px 8px; background: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
.col {display: flex; align-items: flex-start; flex-direction: column;}
</style>
