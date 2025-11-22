# Vue 指南与 Playground（Vue 3 + Vite）

一个面向学习与演示的 Vue 3 项目，包含「指南」页面与在线 Playground。

## 主要功能
- 指南导航与章节元信息：覆盖基础、深入组件、内置组件、应用规模化、最佳实践等主题
- 交互式示例：每个章节可在 Playground 中打开对应 SFC 文件并运行
- 动态示例生成：根据路由 `slug` 从 `src/pages/guideExamples.js` 返回示例文件（支持多文件）
- REPL 集成：使用 `@vue/repl` + CodeMirror，无需本地依赖即可运行示例（含 Pinia）
- 动态入口文件：涉及全局初始化的示例（插件、状态管理）通过 `main.js` 启动，其余使用 `App.vue`
- SEO 基础优化：静态 meta（description/keywords/OG/Twitter）+ 路由级动态 `title/description/canonical`

## 目录结构（关键）
- `src/pages/Guide.vue`：根据路由 `slug` 渲染章节信息，并打开 Playground
- `src/pages/guideExamples.js`：按 `slug` 生成示例文件映射（如 `{'App.vue': '...', 'Child.vue': '...'}`）
- `src/components/PlayModal.vue`：懒加载 Playground 面板对话框
- `src/components/PlaygroundPane.vue`：封装 Repl 初始化与 import map 合并（支持 pinia）
- `src/guide/content.js`：章节注册与元信息（标题、介绍、步骤、示例代码）
- `src/router/index.js`：路由声明、导航后动态 `title/description/canonical` 更新
- `src/main.js`：应用入口与路由挂载

## 支持的主题与示例（部分）
- 基础：模板语法、响应式、计算属性、条件与列表渲染、事件与表单、组件基础、生命周期
- 深入组件：注册、props、事件、组件 v-model、透传 attributes、插槽、provide/inject、异步组件
- 内置组件：Transition、TransitionGroup、KeepAlive、Teleport、Suspense
- 应用规模化：SFC、工具链、路由（概念演示）、状态管理（Pinia 示例）、测试（示例函数）
- 最佳实践：生产部署、性能优化（懒加载重组件）、无障碍（表单/ARIA）、安全（XSS 风险演示）

## 使用
- 开发启动：`npm run dev`
- 生产构建：`npm run build`
- 本地预览（生产包）：`npm run preview -- --port 8080`

## 部署（可选）
- 安装 PM2（服务器）：`npm i -g pm2`
- 构建：`npm run build`
- 启动：`pm2 start ecosystem.config.cjs --env production`
- 查看状态：`pm2 status` / 日志：`pm2 logs vueT`
- 重载：`pm2 reload vueT` / 停止/删除：`pm2 stop vueT` / `pm2 delete vueT`
- 开机自启：`pm2 startup && pm2 save`

## 提示
- Playground 中的 `hash` 会序列化当前会话，便于分享与回溯
- 如需新增章节：在 `src/guide/content.js` 注册 `slug`，并在 `src/pages/guideExamples.js` 增加对应 `case`
- 涉及应用初始化的示例需返回 `main.js`，同时在 `Guide.vue` 的 `mainFile` 判断列表中加入该 `slug`
