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
    <h3>类与样式绑定演示</h3>
    <div :class="{ active:isActive, error:hasError }">对象语法</div>
    <div :class="[ baseClass, isActive ? 'active' : '' ]">数组语法</div>
    <div :style="styleObj">style 对象语法</div>
    <button @click="isActive = !isActive">toggle active</button>
    <button @click="hasError = !hasError">toggle error</button>
  </section>
</template>

<style scoped>
.active { background: #dcfce7; }
.error { border: 1px solid #ef4444; }
.btn { padding: 6px 8px; border: 1px solid #e5e7eb; }
section { display: grid; gap: 8px; }
</style>