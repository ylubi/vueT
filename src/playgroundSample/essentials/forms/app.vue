<script setup>
import { ref } from 'vue'
const text = ref('')
const checked = ref(false)
const picked = ref('A')
const age = ref(18)
const name = ref('')
</script>

<template>
  <section>
    <h3>表单输入绑定演示</h3>
    <input v-model="text" placeholder="文本" />
    <label><input type="checkbox" v-model="checked" /> 复选：{{ checked }}</label>
    <div><label><input type="radio" value="A" v-model="picked" /> A</label> <label><input type="radio" value="B" v-model="picked" /> B</label> 选择：{{ picked }}</div>
    <input v-model.number="age" type="number" /> 年龄：{{ age }}
    <input v-model.trim="name" placeholder="去空格" /> 名称：{{ name }}
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>