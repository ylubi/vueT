<script setup>
const props = defineProps({ count: { type: Number, default: 0 } })
</script>

<template>
  <div class="child-wrapper">
    <span class="child-label">Received Count:</span>
    <span class="child-value">{{ props.count }}</span>
  </div>
</template>

<style scoped>
.child-wrapper { display: flex; align-items: center; gap: 8px; }
.child-label { color: #6b7280; font-size: 13px; }
.child-value { color: #0ea5e9; font-weight: 600; font-size: 14px; }
</style>