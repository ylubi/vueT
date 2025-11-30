<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slug: { type: String, default: '' },
  title: { type: String, default: '' },
  points: { type: Array, default: () => [] }
})

import { guideMap } from '../guide/content.js'

const currentKnowledge = computed(() => {
  if (props.title || (props.points && props.points.length)) {
    return { title: props.title || '学习说明', points: props.points && props.points.length ? props.points : ['暂无内容'], slug: props.slug || '' }
  }
  const item = guideMap[props.slug]
  if (item) return { title: item.title, points: item.steps || [], slug: props.slug || '' }
  return { title: 'Vue 知识点', points: ['选择特定页面查看相关知识点'], slug: props.slug || '' }
})

// 获取当前页面的详细知识内容
const getPageKnowledge = () => {
  const item = guideMap[props.slug]
  if (item) {
    const firstCode = Array.isArray(item.code) && item.code.length ? item.code[0].content : ''
    const steps = Array.isArray(item.steps) ? item.steps : []
    const details = Array.isArray(item.details) ? item.details : []
    return {
      overview: item.title,
      overviewText: item.intro || '',
      features: steps.map((s, i) => ({ icon: '👉', title: s, desc: details[i] || '' })),
      details,
      scenarios: [],
      codeExample: firstCode
    }
  }
  return {
    overview: props.title || '知识点',
    overviewText: '暂无详细说明',
    features: (props.points || []).map(p => ({ icon: '👉', title: p, desc: '' })),
    details: [],
    scenarios: [],
    codeExample: ''
  }
}
</script>

<template>
  <div class="knowledge-hotspot">
    <div class="knowledge-content">
      <div class="knowledge-header">
        <h3 class="knowledge-title">{{ props.title || currentKnowledge.title }}</h3>
        <p class="knowledge-subtitle">基于 Vue.js 官方文档的核心概念解析</p>
      </div>
      
      <div class="knowledge-body">
        <!-- 统一使用页面特定的详细内容 -->
        <div class="intro-content">
          <div class="vue-overview">
            <h4 class="section-title">{{ getPageKnowledge().overview }}</h4>
            <div class="overview-text">
              <p>{{ getPageKnowledge().overviewText }}</p>
            </div>
          </div>
          
      <div class="core-features">
        <h4 class="section-title">核心特性</h4>
        <div class="feature-grid">
          <div v-for="(feature, index) in getPageKnowledge().features" :key="index" class="feature-item">
            <div class="feature-icon">{{ feature.icon }}</div>
            <div class="feature-content">
              <div class="feature-title">{{ feature.title }}</div>
              <div class="feature-desc" v-if="feature.desc">{{ feature.desc }}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="getPageKnowledge().details && getPageKnowledge().details.length" class="learning-tips">
        <h4 class="section-title">补充说明</h4>
        <div class="tips-list">
          <div v-for="(tip, i) in getPageKnowledge().details" :key="i" class="tip-item">
            <span class="tip-icon">💡</span>
            <span class="tip-text">{{ tip }}</span>
          </div>
        </div>
      </div>
          
          <div class="usage-scenarios" v-if="getPageKnowledge().scenarios && getPageKnowledge().scenarios.length">
            <h4 class="section-title">使用场景</h4>
            <div class="scenario-list">
              <div v-for="(scenario, index) in getPageKnowledge().scenarios" :key="index" class="scenario-item">
                <span class="scenario-icon">{{ scenario.icon }}</span>
                <span class="scenario-text">{{ scenario.text }}</span>
              </div>
            </div>
          </div>
          
          <div class="code-example">
            <h4 class="section-title">代码示例</h4>
            <div class="example-tabs">
              <div class="example-tab active">示例代码</div>
            </div>
            <div class="code-block">
              <pre><code>{{ getPageKnowledge().codeExample }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.knowledge-hotspot {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;
  color: #0f172a;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.knowledge-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.knowledge-header {
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
  padding: 16px 20px;
  flex-shrink: 0;
}

.knowledge-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.knowledge-subtitle {
  font-size: 13px;
  opacity: 0.9;
  margin: 0;
  font-weight: 400;
}

.knowledge-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
}

.knowledge-body::-webkit-scrollbar {
  width: 6px;
}

.knowledge-body::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.knowledge-body::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.knowledge-body::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
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

/* 简介页面样式 */
.intro-content {
  height: 100%;
  overflow-y: auto;
  min-height: 300px; /* 确保最小高度 */
}

.vue-overview {
  margin-bottom: 16px;
}

.overview-text p {
  font-size: 14px;
  line-height: 1.6;
  color: #334155;
  margin: 0 0 8px 0;
}

.overview-text p:last-child {
  margin-bottom: 0;
}

.overview-text strong {
  color: #42b883;
  font-weight: 600;
}

.core-features {
  margin-bottom: 16px;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  padding: 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.feature-item:hover {
  background: #ffffff;
  border-color: #42b883;
}

.feature-icon {
  font-size: 16px;
  margin-right: 10px;
  flex-shrink: 0;
  margin-top: 2px;
}

.feature-content {
  flex: 1;
}

.feature-title {
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 2px;
}

.feature-desc {
  font-size: 12px;
  color: #64748b;
  line-height: 1.5;
}

.usage-scenarios {
  margin-bottom: 16px;
}

.scenario-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.scenario-item {
  display: flex;
  align-items: center;
  padding: 6px 0;
}

.scenario-icon {
  font-size: 14px;
  margin-right: 8px;
  flex-shrink: 0;
}

.scenario-text {
  font-size: 13px;
  color: #334155;
  line-height: 1.4;
}

.code-example {
  margin-bottom: 16px;
  max-height: none; /* 确保没有最大高度限制 */
  overflow: visible; /* 确保内容可见 */
}

.example-tabs {
  display: flex;
  margin-bottom: 8px;
}

.example-tab {
  padding: 6px 12px;
  font-size: 12px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
}

.example-tab.active {
  background: #42b883;
  color: white;
  border-color: #42b883;
}

.code-block {
  background: #1e293b;
  border-radius: 4px;
  padding: 12px;
  overflow-x: auto;
  min-height: 50px; /* 确保最小高度 */
  position: relative; /* 确保相对定位 */
  border: 1px solid #334155; /* 添加边框便于调试 */
}

.code-block pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Courier New', monospace;
  font-size: 11px;
  line-height: 1.4;
  color: #ffffff; /* 改为纯白色提高对比度 */
  display: block; /* 确保是块级元素 */
  visibility: visible; /* 确保可见 */
  opacity: 1; /* 确保不透明 */
  width: 100%; /* 确保宽度 */
  min-height: 20px; /* 确保最小高度 */
  background: transparent; /* 确保背景透明 */
}

.code-block code {
  color: #ffffff; /* 改为纯白色提高对比度 */
  display: inline-block; /* 确保代码显示 */
  white-space: pre; /* 保持空白符 */
  background: transparent; /* 确保背景透明 */
  opacity: 1; /* 确保不透明 */
  visibility: visible; /* 确保可见 */
}

/* 通用内容样式 */
.general-content {
  height: 100%;
  overflow-y: auto;
}

/* 概念概述样式 */
.concept-overview {
  margin-bottom: 16px;
}

.concept-overview .overview-text p {
  font-size: 14px;
  line-height: 1.6;
  color: #334155;
  margin: 0 0 8px 0;
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

.concept-title {
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 2px;
}

.concept-desc {
  font-size: 12px;
  color: #64748b;
  line-height: 1.5;
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

/* 旧的通用内容样式 - 保留部分有用的 */
.points-summary {
  font-size: 11px;
  font-weight: 600;
  color: #42b883;
  background: #dcfce7;
  padding: 2px 6px;
  border-radius: 3px;
  margin-right: 8px;
  flex-shrink: 0;
  margin-top: 1px;
}

.point-text {
  font-size: 13px;
  color: #334155;
  line-height: 1.4;
  flex: 1;
}

/* 操作按钮 */
.action-footer {
  flex-shrink: 0;
  padding: 12px 20px;
  border-top: 1px solid #e2e8f0;
  background: #ffffff;
}

.detail-btn {
  padding: 8px 16px;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.detail-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.3);
  filter: brightness(1.1);
}

.detail-btn:active {
  transform: translateY(0);
}

.detail-btn::after {
  content: '→';
  font-size: 14px;
  transition: transform 0.2s ease;
}

.detail-btn:hover::after {
  transform: translateX(2px);
}

@media (max-width: 768px) {
  .knowledge-header {
    padding: 14px 16px;
  }
  
  .knowledge-title {
    font-size: 16px;
  }
  
  .knowledge-subtitle {
    font-size: 12px;
  }
  
  .knowledge-body {
    padding: 14px 16px;
  }
  
  .feature-grid {
    gap: 6px;
  }
  
  .feature-item {
    padding: 8px;
  }
  
  .feature-icon {
    font-size: 14px;
    margin-right: 8px;
  }
  
  .feature-title {
    font-size: 12px;
  }
  
  .feature-desc {
    font-size: 11px;
  }
  
  .scenario-text {
    font-size: 12px;
  }
  
  .code-block pre {
    font-size: 10px;
  }
  
  .compact-point {
    padding: 6px 8px;
  }
  
  .point-text {
    font-size: 12px;
  }
  
  .action-footer {
    padding: 10px 16px;
  }
  
  .detail-btn {
    padding: 6px 12px;
    font-size: 12px;
  }
}
</style>
