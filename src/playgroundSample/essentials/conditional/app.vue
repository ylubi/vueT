<script setup>
import { ref } from 'vue'
const ok = ref(true)
const visible = ref(true)
const ab = ref('a')
</script>

<template>
  <section>
    <h3>条件渲染演示</h3>
    <div class="group">
      <span class="label">设置 True / False:</span>
      <button @click="ok = !ok">设置</button>
      <span class="value">{{ ok }}</span>
    </div>
    <div class="group">
      <span class="label">v-show 操作:</span>
      <button @click="visible = !visible">可见 / 隐藏</button>
      <span v-show="visible" class="value">可见</span>
    </div>

    <div class="group">
      <span class="label">v-if 操作:</span>
      <button @click="ab === 'a' ? ab = 'b' : ab = 'a'">a / b</button>
      <span v-if="ab === 'a'" class="value">a</span>
      <span v-if="ab === 'b'" class="value">b</span>
    </div>
  </section>
</template>

<style scoped>
.group { display: flex; align-items: center; justify-content: flex-start; padding: 10px 0; border-bottom: 4px solid #eee;}
.input-group { display: flex; align-items: center; justify-content: space-between; width: 100%; margin: 4px 0;}
.input-group input {margin-left: 8px;}
.label { font-weight: bold; margin-right: 8px; }
.value { flex: 1; }
.group button { padding: 4px 8px; background: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer; margin: 0 20px; flex-wrap: wrap;}
.group .form { display: block; flex-direction: column; margin-right: 20px;}
</style>