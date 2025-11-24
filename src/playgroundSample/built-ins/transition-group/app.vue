<script setup>
import { ref } from 'vue'
const items = ref([1,2,3])
function add(){ items.value.push(items.value.length + 1) }
function remove(){ items.value.pop() }
</script>

<template>
  <section>
    <h3>TransitionGroup 演示</h3>
    <div><button @click="add">add</button> <button @click="remove">remove</button></div>
    <transition-group name="list" tag="ul">
      <li v-for="i in items" :key="i">Item {{ i }}</li>
    </transition-group>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
ul{ list-style:none; padding:0; }
.list-enter-active,.list-leave-active{ transition: all .2s ease }
.list-enter-from,.list-leave-to{ opacity:0; transform: translateY(6px) }
</style>