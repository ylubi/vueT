# 基于 Templates 框架构建学习网站指南

本框架支持通过配置 `templates` 目录快速搭建不同技术主题（如 Vue, React, Python 等）的交互式学习网站。

## 1. 核心概念

所有主题内容都存放在项目根目录的 `templates/<theme-name>` 文件夹中。一个标准的主题目录包含三个核心部分：

- **`examples/`**：存放示例代码，直接在页面的 Playground 中运行。
- **`menus/`**：定义左侧导航菜单结构。
- **`knowledge/`**：定义每个章节的教学内容（标题、简介、步骤、详情）。

## 2. 快速开始：创建新主题

假设我们要创建一个名为 `my-theme` 的新主题。

### 第一步：创建目录结构

在 `templates/` 下创建以下文件夹：

```bash
templates/
└── my-theme/
    ├── examples/    # 存放代码文件
    ├── menus/       # 存放菜单配置
    └── knowledge/   # 存放知识点配置
```

### 第二步：配置菜单 (menus/main.js)

创建 `templates/my-theme/menus/main.js`，定义导航结构。`slug` 是关联示例和知识点的唯一标识。

```javascript
export const menus = [
  {
    title: '基础入门',
    items: [
      { slug: 'hello-world', title: '你好，世界' },
      { slug: 'basic-syntax', title: '基础语法' }
    ]
  }
]
```

### 第三步：编写教学内容 (knowledge/main.js)

创建 `templates/my-theme/knowledge/main.js`，导出 `guideRegistry` 数组。

```javascript
export const guideRegistry = [
  {
    slug: 'hello-world', // 对应菜单中的 slug
    title: '你好，世界',
    intro: '这是你的第一个示例程序。',
    steps: ['了解代码结构', '修改变量值', '观察输出变化'], // 学习步骤
    details: [
      '代码入口通常是 App.vue 或 main.js。',
      'Playground 支持实时编译和预览。'
    ], // 核心概念详解
    code: [], // 可选：静态代码展示（非运行）
    replHash: '' // 可选：预设 REPL 状态哈希
  }
]
```

### 第四步：添加示例代码 (examples/)

在 `examples/` 下创建与 `slug` 对应的目录或文件。

- **单文件示例**：直接创建 `examples/hello-world/app.vue`。
- **多文件示例**：创建 `examples/basic-syntax/` 目录，并在其中放置 `App.vue`, `Child.vue`, `utils.js` 等。

**注意**：入口文件通常命名为 `App.vue` 或 `main.js`（取决于你的 REPL 配置）。

示例 `templates/my-theme/examples/hello-world/app.vue`：

```vue
<script setup>
import { ref } from 'vue'
const msg = ref('Hello World')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
</template>
```

## 3. 开发与构建

### 切换开发主题

在根目录 `package.json` 或 `.env` 中没有硬编码主题，开发时需通过环境变量指定：

**Linux/Mac:**
```bash
export VITE_THEME=my-theme
npm run dev
```

**Windows (PowerShell):**
```powershell
$env:VITE_THEME="my-theme"; npm run dev
```

或者修改 `vite.config.js` 中的默认值：
```javascript
const theme = process.env.VITE_THEME || 'my-theme' // 修改这里
```

### 构建发布

构建特定主题的静态网站：

```bash
# 构建 my-theme 主题
node scripts/build-theme.js my-theme
```

构建产物将生成在 `dist/` 目录下，可直接部署到任何静态服务器。

## 4. 进阶技巧

- **多级目录 slug**：如果示例路径是 `examples/advanced/feature/app.vue`，生成的 slug 会是 `advanced-feature`。建议保持 `examples/<slug>/` 的扁平结构以简化管理。
- **共享资源**：如果多个示例复用同一个组件，目前需在每个示例中包含副本，或通过网络导入（CDN）。
- **验证关联**：运行 `npm test` 可自动检查菜单、知识点和示例代码是否一一对应，防止链接失效。

## 5. 常见问题

- **Q: 示例代码没显示？**
  - A: 检查 `examples/` 下的文件路径是否与 `slug` 匹配。确保文件名大小写正确（通常用 `App.vue`）。
- **Q: 菜单点击无反应？**
  - A: 检查 `menus/main.js` 中的 `slug` 是否在 `knowledge/main.js` 中定义。
- **Q: 如何修改主题样式？**
  - A: 这是一个通用框架，样式主要在 `src/` 下的 Vue 组件中定义。如果需要特定主题的样式，可以在 `templates/my-theme/` 下添加 css 文件并在入口中引入（需修改源码支持），或利用 CSS 变量进行微调。
