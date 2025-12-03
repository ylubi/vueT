<script setup>
import { ref } from 'vue'
const name = ref("")
const pressed = ref(false)
const open = ref(false)
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>无障碍演示</h1>
        <span class="desc">ARIA 属性与语义化</span>
        <div class="section-item">
          <span class="remark">表单：</span>
          <span class="code">
            <label for="name" style="margin-right:8px">姓名</label>
            <input id="name" v-model="name" placeholder="输入姓名" />
          </span>
        </div>
        <div class="section-item">
          <span class="remark">ARIA 状态：</span>
          <button :aria-pressed="pressed" @click="pressed = !pressed">
            切换状态 (Pressed: {{ pressed }})
          </button>
        </div>
        <div class="section-item">
          <span class="remark">对话框：</span>
          <button @click="open = true">打开模态框</button>
        </div>
      </div>

      <div v-if="open" role="dialog" aria-modal="true" class="modal-overlay" @click.self="open=false">
        <div class="modal-content">
          <p>这是一个无障碍模态框</p>
          <button @click="open=false">关闭</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; position: relative; }
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
  display: flex;
  align-items: center;
}
button { padding: 4px 10px; border:1px solid #e5e7eb; border-radius:6px; cursor: pointer; }
input { padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 13px; outline: none; height: 28px;}
input:focus { border-color: #42b883; box-shadow: 0 0 0 2px rgba(66,184,131,0.1); }

.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center; z-index: 999;
}
.modal-content {
  background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: grid; gap: 12px;
}
</style>