<script setup>
import { ref, computed } from 'vue'
const isActive = ref(true)
const hasError = ref(false)
const baseClass = 'btn'
const color = ref('#0ea5e9')
const size = ref(14)
const styleObj = computed(() => ({ color: color.value, fontSize: size.value + "px" }))
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>类与样式绑定演示</h1>
        <span class="desc">:class 和 :style</span>
        <div class="section-item">
          <span class="remark">对象语法：</span>
          <span class="code"><div :class="{ active:isActive, error:hasError }">Box</div></span>
        </div>
        <div class="section-item">
          <span class="remark">数组语法：</span>
          <span class="code"><div :class="[ baseClass, isActive ? 'active' : '' ]">Button</div></span>
        </div>
        <div class="section-item">
          <span class="remark">Style 绑定：</span>
          <span class="code"><div :style="styleObj">动态样式文本</div></span>
        </div>
        <div class="section-item">
          <span class="remark">控制：</span>
          <button @click="isActive = !isActive">切换 Active</button>
          <button @click="hasError = !hasError" style="margin-left:8px">切换 Error</button>
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
  display: flex;
  align-items: center;
}

.active { background: #dcfce7; color: #166534; padding: 2px 6px; border-radius: 4px; }
.error { border: 1px solid #ef4444; color: #ef4444; }
.btn { padding: 2px 6px; border: 1px solid #e5e7eb; border-radius: 4px; }
button { padding: 2px 8px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; }
</style>
