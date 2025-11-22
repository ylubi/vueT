<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: { type: String, default: '学习引导' },
  steps: { type: Array, default: () => [] },
  code: { type: Array, default: () => [] },
  intro: { type: String, default: '' },
  details: { type: Array, default: () => [] },
})

const copiedIndex = ref(-1)
const copyCode = async (content, i) => {
  try {
    await navigator.clipboard.writeText(content)
    copiedIndex.value = i
    setTimeout(() => (copiedIndex.value = -1), 1500)
  } catch (e) {
    copiedIndex.value = -1
  }
}
</script>

<template>
<aside class="guide prose">
    <h3 class="guide-title">{{ props.title }}</h3>
    <p v-if="props.intro" class="guide-intro">{{ props.intro }}</p>
    <div v-if="props.details.length" class="guide-details">
      <p v-for="(d, di) in props.details" :key="di" class="detail">{{ d }}</p>
    </div>
    <ol class="guide-steps">
      <li v-for="(s, i) in props.steps" :key="i">{{ s }}</li>
    </ol>
    <div v-if="props.code.length" class="guide-code">
      <div v-for="(c, i) in props.code" :key="i" class="code-block">
        <div class="code-head">
          <div class="code-title">{{ c.title }}</div>
          <button class="copy-btn" @click="copyCode(c.content, i)">{{ copiedIndex === i ? '已复制' : '复制' }}</button>
        </div>
        <div class="code-lines">
          <div v-for="(line, li) in c.content.split('\n')" :key="li" class="code-line">
            <span class="ln">{{ li + 1 }}</span>
            <span class="lc">{{ line }}</span>
          </div>
        </div>
      </div>
    </div>
    <slot />
  </aside>
  
</template>

<style scoped>
.guide {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 4px 18px rgba(17, 24, 39, 0.06);
  margin: 0 0 16px 0;
  text-align: left;
}
.guide-title {
  margin: 0 0 6px 0;
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
}
.guide-intro {
  margin: 6px 0 10px 0;
  color: #4b5563;
  white-space: pre-wrap;
}
.guide-details {
  display: grid;
  gap: 8px;
  margin: 8px 0 10px 0;
}
.detail {
  color: #374151;
}
.guide-steps {
  margin: 0;
  padding-left: 18px;
}
.guide-steps li {
  margin: 6px 0;
}
.guide-code {
  margin-top: 12px;
}
.code-block {
  background: #0f172a;
  color: #e5e7eb;
  border-radius: 10px;
  padding: 12px;
  margin: 10px 0;
  overflow: hidden;
  border: 1px solid #1f2937;
}
.code-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.code-title {
  font-size: 13px;
  color: #60a5fa;
  font-weight: 600;
}
.code-lines {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  background: #0b1220;
  border: 1px solid #334155;
  border-radius: 6px;
  padding: 8px;
  max-height: 340px;
  overflow: auto;
}
.code-line {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 8px;
}
.ln {
  color: #9ca3af;
  text-align: right;
}
.lc {
  white-space: pre-wrap;
}
.copy-btn {
  background: #1f2937;
  color: #e5e7eb;
  border: none;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
}
.copy-btn:hover {
  background: #374151;
}
</style>