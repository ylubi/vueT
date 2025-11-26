<script setup>
const emit = defineEmits(['click'])
function click() {
  emit('click')
}
</script>

<template>
  <div class="">
    <button id="run-btn" @click="click">运行</button>
  </div>
</template>

<style scoped>
#run-btn {
  padding: 8px 16px;
  color: #42b883;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

#run-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}

#run-btn:active {
  transform: translateY(0);
}
</style>

