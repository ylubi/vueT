<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="shell">
    <div class="layout">
      <aside class="sidebar">
      <h3>指南</h3>
      <nav class="menu">
        <div class="group">
          <div class="group-title">基础</div>
          <RouterLink to="/guide/introduction">简介</RouterLink>
          <RouterLink to="/guide/quick-start">快速上手</RouterLink>
          <RouterLink to="/guide/essentials-template-syntax">模板语法</RouterLink>
          <RouterLink to="/guide/essentials-reactivity-fundamentals">响应式基础</RouterLink>
          <RouterLink to="/guide/essentials-computed">计算属性</RouterLink>
          <RouterLink to="/guide/essentials-class-and-style">类与样式绑定</RouterLink>
          <RouterLink to="/guide/essentials-conditional">条件渲染</RouterLink>
          <RouterLink to="/guide/essentials-list">列表渲染</RouterLink>
          <RouterLink to="/guide/essentials-event-handling">事件处理</RouterLink>
          <RouterLink to="/guide/essentials-forms">表单输入绑定</RouterLink>
          <RouterLink to="/guide/essentials-component-basics">组件基础</RouterLink>
          <RouterLink to="/guide/essentials-lifecycle">生命周期</RouterLink>
        </div>
        <div class="group">
          <div class="group-title">深入组件</div>
          <RouterLink to="/guide/components-registration">注册</RouterLink>
          <RouterLink to="/guide/components-props">Props</RouterLink>
          <RouterLink to="/guide/components-events">事件</RouterLink>
          <RouterLink to="/guide/components-v-model">组件 v-model</RouterLink>
          <RouterLink to="/guide/components-attrs">透传 Attributes</RouterLink>
          <RouterLink to="/guide/components-slots">插槽</RouterLink>
          <RouterLink to="/guide/components-provide-inject">依赖注入</RouterLink>
          <RouterLink to="/guide/components-async">异步组件</RouterLink>
        </div>
        <div class="group">
          <div class="group-title">逻辑复用</div>
          <RouterLink to="/guide/reusability-composables">组合式函数</RouterLink>
          <RouterLink to="/guide/reusability-custom-directives">自定义指令</RouterLink>
          <RouterLink to="/guide/reusability-plugins">插件</RouterLink>
        </div>
        <div class="group">
          <div class="group-title">内置组件</div>
          <RouterLink to="/guide/built-ins-transition">Transition</RouterLink>
          <RouterLink to="/guide/built-ins-transition-group">TransitionGroup</RouterLink>
          <RouterLink to="/guide/built-ins-keep-alive">KeepAlive</RouterLink>
          <RouterLink to="/guide/built-ins-teleport">Teleport</RouterLink>
          <RouterLink to="/guide/built-ins-suspense">Suspense</RouterLink>
        </div>
        <div class="group">
          <div class="group-title">应用规模化</div>
          <RouterLink to="/guide/scaling-up-sfc">单文件组件</RouterLink>
          <RouterLink to="/guide/scaling-up-tooling">工具链</RouterLink>
          <RouterLink to="/guide/scaling-up-routing">路由</RouterLink>
          <RouterLink to="/guide/scaling-up-state-management">状态管理</RouterLink>
          <RouterLink to="/guide/scaling-up-testing">测试</RouterLink>
          <RouterLink to="/guide/scaling-up-ssr">服务端渲染 (SSR)</RouterLink>
        </div>
        <div class="group">
          <div class="group-title">最佳实践</div>
          <RouterLink to="/guide/best-practices-production-deployment">生产部署</RouterLink>
          <RouterLink to="/guide/best-practices-performance">性能优化</RouterLink>
          <RouterLink to="/guide/best-practices-accessibility">无障碍访问</RouterLink>
          <RouterLink to="/guide/best-practices-security">安全</RouterLink>
        </div>
        <RouterLink to="/play" class="play">Playground</RouterLink>
      </nav>
      </aside>
      <main class="content prose">
        <RouterView />
      </main>
    </div>
  </div>
  
</template>

<style scoped>
.shell { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.layout { display: grid; grid-template-columns: 240px 1fr; min-height: 100vh; }
/* 侧栏独立滚动，不影响右侧内容 */
.sidebar { border-right: 1px solid #e5e7eb; padding: 14px 10px; width: 240px; position: sticky; top: 0; height: 100vh; box-sizing: border-box; background: #ffffff; overflow-y: auto; }
/* 紧凑层级样式 */
.menu { display: flex; flex-direction: column; gap: 2px; }
.group { display: flex; flex-direction: column; gap: 2px; margin: 4px 0 8px 0; }
.group-title { padding: 8px 10px 6px; font-weight: 700; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: .02em; }
.menu a { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: 6px; color: #1f2937; text-decoration: none; font-size: 13px; }
.menu a:hover { background: #f3f4f6; }
.menu a.router-link-active { font-weight: 600; color: #0ea5e9; background: #e0f2fe; }
.menu a.play { margin-top: 6px; color: #10b981; font-weight: 600; }
.content { padding: 24px; background: #f9fafb; }
</style>
