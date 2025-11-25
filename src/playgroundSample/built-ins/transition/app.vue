<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>

<template>
  <section>
    <div class="container">
      <h3>Transition 演示</h3>
      <button @click="show = !show">{{ show ? '隐藏' : '显示' }}</button>
      <transition name="fade">
        <p v-if="show">你好</p>
      </transition>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.fade-enter-active,.fade-leave-active{ transition: opacity .2s ease }
.fade-enter-from,.fade-leave-to{ opacity: 0 }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
button { padding: 6px 10px; border:1px solid #e5e7eb; border-radius:6px }
p {color: #2ba46d; font-size: 18px; font-weight: 500;}
</style>