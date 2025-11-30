<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
const msg = "这是一个测试"
const showState = ref(true)
function onClose() { showState.value = false }
</script>

<template>
  <section>
    <h3>组件注册演示</h3>
    <span v-if="!showState">已关闭</span>
    <Child v-if="showState" :msg="msg" @close="onClose" />
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>
