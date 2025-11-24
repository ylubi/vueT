<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slug: { type: String, default: '' },
  title: { type: String, default: '' },
  points: { type: Array, default: () => [] }
})



const knowledgeMap = {
  'introduction': {
    title: '简介：Vue.js 渐进式 JavaScript 框架',
    points: [
      'Vue (发音 /vjuː/，类似 view) 是用于构建用户界面的 JavaScript 框架',
      '基于标准 HTML、CSS 和 JavaScript，提供声明式、组件化编程模型',
      '核心功能：声明式渲染 - 模板语法描述状态与 HTML 的关系',
      '响应式系统：自动跟踪 JavaScript 状态变化并更新 DOM',
      '单文件组件 (SFC)：将组件逻辑、模板、样式封装在 .vue 文件中',
      'API 风格：Options API (选项式) 与 Composition API (组合式)',
      '渐进式框架：可逐步集成，支持从无构建步骤到完整工程化',
      '多种使用方式：静态 HTML 增强、Web Components、SPA、SSR、SSG',
      '学习曲线平滑：具备 HTML/CSS/JS 基础即可上手',
      '生态系统丰富：路由、状态管理、构建工具等完整解决方案'
    ]
  },
  'essentials-template-syntax': {
    title: '模板语法要点',
    points: [
      '{{ }} 文本插值语法',
      'v-bind 或 : 属性绑定',
      'v-html 插入原始HTML（注意XSS）',
      '模板支持JavaScript表达式'
    ]
  },
  'essentials-reactivity-fundamentals': {
    title: '响应式基础',
    points: [
      'ref() 创建响应式引用',
      'reactive() 创建响应式对象',
      '.value 访问ref的值',
      '响应式数据变化自动更新DOM'
    ]
  },
  'essentials-computed': {
    title: '计算属性',
    points: [
      'computed() 创建计算属性',
      '基于依赖缓存，依赖变化时重新计算',
      '适合复杂逻辑和性能优化',
      '对比方法调用更高效'
    ]
  },
  'essentials-class-and-style': {
    title: '类与样式绑定',
    points: [
      ':class 支持对象和数组语法',
      ':style 支持对象语法',
      '类名切换和样式动态绑定',
      '常用于组件状态可视化'
    ]
  },
  'essentials-conditional': {
    title: '条件渲染',
    points: [
      'v-if / v-else-if / v-else 条件渲染',
      'v-show 通过display控制显示',
      'v-if 切换时销毁重建元素',
      'v-show 初始渲染成本更低'
    ]
  },
  'essentials-list': {
    title: '列表渲染',
    points: [
      'v-for 指令渲染列表',
      ':key 提供唯一标识优化性能',
      '支持数组和对象遍历',
      '避免使用索引作为key'
    ]
  },
  'essentials-event-handling': {
    title: '事件处理',
    points: [
      '@click 等事件监听语法',
      '事件修饰符如 .prevent .stop',
      '按键修饰符如 .enter .esc',
      '事件参数传递和处理'
    ]
  },
  'essentials-form-input': {
    title: '表单输入绑定',
    points: [
      'v-model 双向数据绑定',
      '支持各种表单元素',
      '修饰符如 .lazy .number .trim',
      '自定义组件的v-model'
    ]
  },
  'components-registration': {
    title: '组件注册',
    points: [
      '全局和局部组件注册',
      'SFC 单文件组件结构',
      '组件命名和引用',
      '动态组件和异步组件'
    ]
  },
  'components-props': {
    title: 'Props 传参',
    points: [
      'props 实现父到子数据传递',
      '支持类型检查和默认值',
      '遵循单向数据流原则',
      '子组件不直接修改props'
    ]
  },
  'components-events': {
    title: '事件通信',
    points: [
      'defineEmits 定义自定义事件',
      '事件名使用小写短横线格式',
      '可以传递事件参数',
      '实现子到父的通信'
    ]
  },
  'components-v-model': {
    title: '组件v-model',
    points: [
      '自定义组件的双向绑定',
      'modelValue 和 update:modelValue',
      '支持多个v-model绑定',
      '修饰符和自定义行为'
    ]
  },
  'components-attrs': {
    title: '透传Attributes',
    points: [
      '非prop属性自动透传',
      'class 和 style 合并',
      'inheritAttrs 选项控制',
      'useAttrs() 获取透传属性'
    ]
  },
  'components-slots': {
    title: '插槽机制',
    points: [
      '默认插槽和具名插槽',
      '作用域插槽传值',
      '插槽后备内容',
      '动态插槽名'
    ]
  },
  'components-provide-inject': {
    title: '依赖注入',
    points: [
      'provide 提供依赖',
      'inject 注入依赖',
      '跨层级组件通信',
      '响应式provide'
    ]
  },
  'components-async': {
    title: '异步组件',
    points: [
      'defineAsyncComponent 定义',
      '按需加载优化性能',
      '加载状态和错误处理',
      'Suspense 配合使用'
    ]
  }
}

const currentKnowledge = computed(() => {
  if (props.title || (props.points && props.points.length)) {
    return {
      title: props.title || '学习说明',
      points: props.points && props.points.length ? props.points : ['暂无内容'],
      slug: props.slug || ''
    }
  }
  const mapData = knowledgeMap[props.slug] || {
    title: 'Vue 知识点',
    points: ['选择特定页面查看相关知识点']
  }
  return {
    ...mapData,
    slug: props.slug || ''
  }
})

// 获取当前页面的详细知识内容
const getPageKnowledge = () => {
  const pageData = {
    'introduction': {
      overview: 'Vue.js 是什么？',
      overviewText: 'Vue (发音 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。',
      features: [
        { icon: '📋', title: '声明式渲染', desc: '基于标准 HTML 拓展了一套模板语法，可声明式描述最终输出的 HTML 和 JavaScript 状态之间的关系' },
        { icon: '⚡', title: '响应性', desc: 'Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM' },
        { icon: '📦', title: '单文件组件', desc: '将组件的逻辑 (JavaScript)、模板 (HTML) 和样式 (CSS) 封装在同一个文件里' },
        { icon: '🎯', title: '渐进式', desc: '可以逐步集成到现有项目，支持从无构建步骤到完整工程化' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '无需构建步骤，渐进式增强静态的 HTML' },
        { icon: '🔧', text: '在任何页面中作为 Web Components 嵌入' },
        { icon: '🚀', text: '单页应用 (SPA) 开发' },
        { icon: '🌐', text: '全栈 / 服务端渲染 (SSR)' },
        { icon: '📄', text: 'Jamstack / 静态站点生成 (SSG)' }
      ],
      codeExample: `import { createApp, ref } from 'vue'

createApp({
  setup() {
    const count = ref(0)
    return { count }
  },
  template: \`<button @click="count++">Count is: {{ count }}</button>\`
}).mount('#app')`
    },
    'quick-start': {
      overview: '快速开始',
      overviewText: 'Vue 提供了多种方式来开始你的项目，从简单的 CDN 引入到完整的工程化方案，满足不同场景的需求。',
      features: [
        { icon: '🚀', title: 'CDN 引入', desc: '无需构建步骤，直接在 HTML 中通过 CDN 引入 Vue，适合简单项目或原型开发' },
        { icon: '⚡', title: 'Vite 构建', desc: '使用 Vite 创建项目，享受快速的开发服务器和优化的构建输出' },
        { icon: '📦', title: 'CLI 工具', desc: 'Vue CLI 提供完整的项目脚手架，包含测试、Linting 等开发工具' },
        { icon: '🎯', title: '工程化', desc: '支持 TypeScript、ESLint、单元测试等现代前端工程化需求' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '快速原型开发，无需复杂配置' },
        { icon: '🔧', text: '中小型项目，需要基本的工程化' },
        { icon: '🚀', text: '大型应用，需要完整的开发工具链' },
        { icon: '🌐', text: '团队协作，需要统一的开发规范' }
      ],
      codeExample: `<!-- 快速开始示例 -->
&lt;div id="app"&gt;
  {{ message }}
&lt;/div&gt;

&lt;script type="module"&gt;
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}).mount('#app')
&lt;/script&gt;`
    },
    'essentials-template-syntax': {
      overview: '模板语法',
      overviewText: 'Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。',
      features: [
        { icon: '📝', title: '文本插值', desc: '使用 {{ }} 语法进行数据绑定，将数据显示在模板中' },
        { icon: '🔗', title: '属性绑定', desc: '使用 v-bind 指令或 : 简写来绑定 HTML 属性' },
        { icon: '🎯', title: '表达式支持', desc: '模板中支持 JavaScript 表达式，提供更强的灵活性' },
        { icon: '⚠️', title: '安全注意', desc: '谨慎使用 v-html，避免 XSS 攻击风险' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '显示动态文本内容' },
        { icon: '🔧', text: '绑定元素属性和样式' },
        { icon: '🚀', text: '条件显示和列表渲染' },
        { icon: '🌐', text: '处理用户输入和事件' }
      ],
      codeExample: `&lt;template&gt;
  &lt;div&gt;
    &lt;!-- 文本插值 --&gt;
    &lt;p&gt;{{ message }}&lt;/p&gt;
    
    &lt;!-- 属性绑定 --&gt;
    &lt;img :src="imageSrc" :alt="imageAlt"&gt;
    
    &lt;!-- 表达式 --&gt;
    &lt;p&gt;{{ number + 1 }}&lt;/p&gt;
    &lt;p&gt;{{ ok ? 'YES' : 'NO' }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;`
    },
    'essentials-reactivity-fundamentals': {
      overview: '响应式基础',
      overviewText: 'Vue 的响应式系统是其核心特性之一，它允许你创建能够自动跟踪依赖并在数据变化时更新 DOM 的应用程序。',
      features: [
        { icon: '🔄', title: 'ref() 函数', desc: '创建包含单个值的响应式引用，通过 .value 属性访问和修改' },
        { icon: '📦', title: 'reactive() 函数', desc: '创建响应式对象，可以直接访问和修改属性，无需 .value' },
        { icon: '⚡', title: '自动更新', desc: '当响应式数据发生变化时，Vue 自动更新相关的 DOM 元素' },
        { icon: '🎯', title: '深层响应', desc: '响应式对象是深层的，嵌套属性也会自动跟踪变化' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '管理组件的本地状态' },
        { icon: '🔧', text: '跟踪用户输入和表单数据' },
        { icon: '🚀', text: '处理异步数据获取' },
        { icon: '🌐', text: '实现交互式用户界面' }
      ],
      codeExample: `import { ref, reactive } from 'vue'

// 使用 ref 创建响应式引用
const count = ref(0)
const message = ref('Hello Vue!')

// 使用 reactive 创建响应式对象
const state = reactive({
  name: 'Vue',
  version: 3,
  features: ['响应式', '组件化', '声明式']
})

// 修改数据
function increment() {
  count.value++
  state.version++
}`
    },
    'essentials-computed': {
      overview: '计算属性',
      overviewText: '计算属性是基于它们的依赖进行缓存的。只有在相关依赖发生改变时才会重新求值，这使得它们非常适合处理复杂逻辑。',
      features: [
        { icon: '🧮', title: '自动缓存', desc: '计算属性会根据依赖自动缓存，依赖不变时直接返回缓存值' },
        { icon: '⚡', title: '高效性能', desc: '相比方法调用，计算属性在依赖不变时避免重复计算' },
        { icon: '🔄', title: '自动更新', desc: '当依赖发生变化时，计算属性会自动重新计算' },
        { icon: '📝', title: '可写计算属性', desc: '通过 getter 和 setter 支持可写的计算属性' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '格式化显示数据' },
        { icon: '🔧', text: '过滤和排序列表' },
        { icon: '🚀', text: '复杂的数据转换' },
        { icon: '🌐', text: '依赖多个数据源的状态' }
      ],
      codeExample: `import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

// 基本计算属性
const fullName = computed(() => {
  return \`\${firstName.value} \${lastName.value}\`
})

// 可写计算属性
const fullNameWritable = computed({
  get() {
    return \`\${firstName.value} \${lastName.value}\`
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})`
    },
    'essentials-class-and-style': {
      overview: 'Class 与 Style 绑定',
      overviewText: 'Vue 提供了特殊的语法来绑定 class 和 style，使得动态切换元素的样式变得非常简单和直观。',
      features: [
        { icon: '🎨', title: '对象语法', desc: '使用对象语法动态切换 class，键为 class 名，值为布尔值' },
        { icon: '📝', title: '数组语法', desc: '使用数组语法应用多个 class，可以混合静态和动态 class' },
        { icon: '🔗', title: '内联样式', desc: '使用对象语法或数组语法绑定内联样式' },
        { icon: '⚡', title: '自动前缀', desc: 'Vue 自动为 CSS 属性添加浏览器前缀' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '根据状态切换组件样式' },
        { icon: '🔧', text: '实现主题切换功能' },
        { icon: '🚀', text: '动态显示错误状态' },
        { icon: '🌐', text: '响应式布局调整' }
      ],
      codeExample: `const isActive = ref(true)
const hasError = ref(false)
const theme = ref('light')

// class 对象语法
const classObject = computed(() => ({
  active: isActive.value,
  'text-danger': hasError.value
}))

// style 对象语法
const styleObject = computed(() => ({
  backgroundColor: theme.value === 'dark' ? '#333' : '#fff',
  color: theme.value === 'dark' ? '#fff' : '#333'
}))`
    },
    'essentials-conditional': {
      overview: '条件渲染',
      overviewText: 'Vue 提供了多种方式来根据条件渲染元素，包括 v-if、v-else-if、v-else 和 v-show 指令。',
      features: [
        { icon: '🔀', title: 'v-if 指令', desc: '条件性地渲染元素，条件为 false 时元素被销毁' },
        { icon: '🔄', title: 'v-show 指令', desc: '通过切换 display CSS 属性来显示/隐藏元素' },
        { icon: '⚡', title: '性能差异', desc: 'v-if 有更高的切换开销，v-show 有更高的初始渲染开销' },
        { icon: '🎯', title: '模板表达式', desc: '支持在模板中使用复杂的 JavaScript 表达式' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '根据权限显示不同内容' },
        { icon: '🔧', text: '切换不同的视图状态' },
        { icon: '🚀', text: '显示/隐藏表单字段' },
        { icon: '🌐', text: '实现标签页切换' }
      ],
      codeExample: `const isLoggedIn = ref(false)
const userType = ref('guest')
const showDetails = ref(false)

// 切换登录状态
function toggleLogin() {
  isLoggedIn.value = !isLoggedIn.value
}

// 切换用户类型
function setUserType(type) {
  userType.value = type
}`
    },
    'essentials-list': {
      overview: '列表渲染',
      overviewText: 'Vue 使用 v-for 指令来渲染列表，支持数组和对象的遍历，并提供了高效的 key 机制来优化性能。',
      features: [
        { icon: '📋', title: 'v-for 指令', desc: '使用 v-for 指令遍历数组或对象，生成重复的元素' },
        { icon: '🔑', title: 'key 属性', desc: '使用 key 属性帮助 Vue 识别元素，提高渲染性能' },
        { icon: '🔄', title: '索引访问', desc: '可以访问当前项的索引，支持数组和对象遍历' },
        { icon: '⚡', title: '范围渲染', desc: '支持使用数字范围来渲染固定数量的元素' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '渲染商品列表' },
        { icon: '🔧', text: '显示搜索结果' },
        { icon: '🚀', text: '创建导航菜单' },
        { icon: '🌐', text: '实现分页功能' }
      ],
      codeExample: `import { ref } from 'vue'

// 商品列表示例
const products = ref([
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'MacBook', price: 1299 },
  { id: 3, name: 'iPad', price: 799 }
])

// 添加新产品
function addProduct() {
  const newId = products.value.length + 1
  products.value.push({
    id: newId,
    name: \`Product \${newId}\`,
    price: Math.floor(Math.random() * 1000)
  })
}

// 删除产品
function removeProduct(id) {
  const index = products.value.findIndex(p => p.id === id)
  if (index > -1) {
    products.value.splice(index, 1)
  }
}`
    },
    'essentials-event-handling': {
      overview: '事件处理',
      overviewText: 'Vue 提供了简洁的事件处理语法，支持事件监听、事件修饰符和按键修饰符，使得处理用户交互变得非常容易。',
      features: [
        { icon: '🖱️', title: '事件监听', desc: '使用 v-on 指令或 @ 语法糖监听 DOM 事件' },
        { icon: '🛡️', title: '事件修饰符', desc: '使用 .prevent、.stop 等修饰符处理事件行为' },
        { icon: '⌨️', title: '按键修饰符', desc: '使用 .enter、.esc 等修饰符处理键盘事件' },
        { icon: '🎯', title: '自定义事件', desc: '组件可以通过 $emit 触发自定义事件' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '处理按钮点击事件' },
        { icon: '🔧', text: '实现表单提交验证' },
        { icon: '🚀', text: '创建键盘快捷键' },
        { icon: '🌐', text: '实现拖拽功能' }
      ],
      codeExample: `import { ref } from 'vue'

const count = ref(0)
const inputValue = ref('')

// 事件处理方法
function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function handleSubmit(event) {
  event.preventDefault()
  console.log('表单提交:', inputValue.value)
}

function handleKeyup(event) {
  if (event.key === 'Enter') {
    console.log('按下了回车键')
  }
}`
    },
    'essentials-form-input': {
      overview: '表单输入绑定',
      overviewText: 'Vue 使用 v-model 指令在表单输入元素上创建双向数据绑定，使得处理用户输入变得非常简单。',
      features: [
        { icon: '🔄', title: '双向绑定', desc: 'v-model 指令创建表单输入和应用状态之间的双向绑定' },
        { icon: '📝', title: '多种输入类型', desc: '支持文本、复选框、单选按钮、选择框等各种输入类型' },
        { icon: '⚡', title: '修饰符', desc: '提供 .lazy、.number、.trim 等修饰符处理输入' },
        { icon: '🎯', title: '组件支持', desc: 'v-model 也可以用于自定义组件实现双向绑定' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '创建用户注册表单' },
        { icon: '🔧', text: '实现搜索功能' },
        { icon: '🚀', text: '处理用户设置' },
        { icon: '🌐', text: '验证表单输入' }
      ],
      codeExample: `import { ref } from 'vue'

// 表单数据
const formData = ref({
  username: '',
  email: '',
  age: '',
  country: '',
  subscribe: false,
  interests: []
})

// 国家选项
const countries = ref([
  { value: 'cn', label: '中国' },
  { value: 'us', label: '美国' },
  { value: 'jp', label: '日本' }
])

// 兴趣选项
const interestOptions = ref([
  { value: 'tech', label: '技术' },
  { value: 'music', label: '音乐' },
  { value: 'sports', label: '运动' }
])

// 提交表单
function submitForm() {
  console.log('表单数据:', formData.value)
}`
    },
    'components-registration': {
      overview: '组件注册',
      overviewText: '组件是 Vue 的核心概念之一，允许你将 UI 拆分成独立、可复用的部分。组件需要注册后才能使用。',
      features: [
        { icon: '🌍', title: '全局注册', desc: '使用 app.component() 全局注册组件，在整个应用中可用' },
        { icon: '📦', title: '局部注册', desc: '在组件内部注册，只在该组件及其子组件中可用' },
        { icon: '📄', title: 'SFC 组件', desc: '单文件组件将模板、逻辑和样式封装在 .vue 文件中' },
        { icon: '⚡', title: '动态组件', desc: '使用 <component :is=""> 实现动态组件切换' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '创建可复用的 UI 组件' },
        { icon: '🔧', text: '组织复杂的应用结构' },
        { icon: '🚀', text: '实现组件库' },
        { icon: '🌐', text: '构建模块化应用' }
      ],
      codeExample: `import { ref } from 'vue'

// 全局注册组件
// app.component('MyButton', {
//   template: '<button @click="handleClick">{{ label }}</button>',
//   props: ['label'],
//   emits: ['click'],
//   setup(props, { emit }) {
//     const handleClick = () => emit('click')
//     return { handleClick }
//   }
// })

// 局部注册组件
const MyComponent = {
  template: '<div>这是一个局部组件</div>'
}

// 使用 ref 管理组件状态
const currentComponent = ref('MyComponent')

function switchComponent() {
  currentComponent.value = currentComponent.value === 'MyComponent' 
    ? 'AnotherComponent' 
    : 'MyComponent'
}`
    },
    'components-props': {
      overview: 'Props 传递数据',
      overviewText: 'Props 是组件之间传递数据的主要方式，父组件通过 props 向子组件传递数据，子组件通过定义 props 来接收数据。',
      features: [
        { icon: '📤', title: '单向数据流', desc: 'Props 遵循单向数据流原则，父组件的数据变化会传递给子组件' },
        { icon: '✅', title: '类型验证', desc: '可以为 props 指定类型，Vue 会在开发时进行类型检查' },
        { icon: '🔄', title: '默认值', desc: '可以为 props 设置默认值，当父组件没有传递时使用默认值' },
        { icon: '🛡️', title: '必填验证', desc: '可以将 props 标记为必填，确保组件接收到必要的数据' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '传递配置选项给子组件' },
        { icon: '🔧', text: '共享数据给多个子组件' },
        { icon: '🚀', text: '创建可配置的组件' },
        { icon: '🌐', text: '实现组件通信' }
      ],
      codeExample: `import { ref } from 'vue'

// 父组件数据
const parentMessage = ref('来自父组件的消息')
const userData = ref({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com'
})

// 动态 props
const dynamicProps = ref({
  title: '动态标题',
  content: '动态内容',
  showButton: true
})

// 更新 props
function updateProps() {
  parentMessage.value = '更新后的消息'
  userData.value.name = '李四'
  dynamicProps.value.title = '新的标题'
}`
    },
    'components-events': {
      overview: '组件事件',
      overviewText: '组件可以通过触发自定义事件来与父组件通信，这是子组件向父组件传递信息的主要方式。',
      features: [
        { icon: '📢', title: '自定义事件', desc: '使用 defineEmits() 定义组件可以触发的事件' },
        { icon: '📡', title: '事件传递', desc: '子组件通过 emit() 函数触发事件并传递数据' },
        { icon: '📝', title: '事件命名', desc: '推荐使用小写加短横线的命名方式（kebab-case）' },
        { icon: '🎯', title: '事件参数', desc: '可以在触发事件时传递任意数量的参数' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '子组件通知父组件状态变化' },
        { icon: '🔧', text: '实现组件间的数据同步' },
        { icon: '🚀', text: '创建可交互的组件' },
        { icon: '🌐', text: '实现事件驱动的架构' }
      ],
      codeExample: `import { ref } from 'vue'

// 子组件状态
const count = ref(0)
const inputValue = ref('')

// 定义可以触发的事件
// const emit = defineEmits(['increment', 'decrement', 'update'])

// 触发增加事件
function increment() {
  count.value++
  // emit('increment', count.value)
}

// 触发减少事件
function decrement() {
  count.value--
  // emit('decrement', count.value)
}

// 触发更新事件
function handleInput() {
  // emit('update', inputValue.value)
}`
    },
    'components-v-model': {
      overview: '组件 v-model',
      overviewText: 'v-model 可以在组件上使用，实现组件的双向数据绑定，使得父组件和子组件之间的数据同步变得简单。',
      features: [
        { icon: '🔄', title: '双向绑定', desc: '组件上的 v-model 实现父组件和子组件之间的双向数据绑定' },
        { icon: '📡', title: 'modelValue', desc: '默认使用 modelValue prop 和 update:modelValue 事件' },
        { icon: '📝', title: '自定义名称', desc: '可以通过参数自定义 v-model 的名称' },
        { icon: '⚡', title: '多个 v-model', desc: '组件可以同时支持多个 v-model 绑定' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '创建自定义输入组件' },
        { icon: '🔧', text: '实现复杂的表单控件' },
        { icon: '🚀', text: '构建可复用的组件库' },
        { icon: '🌐', text: '实现组件状态同步' }
      ],
      codeExample: `import { ref } from 'vue'

// 父组件数据
const searchText = ref('')
const isVisible = ref(true)
const settings = ref({
  theme: 'light',
  language: 'zh-CN'
})

// 自定义组件示例（注释）
// 子组件需要：
// props: ['modelValue']
// emits: ['update:modelValue']
// 或者自定义名称：
// props: ['title']
// emits: ['update:title']

// 更新数据
function updateSearch(text) {
  searchText.value = text
}

function toggleVisibility() {
  isVisible.value = !isVisible.value
}`
    },
    'components-attrs': {
      overview: '透传 Attributes',
      overviewText: '组件可以「透传」那些没有被定义为 props 的 attribute，这些 attribute 会被添加到组件的根元素上。',
      features: [
        { icon: '📤', title: '自动透传', desc: '非 prop 的 attribute 会自动透传到组件的根元素' },
        { icon: '🎨', title: 'class 合并', desc: 'class 和 style 会智能合并，而不是覆盖' },
        { icon: '🔧', title: 'inheritAttrs', desc: '可以通过 inheritAttrs 选项控制是否透传 attribute' },
        { icon: '📋', title: 'useAttrs', desc: '使用 useAttrs() 在组件内部访问透传的 attribute' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '创建包装组件' },
        { icon: '🔧', text: '实现高阶组件' },
        { icon: '🚀', text: '构建基础组件库' },
        { icon: '🌐', text: '处理动态属性' }
      ],
      codeExample: `import { ref } from 'vue'

// 基础组件示例数据
const buttonText = ref('点击我')
const isDisabled = ref(false)
const buttonClass = ref('btn-primary')

// 透传 attributes 示例
const attrs = {
  class: 'custom-class',
  id: 'my-button',
  'data-test': 'button-test'
}

// 动态 attributes
const dynamicAttrs = ref({
  type: 'submit',
  disabled: false,
  title: '提交表单'
})

function toggleDisabled() {
  isDisabled.value = !isDisabled.value
  dynamicAttrs.value.disabled = isDisabled.value
}`
    },
    'components-slots': {
      overview: '插槽 Slots',
      overviewText: '插槽允许你在组件模板中预留内容占位符，使得组件更加灵活和可复用，父组件可以传入自定义内容。',
      features: [
        { icon: '📋', title: '默认插槽', desc: '使用 <slot> 定义默认内容占位符' },
        { icon: '📝', title: '具名插槽', desc: '使用 name 属性创建具名插槽，实现多个内容区域' },
        { icon: '📡', title: '作用域插槽', desc: '插槽可以访问子组件的数据，实现数据传递' },
        { icon: '⚡', title: '后备内容', desc: '插槽可以定义默认内容，当没有提供内容时显示' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '创建布局组件' },
        { icon: '🔧', text: '实现卡片组件' },
        { icon: '🚀', text: '构建模态框组件' },
        { icon: '🌐', text: '创建可定制的列表组件' }
      ],
      codeExample: `import { ref } from 'vue'

// 插槽数据示例
const cardTitle = ref('卡片标题')
const cardContent = ref('这是卡片的内容部分')
const cardFooter = ref('卡片底部')

// 作用域插槽数据
const userData = ref({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com'
})

const itemList = ref([
  { id: 1, name: '项目1', status: 'active' },
  { id: 2, name: '项目2', status: 'inactive' },
  { id: 3, name: '项目3', status: 'pending' }
])

// 动态插槽名
const currentSlot = ref('header')

function changeSlot() {
  currentSlot.value = currentSlot.value === 'header' ? 'footer' : 'header'
}`
    },
    'components-provide-inject': {
      overview: '依赖注入',
      overviewText: 'provide 和 inject 允许祖先组件作为其所有后代组件的依赖提供者，无论组件层次结构有多深。',
      features: [
        { icon: '📤', title: 'provide 函数', desc: '祖先组件使用 provide() 提供数据给所有后代组件' },
        { icon: '📥', title: 'inject 函数', desc: '后代组件使用 inject() 注入祖先组件提供的数据' },
        { icon: '🔗', title: '响应式', desc: 'provide 的数据可以是响应式的，变化会传递给所有注入者' },
        { icon: '🎯', title: '符号键', desc: '使用 Symbol 作为键可以避免命名冲突' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '创建主题系统' },
        { icon: '🔧', text: '实现国际化' },
        { icon: '🚀', text: '共享应用配置' },
        { icon: '🌐', text: '构建插件系统' }
      ],
      codeExample: `import { ref, provide, inject } from 'vue'

// 主题配置
const theme = ref('light')
const locale = ref('zh-CN')

// 应用配置
const appConfig = ref({
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  maxRetries: 3
})

// 提供数据（在祖先组件中）
// provide('theme', theme)
// provide('locale', locale)
// provide('appConfig', appConfig)

// 注入数据（在后代组件中）
// const injectedTheme = inject('theme', 'light') // 默认值
// const injectedLocale = inject('locale')
// const injectedConfig = inject('appConfig')

// 切换主题
function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

// 切换语言
function changeLocale(newLocale) {
  locale.value = newLocale
}`
    },
    'components-async': {
      overview: '异步组件',
      overviewText: '异步组件允许你延迟加载组件代码，只在需要时才加载，这对于优化应用性能和减少初始包大小非常有用。',
      features: [
        { icon: '⏳', title: '延迟加载', desc: '使用 defineAsyncComponent 定义异步组件，按需加载' },
        { icon: '🔄', title: '加载状态', desc: '可以显示加载中的状态，提升用户体验' },
        { icon: '⚠️', title: '错误处理', desc: '可以处理加载失败的情况，显示错误信息' },
        { icon: '🚀', title: 'Suspense 组件', desc: '使用 Suspense 组件管理异步组件的加载状态' }
      ],
      scenarios: [
        { icon: '🏃‍♂️', text: '大型组件的按需加载' },
        { icon: '🔧', text: '路由级别的代码分割' },
        { icon: '🚀', text: '优化初始加载性能' },
        { icon: '🌐', text: '实现懒加载功能' }
      ],
      codeExample: `import { ref, defineAsyncComponent } from 'vue'

// 简单的异步组件
const AsyncComponent = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)

// 带选项的异步组件
const AsyncComponentWithOptions = defineAsyncComponent({
  loader: () => import('./components/HeavyComponent.vue'),
  loadingComponent: () => import('./components/Loading.vue'),
  errorComponent: () => import('./components/Error.vue'),
  delay: 200,
  timeout: 3000
})

// 组件切换示例
const currentView = ref('Home')

const views = {
  Home: defineAsyncComponent(() => import('./views/Home.vue')),
  About: defineAsyncComponent(() => import('./views/About.vue')),
  Contact: defineAsyncComponent(() => import('./views/Contact.vue'))
}

function changeView(view) {
  currentView.value = view
}`
    }
  }
  
  return pageData[props.slug] || pageData['introduction']
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
                  <div class="feature-desc">{{ feature.desc }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="usage-scenarios">
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