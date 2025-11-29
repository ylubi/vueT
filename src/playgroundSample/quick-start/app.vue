<script setup>
import Child from './Child.vue'
const msg = '这只是一个简单的例子'
</script>

<template>
  <h3>快速上手演示</h3>
  <p>{{ msg }}</p>
  <Child />
</template>

<style scoped>
  p {
    color: #f00 !important;
  }
</style>