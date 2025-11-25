<script setup>
import { ref } from 'vue'
const name = ref("")
const pressed = ref(false)
const open = ref(false)
</script>

<template>
  <section>
    <div class="container">
      <h3>无障碍演示</h3>
      <label for="name">姓名</label>
      <input id="name" v-model="name" placeholder="输入姓名" />
      <button :aria-pressed="pressed" @click="pressed = !pressed">切换状态</button>
      <button @click="open = true">打开对话框</button>
      <div v-if="open" role="dialog" aria-modal="true" style="position:fixed;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center" @click.self="open=false">
        <div style="background:#fff;padding:12px;border-radius:10px">
          <p>对话框内容</p>
          <button @click="open=false">关闭</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
</style>