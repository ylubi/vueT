<script setup>
import { ref } from 'vue'
const items = ref([1,2,3])
function add(){ items.value.push(items.value.length + 1) }
function remove(){ items.value.pop() }
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>TransitionGroup 演示</h1>
        <span class="desc">列表过渡动画</span>
        <div class="section-item">
          <span class="remark">控制：</span>
          <span class="code">
            <button class="add" @click="add">增加</button>
            <button class="remove" @click="remove">减少</button>
          </span>
        </div>
        <div class="section-item col">
          <span class="remark">列表：</span>
          <span class="" style="min-height:100px;display:block">
            <transition-group name="list" tag="ul">
              <li v-for="i in items" :key="i">条目 {{ i }}</li>
            </transition-group>
          </span>
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
.section-item { display: flex; align-items: flex-start; gap: 8px; }
.section-item .remark { font-size: 14px; color: #333; margin-top: 6px; }
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
}

ul{ list-style:none; padding:0; margin:0; }
li { background: #fff; margin-bottom: 4px; padding: 4px; border: 1px solid #eee; border-radius: 4px; }
.list-enter-active,.list-leave-active{ transition: all .2s ease }
.list-enter-from,.list-leave-to{ opacity:0; transform: translateY(6px) }

button { padding: 4px 10px; border:1px solid #e5e7eb; border-radius:6px; cursor: pointer; margin-right: 8px; }
.add { background: #2ba46d; color: #fff; border-color: #2ba46d; }
.remove { background: #fff; color: #000; }

.col {display: flex; flex-direction: column; align-items: flex-start;}
</style>
