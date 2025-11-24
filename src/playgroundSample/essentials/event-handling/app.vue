<script setup>
import { ref } from 'vue'
const log = ref([])
function onClick(){ log.value.push("clicked") }
function handler(){ log.value.push("bubble stopped") }
function onSubmit(e){ log.value.push("submit prevented") }
function onEnter(){ log.value.push("enter key") }
</script>

<template>
  <section>
    <h3>事件处理演示</h3>
    <button @click="onClick">点我</button>
    <div @click.stop="handler" style="border:1px solid #e5e7eb;padding:8px;">@click.stop</div>
    <form @submit.prevent="onSubmit"><input /><button type="submit">提交</button></form>
    <input @keyup.enter="onEnter" placeholder="回车触发" />
    <pre>{{ log }}</pre>
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
</style>