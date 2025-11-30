<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <section>
    <div class="container">
      <h3>Teleport 演示</h3>
      <button @click="open = true">打开对话框</button>

      <!-- to="body" 该对话框父节点为 body -->
      <teleport to="body">
        <div v-if="open" class="overlay" @click.self="open=false">
          <div class="dialog">
            <span>传送到 body 的对话框</span><br>
            <span>该对话框父节点为 body</span>
          </div>
        </div>
      </teleport>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.overlay { position: fixed; inset: 0; background: rgba(0,0,0,.45); display: flex; align-items: center; justify-content: center; }
.dialog { background: #fff; padding: 12px; border-radius: 10px; }

.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
button { padding: 6px 10px; border:1px solid #e5e7eb; border-radius:6px }
</style>