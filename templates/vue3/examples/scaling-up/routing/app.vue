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
    <div class="container">
      <h3>路由概念演示</h3>
      <div>
        <button @click="go('home')">首页</button>&nbsp;
        <button @click="go('user', { id: 1 })">用户 1</button>
      </div>
      <component :is="routes[current.name]" v-bind="current.params" />
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
</style>