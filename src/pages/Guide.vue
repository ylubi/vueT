<template>
  <section class="module-interactive">
    <!-- 所有页面统一使用交互式学习模式 -->
    <div class="interactive-learning">
      <div class="playground-wrapper">
        <PlaygroundPane 
          :files="slug === 'introduction' ? interactiveCode : files" 
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

// 获取学习要点 - 根据页面slug返回对应的知识点
const getLearningPoints = () => {
  const pointsMap = {
    'introduction': [
      '🎯 声明式渲染：模板与状态的关系',
      '⭐ 响应式数据：修改数据自动更新视图', 
      '✨ 双向绑定：输入框与数据同步',
      '🚀 条件渲染：根据状态显示不同内容'
    ],
    'quick-start': [
      '🚀 快速开始：无需构建即可使用',
      '⚡ Vite 构建：现代化的开发体验',
      '📦 项目结构：清晰的目录组织',
      '🔧 开发工具：热更新和构建优化'
    ],
    'essentials-template-syntax': [
      '📝 模板语法：基于HTML的扩展',
      '🔗 插值语法：{{ }} 文本绑定',
      '🎯 属性绑定：v-bind 或 : 简写',
      '⚠️ 安全注意：谨慎使用v-html防止XSS'
    ],
    'essentials-reactivity-fundamentals': [
      '⚡ ref()：创建响应式引用',
      '🔄 reactive()：创建响应式对象',
      '📊 .value：访问ref的值',
      '🎯 自动更新：数据变化驱动视图更新'
    ],
    'essentials-computed': [
      '🧮 computed()：创建计算属性',
      '💾 缓存机制：基于依赖缓存结果',
      '⚡ 性能优化：避免重复计算',
      '🔍 依赖追踪：自动追踪相关数据'
    ],
    'essentials-class-and-style': [
      '🎨 类绑定：:class 对象和数组语法',
      '💄 样式绑定：:style 对象语法',
      '🔄 动态切换：根据状态切换类名',
      '🎯 状态可视化：用样式表达组件状态'
    ],
    'essentials-conditional': [
      '🌿 条件渲染：v-if/v-else-if/v-else',
      '👁️ v-show：通过display控制显示',
      '💡 性能差异：v-if切换时销毁重建',
      '🎯 使用场景：根据需求选择合适指令'
    ],
    'essentials-list': [
      '📋 v-for：列表渲染指令',
      '🔑 :key：提供唯一标识优化性能',
      '🔄 遍历支持：数组和对象遍历',
      '⚠️ 最佳实践：避免使用索引作为key'
    ],
    'essentials-event-handling': [
      '🖱️ 事件监听：@click等事件语法',
      '🛡️ 事件修饰符：.prevent/.stop等',
      '⌨️ 按键修饰符：.enter/.esc等',
      '📤 参数传递：事件处理和数据传递'
    ],
    'essentials-forms': [
      '🔄 v-model：双向数据绑定',
      '📝 表单支持：各种表单元素',
      '✨ 修饰符：.lazy/.number/.trim',
      '🔧 自定义：组件的v-model支持'
    ],
    'components-registration': [
      '🌍 全局注册：整个应用可用的组件',
      '📦 局部注册：特定组件可用的子组件',
      '📄 SFC结构：单文件组件组织方式',
      '🔧 组件命名：遵循Vue命名规范'
    ],
    'components-props': [
      '📤 props：父到子数据传递',
      '✅ 类型检查：支持props类型验证',
      '🔄 单向数据流：子组件不修改props',
      '📝 默认值：为props提供默认值'
    ],
    'components-events': [
      '📡 defineEmits：定义自定义事件',
      '📝 命名规范：小写短横线格式',
      '📊 参数传递：事件可以携带参数',
      '🔄 子父通信：实现子到父的数据传递'
    ],
    'components-v-model': [
      '🔄 双向绑定：自定义组件v-model',
      '📝 modelValue：默认的prop名称',
      '📤 update:modelValue：默认的事件名称',
      '🔧 多v-model：支持多个双向绑定'
    ],
    'components-attrs': [
      '📋 属性透传：非prop属性自动传递',
      '🎨 class/style合并：特殊的合并行为',
      '🚫 inheritAttrs：控制属性继承',
      '🔧 useAttrs：获取透传属性的工具'
    ],
    'components-slots': [
      '📦 插槽机制：内容分发API',
      '📝 默认插槽：未命名插槽内容',
      '🏷️ 具名插槽：指定名称的插槽',
      '🔄 作用域插槽：子组件向插槽传值'
    ],
    'components-provide-inject': [
      '📤 provide：提供依赖给后代组件',
      '📥 inject：从祖先组件接收依赖',
      '🌍 跨层级：解决prop逐级传递问题',
      '⚡ 响应式：支持响应式的provide/inject'
    ],
    'components-async': [
      '⏳ defineAsyncComponent：异步组件定义',
      '🚀 按需加载：优化应用加载性能',
      '⚠️ 状态处理：加载状态和错误处理',
      '🎭 Suspense：配合异步组件使用'
    ]
  }
  
  return pointsMap[slug.value] || pointsMap['introduction']
}

// 管理body类名以控制全局样式
watch(slug, (newSlug) => {
  document.body.classList.add('interactive-mode')
  history.replaceState({}, '', location.pathname + location.search)
}, { immediate: true })

// 为简介页面创建交互式学习代码模板
const interactiveCode = computed(() => {
  if (slug.value === 'introduction') {
    const OPEN_SCRIPT = ['<', 'script setup>'].join('')
    const CLOSE_SCRIPT = ['</', 'script>'].join('')
    const OPEN_TEMPLATE = ['<', 'template>'].join('')
    const CLOSE_TEMPLATE = ['</', 'template>'].join('')
    const OPEN_STYLE = ['<', 'style scoped>'].join('')
    const CLOSE_STYLE = ['</', 'style>'].join('')
    
    const content = [
      '<!-- 🎯 Vue 的核心概念：声明式渲染 -->',
      '<!-- 我们只需要描述数据与界面的关系，Vue 负责自动更新 -->',
      '',
      OPEN_TEMPLATE,
      '  <div class="demo">',
      '    <h1>{{ title }}</h1>',
      '    <p class="desc">{{ description }}</p>',
      '    ',
      '    <!-- ⭐️ 响应式数据：修改 count，Vue 自动更新视图 -->',
      '    <div class="counter">',
      '      <button @click="count++">Count is: {{ count }}</button>',
      '    </div>',
      '    ',
      '    <!-- ✨ 双向绑定：输入框与数据同步 -->',
      '    <div class="binding">',
      '      <input v-model="text" placeholder="Edit me...">',
      '      <p>Hello {{ text }}!</p>',
      '    </div>',
      '    ',
      '    <!-- 🚀 条件渲染：根据状态显示不同内容 -->',
      '    <div class="conditional">',
      '      <button @click="show = !show">Toggle Text</button>',
      '      <p v-if="show">Now you see me!</p>',
      '    </div>',
      '  </div>',
      CLOSE_TEMPLATE,
      '',
      OPEN_SCRIPT,
      '// 🎨 Vue 3 Composition API - 现代化的开发方式',
      "import { ref } from 'vue'",
      '',
      '// 📊 响应式状态 - 这就是 Vue 的核心',
      "const title = ref('Vue 3 简介')",
      "const description = ref('一个渐进式 JavaScript 框架')",
      'const count = ref(0)',
      "const text = ref('Vue')",
      'const show = ref(true)',
      CLOSE_SCRIPT,
      '',
      OPEN_STYLE,
      '/* 💄 简洁美观的样式 */',
      '.demo {',
      '  max-width: 600px;',
      '  margin: 0 auto;',
      '  padding: 40px;',
      '  text-align: center;',
      '  font-family: Arial, sans-serif;',
      '}',
      '',
      'h1 {',
      '  color: #42b883;',
      '  margin-bottom: 10px;',
      '}',
      '',
      '.desc {',
      '  color: #666;',
      '  margin-bottom: 30px;',
      '}',
      '',
      '.counter, .binding, .conditional {',
      '  margin: 20px 0;',
      '  padding: 20px;',
      '  background: #f5f5f5;',
      '  border-radius: 8px;',
      '}',
      '',
      'button {',
      '  background: #42b883;',
      '  color: white;',
      '  border: none;',
      '  padding: 10px 20px;',
      '  border-radius: 4px;',
      '  cursor: pointer;',
      '  font-size: 16px;',
      '}',
      '',
      'button:hover {',
      '  background: #35a372;',
      '}',
      '',
      'input {',
      '  padding: 8px;',
      '  border: 1px solid #ddd;',
      '  border-radius: 4px;',
      '  margin: 10px 0;',
      '  width: 200px;',
      '}',
      '',
      'p {',
      '  margin: 10px 0;',
      '}',
      CLOSE_STYLE
    ].join('\n')
    
    return { 'App.vue': content }
  }
  return null
})
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
