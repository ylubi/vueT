<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>

<template>
  <section>
    <h3>Transition 演示</h3>
    <button @click="show = !show">toggle</button>
    <transition name="fade">
      <p v-if="show">Hello</p>
    </transition>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.fade-enter-active,.fade-leave-active{ transition: opacity .2s ease }
.fade-enter-from,.fade-leave-to{ opacity: 0 }
</style>