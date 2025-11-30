<script setup>
import { ref, reactive, watch, watchEffect, toRefs } from 'vue'
const count = ref(0)
const user = reactive({ name: '貂蝉', age: 18 })
const { name, age } = toRefs(user)
watch(count, (n, o) => console.log(`count: ${n}`))
watchEffect(() => { console.log(`name: ${name.value}`) })
</script>

<template>
  <section>
    <h3>响应式基础演示</h3>
    <div class="group">
      <span class="label">响应按钮：</span>
      <button @click="count++">count++</button>
      <span class="value">{{ count }}</span>
    </div>
    <div class="group">
      <span class="label">响应输入框：</span>
      <div class="form-group">
        <div class="form">
          <div class="input-group">name: <input v-model="name" /></div>
          <div class="input-group">age: <input v-model.number="age" type="number" /></div>
        </div>
        <p>user: {{ user }}</p>

      </div>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.group { display: flex; align-items: center; justify-content: flex-start; padding: 10px 0; border-bottom: 4px solid #eee;}
.input-group { display: flex; align-items: center; justify-content: space-between; width: 100%; margin: 4px 0;}
.input-group input {margin-left: 8px;}
.label { font-weight: bold; margin-right: 8px; }
.value { flex: 1; }
.group button { padding: 4px 8px; background: #007bff; color: #fff; border: none; border-radius: 4px; cursor: pointer; margin: 0 20px; flex-wrap: wrap;}
.group .form { display: block; flex-direction: column; margin-right: 20px;}
.group .form-group { display: flex; flex: 1;}
</style>