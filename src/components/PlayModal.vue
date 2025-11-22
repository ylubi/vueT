<script setup>
import { defineAsyncComponent } from 'vue'
const props = defineProps({ 
  open: { type: Boolean, default: false },
  hash: { type: String, default: '' },
  files: { type: Object, default: null },
  mainFile: { type: String, default: 'App.vue' },
})
const emit = defineEmits(['close'])
const AsyncPlaygroundPane = defineAsyncComponent(() => import('./PlaygroundPane.vue'))
const close = () => emit('close')
</script>

<template>
  <div v-if="open" class="modal" @click.self="close">
    <div class="dialog">
      <header class="head">
        <h4>Playground</h4>
        <button class="close" @click="close">×</button>
      </header>
      <AsyncPlaygroundPane :hash="props.hash ? '#' + props.hash : ''" :files="props.files" :mainFile="props.mainFile" />
    </div>
  </div>
</template>

<style scoped>
.modal { position: fixed; inset: 0; background: rgba(0,0,0,.45); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.dialog { width: min(1200px, 92vw); height: min(800px, 88vh); background: #111827; color: #e5e7eb; border-radius: 12px; box-shadow: 0 24px 60px rgba(0,0,0,.45); display: flex; flex-direction: column; transform: translateY(8px); opacity: .98; transition: transform .2s ease, opacity .2s ease; }
.head { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; border-bottom: 1px solid #334155; }
.close { background: transparent; border: none; color: #e5e7eb; font-size: 20px; cursor: pointer; }
.close:hover { color: #fcd34d; }
.dialog :deep(.pane) { flex: 1; }
</style>