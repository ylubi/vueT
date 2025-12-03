<script setup>
import { inject, computed } from 'vue'
const color = inject("color", null)
const size = inject("size", null)
const styleObj = computed(() => ({ color: color ? color.value : "#374151", fontSize: (size ? size.value : 14) + "px" }))
</script>

<template>
  <div class="col">
    <span :style="styleObj">来自 provide 的样式</span>
    <pre>{{styleObj}}</pre>
  </div>
</template>