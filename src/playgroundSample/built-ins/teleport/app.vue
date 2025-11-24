<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <section>
    <h3>Teleport 演示</h3>
    <button @click="open = true">打开</button>
    <teleport to="body">
      <div v-if="open" class="overlay" @click.self="open=false">
        <div class="dialog">传送到 body 的对话框</div>
      </div>
    </teleport>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.overlay { position: fixed; inset: 0; background: rgba(0,0,0,.45); display: flex; align-items: center; justify-content: center; }
.dialog { background: #fff; padding: 12px; border-radius: 10px; }
</style>