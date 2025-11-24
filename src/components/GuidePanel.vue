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
  <aside class="guide-panel">
    <!-- 概述部分 -->
    <div class="concept-overview">
      <h3 class="section-title">{{ props.title }}</h3>
      <p v-if="props.intro" class="overview-text">{{ props.intro }}</p>
    </div>
    
    <!-- 核心概念 -->
    <div v-if="props.details.length" class="core-concepts">
      <h4 class="section-title">核心概念</h4>
      <div class="concepts-grid">
        <div v-for="(d, di) in props.details" :key="di" class="concept-item">
          <div class="concept-icon">💡</div>
          <div class="concept-content">
            <div class="concept-desc">{{ d }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 学习步骤 -->
    <div v-if="props.steps.length" class="learning-steps">
      <h4 class="section-title">学习步骤</h4>
      <div class="steps-grid">
        <div v-for="(s, i) in props.steps" :key="i" class="step-item">
          <div class="step-number">{{ i + 1 }}</div>
          <div class="step-content">{{ s }}</div>
        </div>
      </div>
    </div>
    
    <!-- 代码示例 -->
    <div v-if="props.code.length" class="code-examples">
      <h4 class="section-title">代码示例</h4>
      <div class="examples-grid">
        <div v-for="(c, i) in props.code" :key="i" class="example-item">
          <div class="example-header">
            <div class="example-title">{{ c.title }}</div>
            <button class="copy-btn" @click="copyCode(c.content, i)">{{ copiedIndex === i ? '已复制' : '复制' }}</button>
          </div>
          <div class="code-block">
            <pre><code>{{ c.content }}</code></pre>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 学习建议 -->
    <div class="learning-tips">
      <h4 class="section-title">学习建议</h4>
      <div class="tips-list">
        <div class="tip-item">
          <span class="tip-icon">🎯</span>
          <span class="tip-text">结合实际代码练习，加深理解</span>
        </div>
        <div class="tip-item">
          <span class="tip-icon">📚</span>
          <span class="tip-text">参考Vue官方文档获取更多详细信息</span>
        </div>
        <div class="tip-item">
          <span class="tip-icon">💻</span>
          <span class="tip-text">在Playground中尝试相关示例</span>
        </div>
      </div>
    </div>
    
    <slot />
  </aside>
  
</template>

<style scoped>
.guide-panel {
  background: #ffffff;
  color: #0f172a;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #35495e;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.section-title::before {
  content: '';
  width: 3px;
  height: 16px;
  background: #42b883;
  border-radius: 2px;
  margin-right: 8px;
}

/* 概述部分样式 */
.concept-overview {
  margin-bottom: 16px;
}

.overview-text {
  font-size: 14px;
  line-height: 1.6;
  color: #334155;
  margin: 0 0 8px 0;
}

.overview-text p {
  margin: 0 0 8px 0;
}

.overview-text p:last-child {
  margin-bottom: 0;
}

/* 核心概念样式 */
.core-concepts {
  margin-bottom: 16px;
}

.concepts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.concept-item {
  display: flex;
  align-items: flex-start;
  padding: 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.concept-item:hover {
  background: #ffffff;
  border-color: #42b883;
}

.concept-icon {
  font-size: 16px;
  margin-right: 10px;
  flex-shrink: 0;
  margin-top: 2px;
}

.concept-content {
  flex: 1;
}

.concept-desc {
  font-size: 12px;
  color: #64748b;
  line-height: 1.5;
}

/* 学习步骤样式 */
.learning-steps {
  margin-bottom: 16px;
}

.steps-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.step-item {
  display: flex;
  align-items: flex-start;
  padding: 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.step-item:hover {
  background: #ffffff;
  border-color: #42b883;
}

.step-number {
  background: #42b883;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  margin-right: 10px;
  flex-shrink: 0;
  margin-top: 2px;
}

.step-content {
  font-size: 12px;
  color: #334155;
  line-height: 1.5;
  flex: 1;
}

/* 代码示例样式 */
.code-examples {
  margin-bottom: 16px;
}

.examples-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.example-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.example-item:hover {
  background: #ffffff;
  border-color: #42b883;
}

.example-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
}

.example-title {
  font-size: 13px;
  color: #35495e;
  font-weight: 600;
}

.copy-btn {
  background: #1f2937;
  color: #e5e7eb;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: #374151;
}

.code-block {
  background: #1e293b;
  border-radius: 0 0 4px 4px;
  padding: 12px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Courier New', monospace;
  font-size: 11px;
  line-height: 1.4;
  color: #ffffff;
}

.code-block code {
  color: #ffffff;
  white-space: pre;
}

/* 学习建议样式 */
.learning-tips {
  margin-bottom: 16px;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tip-item {
  display: flex;
  align-items: center;
  padding: 6px 0;
}

.tip-icon {
  font-size: 14px;
  margin-right: 8px;
  flex-shrink: 0;
}

.tip-text {
  font-size: 13px;
  color: #334155;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .concept-item,
  .step-item {
    padding: 8px;
  }
  
  .concept-icon,
  .step-number {
    margin-right: 8px;
  }
  
  .concept-desc,
  .step-content {
    font-size: 11px;
  }
  
  .tip-text {
    font-size: 12px;
  }
  
  .code-block pre {
    font-size: 10px;
  }
}
</style>