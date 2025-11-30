<script setup>
const emit = defineEmits(['close'])
function close(){ emit("close") }
</script>

<template>
  <div style="border:1px solid #e5e7eb;padding:8px;border-radius:6px;">
    <button @click="close">派发 close</button>
  </div>
</template>