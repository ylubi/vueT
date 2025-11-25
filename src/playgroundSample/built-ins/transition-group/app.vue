<script setup>
import { ref } from 'vue'
const items = ref([1,2,3])
function add(){ items.value.push(items.value.length + 1) }
function remove(){ items.value.pop() }
</script>

<template>
  <section>
    <div class="container">
      <h3>TransitionGroup 演示</h3>
      <div>
        <button class="add" @click="add">增加</button>
        <button class="remove" @click="remove">减少</button>
      </div>
      <transition-group name="list" tag="ul">
        <li v-for="i in items" :key="i">条目 {{ i }}</li>
      </transition-group>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
ul{ list-style:none; padding:0; }
.list-enter-active,.list-leave-active{ transition: all .2s ease }
.list-enter-from,.list-leave-to{ opacity:0; transform: translateY(6px) }

button { padding: 6px 10px; border:1px solid #e5e7eb; border-radius:6px }
.add { background: #2ba46d; color: #fff; margin-right: 8px; }
.remove { background: #e5e7eb; color: #000; border: 1px solid #e5e7eb; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
</style>