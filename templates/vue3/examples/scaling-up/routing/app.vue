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
      <div class="section-container">
        <h1>路由概念演示</h1>
        <span class="desc">简单的组件切换路由</span>
        <div class="section-item">
          <span class="remark">导航：</span>
          <span class="">
            <button @click="go('home')" :class="{ active: current.name === 'home' }">首页</button>
            <button @click="go('user', { id: 1 })" :class="{ active: current.name === 'user' }">用户 1</button>
          </span>
        </div>
        <div class="section-item col">
          <span class="remark">视图：</span>
          <span class="code">
            <component :is="routes[current.name]" v-bind="current.params" />
          </span>
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
  flex: 1;
}
button { padding: 4px 10px; border:1px solid #e5e7eb; border-radius:6px; cursor: pointer; margin-right: 8px; }
button.active { background: #2ba46d; color: #fff; border-color: #2ba46d; }

.col { flex-direction: column; align-items: flex-start; }
</style>
