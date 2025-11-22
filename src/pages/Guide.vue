<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { guideMap } from '../guide/content'
import GuidePanel from '../components/GuidePanel.vue'
import PlayModal from '../components/PlayModal.vue'
import { getFiles } from './guideExamples'

const route = useRoute()
const slug = computed(() => route.params.slug || 'introduction')
const data = computed(() => guideMap[slug.value])
const mainFile = computed(() => ['reusability-plugins', 'scaling-up-state-management'].includes(slug.value) ? 'main.js' : 'App.vue')
const files = computed(() => getFiles(slug.value))
const open = ref(false)
</script>

<template>
  <section class="module">
    <div class="module-intro">
      <h2>{{ data.title }}</h2>
      <GuidePanel :title="'相关知识点'" :intro="data.intro" :steps="data.steps" :code="data.code" :details="[
        slug === 'introduction' ? 'Vue 是一个渐进式框架，核心能力是声明式渲染与响应式系统。' : '',
        slug === 'quick-start' ? '你可以无需构建直接在 HTML 引入，也可以使用 Vite 快速创建工程。' : '',
        slug === 'essentials-template-syntax' ? '模板基于 HTML，插值使用 Mustache 语法；属性绑定使用 v-bind 或 : 简写；谨慎使用 v-html 防止 XSS。' : '',
      ].filter(Boolean)" />
      <button class="play-btn" @click="open = true">打开 Playground</button>
    </div>
    <PlayModal :open="open" :hash="data.replHash" :files="files || null" :mainFile="mainFile" @close="open = false" />
  </section>
</template>

<style scoped>
.module { display: grid; grid-template-columns: 1fr; gap: 18px; }
.module-intro { position: relative; display: grid; gap: 12px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; box-shadow: 0 4px 18px rgba(17, 24, 39, 0.06); }
.module-intro h2 { margin: 0; font-size: 22px; color: #0f172a; }
.play-btn { position: absolute; right: 16px; top: 16px; background: linear-gradient(90deg, #10b981, #0ea5e9); color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; box-shadow: 0 6px 16px rgba(14, 165, 233, .25); z-index: 2; }
.play-btn:hover { filter: brightness(1.05); }
</style>