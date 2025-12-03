<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>Teleport 演示</h1>
        <span class="desc">将内容传送到 DOM 的其他位置</span>
        <div class="section-item">
          <span class="remark">操作：</span>
          <span class=""><button @click="open = true">打开对话框</button></span>
        </div>
      </div>

      <!-- to="body" 该对话框父节点为 body -->
      <teleport to="body">
        <div v-if="open" class="overlay" @click.self="open=false">
          <div class="dialog">
            <h3>传送成功</h3>
            <p>该对话框已被传送到 body 标签下。</p>
            <button @click="open = false">关闭</button>
          </div>
        </div>
      </teleport>
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
}

.overlay { position: fixed; inset: 0; background: rgba(0,0,0,.45); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.dialog { background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); text-align: center; }
.dialog h3 { margin-top: 0; color: #2ba46d; }
button { padding: 6px 12px; border:1px solid #e5e7eb; border-radius:6px; cursor: pointer; background: #fff; }
.dialog button { background: #2ba46d; color: #fff; border: none; }
</style>
