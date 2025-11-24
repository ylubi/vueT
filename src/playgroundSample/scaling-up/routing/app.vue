<script setup>
import { ref } from 'vue'
import Home from './Home.vue'
import User from './User.vue'
const current = ref({ name: "home", params: {} })
const routes = { home: Home, user: User }
function go(name, params){ current.value = { name, params: params || {} } }
</script>

<template>
  <section>
    <h3>路由概念演示</h3>
    <div><button @click="go('home')">首页</button> <button @click="go('user', { id: 1 })">用户 1</button></div>
    <component :is="routes[current.name]" v-bind="current.params" />
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px }
</style>