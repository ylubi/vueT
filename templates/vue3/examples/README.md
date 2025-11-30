# playgroundSample 示例库

示例代码已从 `src/pages/guideExamples.js` 中拆分为物理文件，按主题分类存放到本目录下，供页面动态加载与在 REPL 中运行。

## 目录组织

- `introduction/` 简介与基础示例
- `quick-start/` 快速开始示例
- `essentials/` 基础篇（生命周期、模板语法、响应式、计算属性、类与样式、条件渲染、列表、事件、表单、组件基础）
- `components/` 深入组件（注册、props、事件、v-model、attrs、slots、provide-inject、async）
- `reusability/` 复用性（composables、自定义指令、插件）
- `built-ins/` 内置组件（transition、transition-group、keep-alive、teleport、suspense）
- `scaling-up/` 进阶（SFC、工具链、路由、状态管理、测试、SSR）
- `best-practices/` 最佳实践（生产部署、性能、无障碍、安全）

每个示例通常包含一个 `App.vue`，多文件示例会包含子组件或脚本（如 `Child.vue`、`main.js`、`stores/*` 等）。

## 页面如何加载示例

- 页面通过 `src/pages/guideExamples.js` 中的 `getFiles(slug)` 获取示例文件映射（`{ [filename]: content }`）。
- 文件内容使用 Vite 的 `?raw` 方式按需导入，保证 REPL 接收字符串内容。

## 新增/维护示例的指引

1. 在对应子目录下新增示例文件（如 `essentials/computed/app.vue`）。
2. 在 `src/pages/guideExamples.js` 的 `samples` 中添加该 `slug` 的文件映射。
3. 若为多文件示例，按需创建并在映射中列出所有文件名（如 `App.vue`、`Child.vue`、`main.js`）。

## 命名与 slug

`slug` 与 `src/guide/content.js` 保持一致，例如：

- `essentials-forms`（表单输入绑定）
- `components-props`（Props）
- `scaling-up-routing`（路由概念演示）

若为特殊页面（如需要以 `main.js` 作为入口），页面会根据 `slug` 选择入口文件（参考 `src/pages/Guide.vue` 中的逻辑）。

