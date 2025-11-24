<script setup>
const props = defineProps({ msg:String })
const emit = defineEmits(['close'])
function close(){ emit("close") }
</script>

<template>
  <div style="border:1px solid #e5e7eb;padding:8px;border-radius:6px;">
    <p>子组件：{{ props.msg }}</p>
    <button @click="close">关闭</button>
  </div>
</template>