<script setup>
const props = defineProps({ label: { type: String, default: '点击' } })
const emit = defineEmits(['fired'])
const handle = () => emit('fired', { time: Date.now(), label: props.label })
</script>

<template>
  <button @click="handle">{{ props.label }}</button>
</template>