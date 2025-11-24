<script setup>
const props = defineProps({ msg: { type: String, default: 'Hi' } })
</script>

<template>
  <div style="border:1px solid #e5e7eb;padding:8px;border-radius:6px;">来自父组件：{{ props.msg }}</div>
</template>