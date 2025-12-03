<script setup>
import { ref } from 'vue'
const ok = ref(true)
const visible = ref(true)
const ab = ref('a')
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>条件渲染演示</h1>
        <span class="desc">v-if 与 v-show</span>
        <div class="section-item">
          <span class="remark">v-if 切换：</span>
          <span class="code">
            <button @click="ok = !ok">Toggle</button>
          </span>
          <span v-if="ok" style="margin-left:8px;color:green">True</span>
          <span v-else style="margin-left:8px;color:red">False</span>
        </div>
        <div class="section-item">
          <span class="remark">v-show 切换：</span>
          <span class="code">
            <button @click="visible = !visible">Toggle</button>
          </span>
          <span v-show="visible" style="margin-left:8px">可见内容</span>
        </div>
        <div class="section-item">
          <span class="remark">多条件 v-else-if：</span>
          <span class="code">
            <button @click="ab === 'a' ? ab = 'b' : ab = 'a'">Toggle A/B</button>
          </span>
          <span v-if="ab === 'a'" style="margin-left:8px">A</span>
          <span v-else-if="ab === 'b'" style="margin-left:8px">B</span>
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
  display: flex;
  align-items: center;
}
button { padding: 2px 8px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; }
</style>
