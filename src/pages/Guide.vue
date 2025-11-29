<template>
  <section class="module-interactive">
    <!-- 所有页面统一使用交互式学习模式 -->
    <div class="interactive-learning">
      <div class="playground-wrapper">
        <PlaygroundPane 
          :files="files" 
          :mainFile="mainFile"
          class="main-playground"
          :learningTitle="data.title + '：学习说明'"
          :learningPoints="getLearningPoints()"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, defineAsyncComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import { guideRegistry } from '../guide/content.js'
import { getFiles } from './guideExamples.js'
import GuidePanel from '../components/GuidePanel.vue'
import PlayModal from '../components/PlayModal.vue'

const PlaygroundPane = defineAsyncComponent(() => import('../components/PlaygroundPane.vue'))

// Helper function to get guide data by slug
const getData = (slug) => {
  return guideRegistry.find(item => item.slug === slug) || {
    title: '未找到页面',
    intro: '',
    steps: [],
    details: [],
    code: [],
    replHash: ''
  }
}

const route = useRoute()
const slug = computed(() => route.params.slug)
const data = computed(() => getData(slug.value))
const mainFile = computed(() => ['reusability-plugins', 'scaling-up-state-management'].includes(slug.value) ? 'main.js' : 'App.vue')
const files = computed(() => getFiles(slug.value))
const open = ref(false)

const getLearningPoints = () => {
  const d = data.value
  return Array.isArray(d.steps) ? d.steps : []
}

// 管理body类名以控制全局样式
watch(slug, (newSlug) => {
  document.body.classList.add('interactive-mode')
  history.replaceState({}, '', location.pathname + location.search)
}, { immediate: true })

</script>

<style scoped>
/* 普通模块样式 - 应用简介页面的设计系统 */
.module {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 交互式学习模块样式 - 仅用于简介页面 */
.module-interactive {
  padding: 0;
  max-width: none;
  margin: 0;
  height: 100%; /* 完全填充父容器 */
  overflow: hidden; /* 防止任何溢出 */
}

/* 交互式学习模式样式 - 使用flex布局最大化空间 */
.interactive-learning {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #ffffff;
}

.playground-wrapper {
  flex: 1;
  min-height: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main-playground {
  flex: 1;
  min-height: 0;
  height: 100%;
}

/* 非简介页面样式 - 应用简介页面的视觉设计 */
.module-intro {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 18px rgba(17, 24, 39, 0.06);
  margin: 0 auto;
  max-width: 800px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.page-title {
  font-size: 24px;
  color: #0f172a;
  margin: 0;
  font-weight: 600;
}

.play-btn {
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.play-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.3);
  filter: brightness(1.1);
}

.play-btn::before {
  content: '▶';
  font-size: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .module-intro {
    padding: 20px;
    margin: 16px;
  }
  
  .page-header {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
  
  .page-title {
    font-size: 20px;
    text-align: center;
  }
  
  .play-btn {
    justify-content: center;
  }
  
  .interactive-learning {
    /* fixed定位已经覆盖整个视口，无需调整 */
  }
}

@media (max-width: 480px) {
  .module-intro {
    padding: 16px;
    margin: 12px;
  }
  
  .page-title {
    font-size: 18px;
  }
}
</style>
