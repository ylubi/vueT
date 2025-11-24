<script setup>
const props = defineProps({ modelValue: String })
const emit = defineEmits(['update:modelValue'])
function onInput(e){ emit("update:modelValue", e.target.value) }
</script>

<template>
  <input :value="props.modelValue" @input="onInput" placeholder="子组件输入" />
</template>