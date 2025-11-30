<script setup>
import { ref } from 'vue'
const items = ref([{ id: 1, text: "A" }, { id: 2, text: "B" }])
const obj = ref({ a: 1, b: 2 })
const n = ref(5)
</script>

<template>
  <section>
    <h3>列表渲染演示</h3>
    <div class="group">
      <span class="label">items 列表:</span>
      <ul><li v-for="item in items" :key="item.id">{{ item.text }}</li></ul>
    </div>

    <div class="group">
      <span class="label">显示索引 键名 ：</span>
      <div class="li" v-for="(val, key, i) in obj" :key="key">索引：{{ i }} | 键名：{{ key }} | 值：{{ val }}</div>
    </div>

    <div class="group">
      <span class="label">n 次循环({{ n }}):</span>
      <div class="li" v-for="i in n" :key="n">{{ i }}</div>
    </div>
    
  </section>
</template>

<style scoped>
section { display: grid; gap: 8px; }
.group { display: flex; flex-direction: column; align-items: start; justify-content: flex-start; padding: 10px 0; border-bottom: 4px solid #eee;}
.label { font-weight: bold; margin-right: 8px; }
.value { flex: 1; }

.li {
  padding: 4px;
}
</style>