<script setup>
const props = defineProps({ count: { type: Number, default: 0 } })
</script>

<template>
  <div class="child">子组件计数：{{ props.count }}</div>
</template>

<style scoped>
.child { color: #0ea5e9; font-weight: 600 }
</style>