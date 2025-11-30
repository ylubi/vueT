<script setup>
const props = defineProps({ id: { type: Number, default: 1 } })
</script>

<template>
  <div>用户页：{{ props.id }}</div>
</template>