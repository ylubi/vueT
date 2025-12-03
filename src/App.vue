<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { menus } from '@template/menus/main.js'
</script>

<template>
  <div class="shell">
    <div class="layout">
      <aside class="sidebar">
      <h3>Vue 指南</h3>
      <nav class="menu">
        <div v-for="(group, i) in menus" :key="i" class="group">
          <div class="group-title">{{ group.title }}</div>
          <RouterLink v-for="item in group.items" :key="item.slug" :to="`/guide/${item.slug}`">
            {{ item.title }}
          </RouterLink>
        </div>
        <!-- <RouterLink to="/play" class="play">Playground</RouterLink> -->
      </nav>
      </aside>
      <main class="content prose">
        <RouterView />
      </main>
    </div>
  </div>
  
</template>

<style scoped>
.shell { max-width: 1400px; margin: 0 auto; padding: 0 16px; }
.layout { display: grid; grid-template-columns: 160px 1fr; min-height: 100vh; gap: 0; }
/* 侧栏独立滚动，不影响右侧内容 - 优化宽度减少30% */
.sidebar { border-right: 1px solid #e5e7eb; padding: 12px 8px; width: 160px; position: sticky; top: 0; height: 100vh; box-sizing: border-box; background: #ffffff; overflow-y: auto; }
/* 紧凑层级样式 - 优化间距和字体 */
.menu { display: flex; flex-direction: column; gap: 1px; }
.group { display: flex; flex-direction: column; gap: 1px; margin: 3px 0 6px 0; }
.group-title { padding: 6px 8px 4px; font-weight: 600; font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: .02em; line-height: 1.2; }
.menu a { display: flex; align-items: center; gap: 6px; padding: 4px 8px; border-radius: 5px; color: #1f2937; text-decoration: none; font-size: 12px; line-height: 1.3; transition: all 0.15s ease; }
.menu a:hover { background: #f3f4f6; }
.menu a.router-link-active { font-weight: 600; color: #0ea5e9; background: #e0f2fe; }
.menu a.play { margin-top: 4px; color: #10b981; font-weight: 600; }
.content { padding: 16px; background: #f9fafb; }

/* 响应式设计 - 移动端适配 */
@media (max-width: 768px) {
  .shell { padding: 0 16px; }
  .layout { grid-template-columns: 140px 1fr; }
  .sidebar { width: 140px; padding: 10px 6px; }
  .group-title { padding: 5px 6px 3px; font-size: 10px; }
  .menu a { padding: 3px 6px; font-size: 11px; gap: 4px; }
  .content { padding: 12px; }
}

@media (max-width: 480px) {
  .shell { padding: 0 12px; }
  .layout { grid-template-columns: 120px 1fr; }
  .sidebar { width: 120px; padding: 8px 4px; }
  .group-title { padding: 4px 4px 2px; font-size: 9px; }
  .menu a { padding: 2px 4px; font-size: 10px; gap: 3px; }
  .content { padding: 8px; }
}

/* 交互式学习模式下的特殊处理 */
body.interactive-mode .shell {
  max-width: none;
  margin: 0;
  padding: 0;
  height: 100vh;
}

body.interactive-mode .layout {
  height: 100vh;
}

body.interactive-mode .content {
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>
