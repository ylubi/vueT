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
    <form>
      <input v-model="text" placeholder="文本" />
      <label><input type="checkbox" v-model="checked" /> 复选：{{ checked }}</label>
      <div><label><input type="radio" value="A" v-model="picked" /> A</label> <label><input type="radio" value="B" v-model="picked" /> B</label> 选择：{{ picked }}</div>
      <input v-model.number="age" type="number" /> 年龄：{{ age }}
      <input v-model.trim="name" placeholder="去掉两端的空格" /> 名称：{{ name }}
    </form>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
form { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
input[type="text"], input[type="number"], input[placeholder] {
  padding: 8px 10px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; outline: none;
}
input[type="text"]:focus, input[type="number"]:focus, input[placeholder]:focus {
  border-color: #42b883; box-shadow: 0 0 0 3px rgba(66,184,131,.15);
}
label { display: flex; align-items: center; gap: 8px; font-size: 14px; color: #334155; }
label input[type="checkbox"] { width: 16px; height: 16px; }
div { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
div label { gap: 6px; }
</style>
