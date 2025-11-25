export const guideRegistry = [
  {
    slug: 'introduction',
    title: '简介',
    intro: 'Vue 是用于构建用户界面的渐进式 JavaScript 框架，基于标准 HTML/CSS/JS，提供声明式、组件化的编程模型，并以响应式系统驱动视图更新。',
    steps: [
      '声明式渲染：用模板描述状态与 DOM 的关系',
      '响应性：自动跟踪状态变化并更新视图',
      '单文件组件：SFC 封装逻辑/模板/样式',
      'API 风格：选项式 API 与 组合式 API',
      '渐进式框架：可逐步集成、覆盖多种使用方式',
      '使用方式：无需构建、Web Components、SPA、SSR、SSG',
      '预备知识：熟悉 HTML/CSS/JavaScript 基础'
    ],
    details: [
      'Vue 基于模板语法扩展标准 HTML，声明式描述最终输出与应用状态的关系。',
      '内置响应式系统会跟踪依赖并在数据变化时高效更新 DOM。',
      '单文件组件（*.vue）将组件逻辑、模板与样式统一在同一文件中，适合工程化项目。',
      '选项式 API 通过 data/methods/mounted 等组织代码；组合式 API 通过 setup 与函数组合实现更好的逻辑复用与类型支持。',
      '作为渐进式框架，Vue 可以按需引入：从简单的脚本标签到完整的工程化生态（路由、状态管理、构建工具等）。',
      '根据场景选择使用方式：渐进增强静态 HTML、作为 Web Components 嵌入、开发 SPA、全栈/SSR、Jamstack/SSG 等。',
      '入门建议具备 HTML/CSS/JavaScript 基础知识；对其他框架的经验有帮助但非必需。'
    ],
    code: [
      { title: 'Options API 基本示例', content: 'import { createApp } from \'vue\'\ncreateApp({\n  data(){ return { count:0 } }\n}).mount(\'#app\')' },
      { title: 'Composition API 基本示例', content: 'import { createApp, ref } from \'vue\'\ncreateApp({\n  setup(){ return { count: ref(0) } }\n}).mount(\'#app\')' },
      { title: '模板', content: '<div id=\'app\'>\n  <button @click=\'count++\'>Count is: {{ count }}</button>\n</div>' },
    ],
    replHash: 'eNp9kUFLwzAUx7/KM5cqzBXR0+gGKgP1oKKCl1xG99ZlpklIXuag9Lv7krK5w9it7//7v/SXthP3zo23EcVEVKH2yhEEpOhm0qjWWU/QgccV9LDytoWCq4U00tTWBII2NDBN/LJ4Qq0tfFuvlxfFlTRVORzHB/FA2Dq9IOQJoFrfzLouL/d9VfKUU2VcJNhet3aJeioFcymgZFiVR/tiJCjw61eqGW+CNWzepX0pats6pdG/OVKsJ8UEMklswXa/LzkjH3G0z+s11j8n8k3YpUyKd48B/RalODBa+AZpwPPPV9zx8wGyfdTcPgM/MFgdk+NQe4hmydpHvWz7nL+/Ms1XmO8ITdhfKommZp/7UvA/eTxz9X/d2/Fd3pOmF/0fEx+nNQ==',
  },
  {
    slug: 'essentials-lifecycle',
    title: '生命周期',
    intro: '组件在创建、挂载、更新、卸载阶段的钩子。',
    steps: ['onMounted/onUnmounted', 'onUpdated', 'setup 生命周期与副作用'],
    details: [
      'onMounted 在组件首次挂载后调用，常用于 DOM 相关初始化。',
      'onUnmounted 在组件卸载时调用，清理副作用和事件。',
      '避免在生命周期钩子中产生未清理的资源泄漏。',
    ],
    code: [
      { title: '基本示例', content: "import { ref, onMounted, onUnmounted } from 'vue'\nconst c = ref(0)\nonMounted(()=>{ const t = setInterval(()=>c.value++,1000) })\nonUnmounted(()=>{ /* 清理 */ })" },
    ],
    replHash: '',
  },
  {
    slug: 'quick-start',
    title: '快速上手',
    intro: '通过构建工具或无需构建两种方式开始使用 Vue。',
    steps: ['无需构建：直接在 HTML 中引入', '构建工具：使用 Vite/Create-Vue'],
    details: [
      'CDN 方式适合快速试验或渐进增强。',
      '工程化推荐使用 Vite 与 create-vue 脚手架。',
      '多种使用方式：SPA、SSR、SSG、Web Components 等。',
    ],
    code: [
      { title: '无需构建示例', content: '<script src=\"https://unpkg.com/vue@3\"></script>\n<div id=\"app\">{{ msg }}</div>\n<script>\nVue.createApp({ data(){ return { msg:\'Hi\' } } }).mount(\'#app\')\n</script>' },
      { title: '构建工具示例', content: 'import { createApp } from \'vue\'\nimport App from \'./App.vue\'\ncreateApp(App).mount(\'#app\')' },
    ],
    replHash: '',
  },
  {
    slug: 'essentials-template-syntax',
    title: '模板语法',
    intro: 'Vue 使用基于 HTML 的模板，支持插值、指令、属性绑定与表达式。',
    steps: ['文本插值 {{ }}', '原始 HTML：v-html（注意 XSS）', '属性绑定：v-bind / :', '布尔属性与同名简写', '对象批量绑定：v-bind="obj"', '模板内表达式'],
    details: [
      '模板是合法 HTML，经过编译优化为高效 JavaScript。',
      '插值使用 Mustache 语法；值变化时自动刷新 DOM。',
      'v-html 会插入原始 HTML，需谨慎防范 XSS 风险。',
      '属性绑定使用 v-bind 或 : 简写；支持同名简写 (3.4+)。',
      '布尔型属性基于真值/空字符串控制存在与否。',
      '可用 v-bind="object" 批量绑定多个属性。',
      '模板支持 JavaScript 表达式与模板字符串。',
    ],
    code: [
      { title: '文本插值', content: '<span>Message: {{ msg }}</span>' },
      { title: '原始 HTML', content: '<p v-html=\"rawHtml\"></p>' },
      { title: '属性绑定', content: '<div :id=\"dynamicId\"></div>' },
      { title: '布尔属性', content: '<button :disabled=\"isButtonDisabled\">Button</button>' },
      { title: '批量绑定', content: '<div v-bind=\"objectOfAttrs\"></div>' },
      { title: '表达式示例', content: '{{ number + 1 }}\n{{ ok ? \'YES\' : \'NO\' }}\n<div :id=\"`list-${id}`\"></div>' },
    ],
    replHash: '',
  },
  {
    slug: 'essentials-reactivity-fundamentals',
    title: '响应式基础',
    intro: '使用 ref / reactive 管理状态，watch 观察变化。',
    steps: ['ref 定义基本类型', 'reactive 定义对象', 'ref 在模板中自动解包', 'watch/ watchEffect 监听变化'],
    details: [
      'ref 适用于基本类型，访问时使用 .value；模板中自动解包。',
      'reactive 适用于对象与集合，返回深度响应式代理。',
      '避免将 reactive 解构丢失响应性；使用 toRefs/toRef 保持响应性。',
      'watchEffect 基于依赖自动收集；watch 精确监听指定源。',
    ],
    code: [
      { title: 'ref/reactive', content: 'const count = ref(0)\nconst state = reactive({ ok: true })' },
      { title: 'watch', content: 'watch(count, (n,o)=>console.log(n))' },
      { title: 'toRefs', content: 'const user = reactive({ name: \"Ada\", age: 18 })\nconst { name, age } = toRefs(user)' },
    ],
    replHash: '',
  },
  {
    slug: 'essentials-computed',
    title: '计算属性',
    intro: '使用 computed 派生值，避免重复计算。',
    steps: ['定义 computed', '依赖跟踪与缓存', 'computed Setter'],
    details: [
      '计算属性基于响应式依赖缓存，只有依赖变化才重新求值。',
      '应避免在 getter 中产生副作用。',
      '可选提供 setter 以实现双向派生。',
    ],
    code: [
      { title: '基本示例', content: 'const count = ref(1)\nconst double = computed(()=>count.value*2)' },
      { title: 'Setter 示例', content: 'const firstName = ref(\'Ada\')\nconst lastName = ref(\'Lovelace\')\nconst fullName = computed({\n  get: ()=> firstName.value + \" \" + lastName.value,\n  set: (v)=> { const [f,l] = v.split(\" \"); firstName.value=f; lastName.value=l }\n})' },
    ],
    replHash: '',
  },
  {
    slug: 'essentials-class-and-style',
    title: '类与样式绑定',
    intro: '使用 :class 与 :style 动态控制样式。',
    steps: [':class 对象/数组语法', ':style 对象语法', '计算样式'],
    details: [
      'class 支持对象与数组语法，便于按条件切换样式。',
      'style 支持对象语法，属性名可用驼峰或连字符。',
      '常与计算属性组合生成复杂样式。',
    ],
    code: [
      { title: 'class 对象语法', content: '<div :class=\"{ active:isActive, error:hasError }\"></div>' },
      { title: 'class 数组语法', content: '<div :class=\"[ baseClass, isActive ? \'active\' : \'\' ]\"></div>' },
      { title: 'style', content: '<div :style=\"{ color, fontSize:\'14px\' }\"></div>' },
    ],
    replHash: '',
  },
  {
    slug: 'essentials-conditional',
    title: '条件渲染',
    intro: '使用 v-if / v-show 控制元素显示。',
    steps: ['v-if / v-else-if / v-else', 'v-show 与性能取舍', 'template v-if 包裹多个元素'],
    details: [
      'v-if 会在条件切换时销毁/重建元素。',
      'v-show 通过切换 display 控制显示，首次渲染成本低。',
      '使用 template v-if 包裹多个兄弟元素。',
    ],
    code: [
      { title: '基本', content: '<p v-if=\"ok\">OK</p><p v-else>NO</p>' },
      { title: 'v-show', content: '<p v-show=\"visible\">Visible</p>' },
      { title: 'template v-if', content: '<template v-if=\"ok\"><p>A</p><p>B</p></template>' },
    ],
    replHash: '',
  },
  {
    slug: 'essentials-list',
    title: '列表渲染',
    intro: '使用 v-for 渲染列表，提供 key 提升稳定性。',
    steps: ['v-for 语法', 'key 的作用与唯一性', '遍历对象与范围'],
    details: [
      '为每个循环项提供稳定且唯一的 :key。',
      '遍历对象时可获取 value、key 与 index。',
      '可使用数字渲染指定次数的元素。',
    ],
    code: [
      { title: '数组', content: '<li v-for=\"item in items\" :key=\"item.id\">{{ item.text }}</li>' },
      { title: '对象', content: '<div v-for=\"(val, key, i) in obj\" :key=\"key\">{{ i }}-{{ key }}: {{ val }}</div>' },
      { title: '范围', content: '<div v-for=\"n in 5\" :key=\"n\">{{ n }}</div>' },
    ],
    replHash: '',
  },
  {
    slug: 'essentials-event-handling',
    title: '事件处理',
    intro: '使用 v-on 监听事件，传参与修饰符。',
    steps: ['@ 作为 v-on 简写', '事件修饰符 .stop/.prevent/.self/.once', '按键修饰符'],
    details: [
      '事件处理可用方法、内联语句或传参。',
      '修饰符用于简化常见模式，如阻止冒泡与默认行为。',
      '键盘事件支持按键别名与组合修饰符。',
    ],
    code: [
      { title: '基本', content: '<button @click=\"onClick\">点我</button>' },
      { title: '修饰符', content: '<div @click.stop=\"handler\"></div>\n<form @submit.prevent=\"onSubmit\"></form>' },
      { title: '按键', content: '<input @keyup.enter=\"onEnter\" />' },
    ],
    replHash: '',
  },
  {
    slug: 'essentials-forms',
    title: '表单输入绑定',
    intro: '使用 v-model 在表单与状态间绑定。',
    steps: ['v-model 文本/复选/单选', '修饰符 .lazy/.number/.trim', '选择框与多选'],
    details: [
      'v-model 在 input/textarea/select 上双向绑定。',
      '支持多选复选框数组绑定与单选按钮单值绑定。',
      '修饰符用于调整更新时机与类型转换。',
    ],
    code: [
      { title: '模板', content: '<input v-model=\"text\" />' },
      { title: '复选/单选', content: '<input type=\"checkbox\" v-model=\"checked\" />\n<input type=\"radio\" value=\"A\" v-model=\"picked\" />' },
      { title: '修饰符', content: '<input v-model.lazy=\"text\" />\n<input v-model.number=\"age\" />\n<input v-model.trim=\"name\" />' },
      { title: '脚本', content: 'const text = ref(\'\')\nconst checked = ref(false)\nconst picked = ref(\'A\')\nconst age = ref(18)\nconst name = ref(\'\')' },
    ],
    replHash: '',
  },
  {
    slug: 'essentials-component-basics',
    title: '组件基础',
    intro: '定义组件、props 传参与 emit 事件。',
    steps: ['父传子 props', '子向父 emit', '单向数据流'],
    details: [
      '组件是可复用的 UI 单元，支持组合与嵌套。',
      'props 实现父向子数据传递，类型校验提升可维护性。',
      '子组件通过 emit 派发事件与父组件通信。',
    ],
    code: [
      { title: '子组件', content: '<script setup>\nconst props = defineProps({ msg:String })\n</script>\n<template>{{ props.msg }}</template>' },
      { title: '父使用', content: '<Child msg=\'Hello\' @close=\"onClose\" />' },
    ],
    replHash: '',
  },
  // 深入组件
  { slug: 'components-registration', title: '注册', intro: '组件的局部与全局注册方式。', steps: ['局部注册', '全局注册', '命名约定'], details: [
    '局部注册通过在父组件中导入并使用子组件，作用域更明确。',
    '全局注册适用于通用基础组件，但需避免滥用导致命名冲突。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport LocalButton from "./LocalButton.vue"\n</script>\n<template>\n  <div>\n    <LocalButton />\n  </div>\n</template>' },
    { title: 'LocalButton.vue', content: '<template>\n  <button>局部注册按钮</button>\n</template>' },
  ], replHash: '' },
  { slug: 'components-props', title: 'Props', intro: '通过 props 从父到子传递数据。', steps: ['类型与默认值', '单向数据流', '校验'], details: [
    '为 props 提供类型与默认值，增强可维护性与自文档化。',
    '遵循单向数据流：父传子，子不直接修改父的值。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport Card from "./Card.vue"\n</script>\n<template>\n  <Card title="标题" :count="1" />\n</template>' },
    { title: 'Card.vue', content: '<script setup>\nconst props = defineProps({ title: String, count: { type: Number, default: 0 } })\n</script>\n<template>\n  <div>标题：{{ props.title }} / 计数：{{ props.count }}</div>\n</template>' },
  ], replHash: '' },
  { slug: 'components-events', title: '事件', intro: '使用自定义事件在子与父之间通信。', steps: ['defineEmits', '事件名约定', '事件负载'], details: [
    '事件采用小写短横线约定，例如 close、submit-success。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport Child from "./Child.vue"\nconst log = []\nfunction onClose(payload){ log.push(payload) }\n</script>\n<template>\n  <Child @close="onClose" />\n  <pre>{{ log }}</pre>\n</template>' },
    { title: 'Child.vue', content: '<script setup>\nconst emit = defineEmits(["close"])\nfunction close(){ emit("close", { ts: Date.now() }) }\n</script>\n<template>\n  <button @click="close">派发 close</button>\n</template>' },
  ], replHash: '' },
  { slug: 'components-v-model', title: '组件 v-model', intro: '在组件上实现双向绑定的约定。', steps: ['modelValue/ update:modelValue', '修饰符传递', '多 v-model'], details: [
    '组件 v-model 约定：prop 为 modelValue，事件为 update:modelValue。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport Input from "./Input.vue"\nimport { ref } from "vue"\nconst text = ref("")\n</script>\n<template>\n  <Input v-model="text" />\n  <p>父：{{ text }}</p>\n</template>' },
    { title: 'Input.vue', content: '<script setup>\nconst props = defineProps({ modelValue: String })\nconst emit = defineEmits(["update:modelValue"])\nfunction onInput(e){ emit("update:modelValue", e.target.value) }\n</script>\n<template>\n  <input :value="props.modelValue" @input="onInput" />\n</template>' },
  ], replHash: '' },
  { slug: 'components-attrs', title: '透传 Attributes', intro: '未声明的 attribute 与 v-on 监听器会自动透传到根元素。', steps: ['单根元素自动透传', '禁用继承 inheritAttrs:false', '显式绑定 $attrs 或 useAttrs()'], details: [
    'class/style/id 等 attribute 若未声明为 props，会自动并入根元素；class/style 将与根元素上的值合并。',
    'v-on 监听器也会继承到根元素；若根元素自身也绑定监听器，两者都会被触发。',
    'inheritAttrs:false 禁用自动透传，适合将属性应用到非根元素；通过 v-bind="$attrs" 显式绑定。',
    '多根节点组件不会自动透传，需显式绑定 $attrs，否则会有运行时警告。',
  ], code: [
    { title: '禁用继承与显式透传', content: '<script setup>\nimport { useAttrs } from \"vue\"\ndefineOptions({ inheritAttrs:false })\nconst attrs = useAttrs()\n</script>\n<template>\n  <div class=\"btn-wrapper\">\n    <button class=\"btn\" v-bind=\"attrs\">Click</button>\n  </div>\n</template>' },
    { title: '多根组件显式绑定', content: '<template>\n  <header>...</header>\n  <main v-bind=\"$attrs\">...</main>\n  <footer>...</footer>\n</template>' },
  ], replHash: '' },
  { slug: 'components-slots', title: '插槽', intro: '向子组件传递模板内容。', steps: ['默认插槽', '具名插槽', '作用域插槽'], details: [
    '具名插槽通过 #name 或 v-slot:name 使用。作用域插槽可由子组件提供数据给插槽内容。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport Layout from "./Layout.vue"\n</script>\n<template>\n  <Layout>\n    <template #header>头部</template>\n    <template #default="{ n }">内容：{{ n }}</template>\n    <template #footer>底部</template>\n  </Layout>\n</template>' },
    { title: 'Layout.vue', content: '<script setup>\n</script>\n<template>\n  <header><slot name="header">默认头部</slot></header>\n  <main><slot :n="1">默认内容</slot></main>\n  <footer><slot name="footer">默认底部</slot></footer>\n</template>' },
  ], replHash: '' },
  { slug: 'components-provide-inject', title: '依赖注入', intro: '跨层级共享依赖与数据。', steps: ['provide/inject 基本用法', '默认值', '响应式注意事项'], details: [
    '通过 provide 提供值，在后代组件中使用 inject 获取。可提供响应式引用以保持联动。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport { ref, provide } from "vue"\nimport Child from "./Child.vue"\nconst user = ref("Ada")\nprovide("user", user)\n</script>\n<template>\n  <Child />\n</template>' },
    { title: 'Child.vue', content: '<script setup>\nimport { inject } from "vue"\nconst user = inject("user")\n</script>\n<template>\n  <div>注入的值：{{ user }}</div>\n</template>' },
  ], replHash: '' },
  { slug: 'components-async', title: '异步组件', intro: '按需异步加载组件以优化性能。', steps: ['defineAsyncComponent', '加载状态与错误', '超时与重试'], details: [
    '使用 defineAsyncComponent 包装子组件，结合 Suspense 展示加载与占位内容。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport { defineAsyncComponent, ref } from "vue"\nconst show = ref(false)\nconst AsyncChild = defineAsyncComponent(() => import("./AsyncChild.vue"))\n</script>\n<template>\n  <button @click="show = !show">toggle</button>\n  <AsyncChild v-if="show" />\n</template>' },
    { title: 'AsyncChild.vue', content: '<template>\n  <div>异步加载的子组件</div>\n</template>' },
  ], replHash: '' },

  // 逻辑复用
  { slug: 'reusability-composables', title: '组合式函数', intro: '用可复用的逻辑函数组织代码。', steps: ['封装状态与副作用', '参数化与返回值', '使用约定'], details: [
    '通过封装 ref/reactive 状态与副作用，形成可复用逻辑块。',
    '组合式函数接受参数以配置行为，返回 state 与方法。',
    '命名约定使用 use 前缀，避免在组件外依赖组件实例。',
    '在 setup 中调用组合式函数以使用生命周期与响应式能力。',
    '使用 watch/watchEffect 管理副作用与清理。',
  ], code: [
    { title: 'useCounter', content: "import { ref } from 'vue'\nexport function useCounter(init = 0){\n  const count = ref(init)\n  const inc = () => count.value++\n  const dec = () => count.value--\n  return { count, inc, dec }\n}" },
    { title: 'useFetch', content: "import { ref, onMounted } from 'vue'\nexport function useFetch(url){\n  const data = ref(null)\n  const loading = ref(false)\n  const error = ref(null)\n  onMounted(async ()=>{\n    loading.value = true\n    try{\n      const r = await fetch(url)\n      data.value = await r.json()\n    }catch(e){\n      error.value = e\n    }finally{\n      loading.value = false\n    }\n  })\n  return { data, loading, error }\n}" },
  ], replHash: '' },
  { slug: 'reusability-custom-directives', title: '自定义指令', intro: '为原生元素编写可复用的行为。', steps: ['指令生命周期', '指令参数与修饰符', '类型提示'], details: [
    '指令用于对原生元素应用复用的行为，例如聚焦。',
    '指令钩子包含 created、mounted、updated、unmounted 等。',
    '通过 binding.value/binding.arg/binding.modifiers 读取参数与修饰符。',
    '在应用级通过 app.directive 注册，或在组件局部注册。',
    '使用 TypeScript 可通过 Directive 提供类型提示。',
  ], code: [
    { title: '全局指令 v-focus', content: "import { createApp } from 'vue'\nconst app = createApp({})\napp.directive('focus', {\n  mounted(el){ el.focus() }\n})" },
    { title: '带参数与修饰符', content: "export const vPermission = {\n  mounted(el, binding){\n    const role = binding.arg\n    const exact = !!binding.modifiers.exact\n    const allowed = binding.value\n    if(exact ? !allowed.includes(role) : !allowed.some(r => r===role)){\n      el.style.display = 'none'\n    }\n  }\n}" },
  ], replHash: '' },
  { slug: 'reusability-plugins', title: '插件', intro: '通过插件扩展全局功能。', steps: ['app.use', '全局资源注入', '封装与发布'], details: [
    '插件通过 app.use 安装，执行 install(app, options)。',
    '可注册全局组件、指令或注入 app.config.globalProperties。',
    '应保证幂等，重复安装不会产生副作用。',
    '支持通过 options 配置行为与内容。',
  ], code: [
    { title: '简单插件', content: "export default {\n  install(app, options){\n    app.config.globalProperties.$say = msg => console.log(msg)\n  }\n}" },
    { title: '使用插件', content: "import { createApp } from 'vue'\nimport SayPlugin from './say'\nconst app = createApp({})\napp.use(SayPlugin)" },
    { title: '提供依赖', content: "export function createI18n(){\n  return { t: (k) => k }\n}\nexport const I18nPlugin = {\n  install(app){\n    const i18n = createI18n()\n    app.provide('i18n', i18n)\n  }\n}" },
  ], replHash: '' },

  // 内置组件
  { slug: 'built-ins-transition', title: 'Transition', intro: '为元素/组件添加进入与离开过渡。', steps: ['基本用法', 'CSS 过渡与动画', '钩子'], details: [
    '通过过渡名生成类名：xxx-enter-from/active/to 与 xxx-leave-from/active/to。',
    '支持 CSS 过渡与动画，或使用 JS 钩子精细控制。',
    '结合 v-if/v-show 切换显示，或在路由/动态组件上使用。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport { ref } from "vue"\nconst show = ref(true)\n</script>\n<template>\n  <button @click="show = !show">toggle</button>\n  <transition name="fade">\n    <p v-if="show">Hello</p>\n  </transition>\n</template>\n<style scoped>\n.fade-enter-active,.fade-leave-active{ transition: opacity .2s ease }\n.fade-enter-from,.fade-leave-to{ opacity: 0 }\n</style>' },
    { title: 'JS 钩子', content: '<template>\n  <transition @before-enter="onBefore" @after-enter="onAfter" name="fade">\n    <p v-if="show">Hello</p>\n  </transition>\n</template>\n<script setup>\nimport { ref } from "vue"\nconst show = ref(true)\nfunction onBefore(el){}\nfunction onAfter(el){}\n</script>\n<style scoped>\n.fade-enter-active,.fade-leave-active{ transition: opacity .2s ease }\n.fade-enter-from,.fade-leave-to{ opacity: 0 }\n</style>' },
  ], replHash: '' },
  { slug: 'built-ins-transition-group', title: 'TransitionGroup', intro: '为列表的元素提供过渡效果。', steps: ['列表过渡', '移动过渡', '性能考虑'], details: [
    '使用 <transition-group> 包裹列表元素，实现进入/离开的集合动画。',
    '支持移动过渡，元素顺序变化时应用 transform。',
    '每个子元素必须有唯一 key，避免渲染错误。',
    '大型列表注意性能与 DOM 重排的影响。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport { ref } from "vue"\nconst items = ref([1,2,3])\nfunction add(){ items.value.push(items.value.length + 1) }\nfunction remove(){ items.value.pop() }\n</script>\n<template>\n  <div><button @click="add">add</button> <button @click="remove">remove</button></div>\n  <transition-group name="list" tag="ul">\n    <li v-for="i in items" :key="i">Item {{ i }}</li>\n  </transition-group>\n</template>\n<style scoped>\nul{ list-style:none; padding:0; }\n.list-enter-active,.list-leave-active{ transition: all .2s ease }\n.list-enter-from,.list-leave-to{ opacity:0; transform: translateY(6px) }\n</style>' },
  ], replHash: '' },
  { slug: 'built-ins-keep-alive', title: 'KeepAlive', intro: '缓存动态组件以保存状态。', steps: ['include/exclude', 'max', '生命周期与缓存'], details: [
    '使用 <keep-alive> 包裹动态组件可在切换间保留内部状态。',
    'include/exclude 控制缓存的组件名称集合。',
    'max 限制缓存数量，超出时按 LRU 策略淘汰。',
    '在被缓存组件中使用 onActivated/onDeactivated 响应激活与停用。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport { ref } from "vue"\nimport A from "./A.vue"\nimport B from "./B.vue"\nconst view = ref("A")\nconst map = { A, B }\n</script>\n<template>\n  <div><button @click="view = \"A\"">A</button> <button @click="view = \"B\"">B</button></div>\n  <keep-alive><component :is="map[view]" /></keep-alive>\n</template>' },
    { title: 'A.vue', content: '<template>\n  <div>组件 A</div>\n</template>' },
    { title: 'B.vue', content: '<template>\n  <div>组件 B</div>\n</template>' },
    { title: 'include/max 与激活钩子', content: '<template>\n  <keep-alive :include="[\'A\']" :max="5">\n    <component :is="map[view]" />\n  </keep-alive>\n</template>\n<script setup>\nimport { onActivated, onDeactivated } from "vue"\nonActivated(()=>{})\nonDeactivated(()=>{})\n</script>' },
  ], replHash: '' },
  { slug: 'built-ins-teleport', title: 'Teleport', intro: '将内容传送到指定的 DOM 位置。', steps: ['to 目标', '多个 Teleport', 'SSR 注意事项'], details: [
    '将内容传送到 body 或其他容器，常用于对话框或悬浮层。',
    '通过 to 指向 CSS 选择器或 DOM 节点。',
    '可创建多个 Teleport，按照层次进行渲染。',
    'SSR 下需确保目标容器存在并匹配。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport { ref } from "vue"\nconst open = ref(false)\n</script>\n<template>\n  <button @click="open = true">打开</button>\n  <teleport to="body">\n    <div v-if="open" style="position:fixed;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center" @click.self="open=false">\n      <div style="background:#fff;padding:12px;border-radius:10px">传送到 body 的对话框</div>\n    </div>\n  </teleport>\n</template>' },
  ], replHash: '' },
  { slug: 'built-ins-suspense', title: 'Suspense', intro: '协调异步依赖并显示占位。', steps: ['默认插槽与 fallback', '异步边界', '组合使用'], details: [
    '在默认插槽加载未完成时展示 fallback，占位友好。',
    '为异步组件或 async setup 提供加载边界与占位内容。',
    '可嵌套使用多个 Suspense 实现分层加载。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport AsyncFoo from "./AsyncFoo.vue"\n</script>\n<template>\n  <Suspense>\n    <template #default>\n      <AsyncFoo />\n    </template>\n    <template #fallback>加载中...</template>\n  </Suspense>\n</template>' },
    { title: 'AsyncFoo.vue', content: '<script setup>\nimport { ref, onMounted } from "vue"\nconst ready = ref(false)\nonMounted(async () => { await new Promise(r => setTimeout(r, 1000)); ready.value = true })\n</script>\n<template>\n  <div v-if="ready">异步内容已准备</div>\n</template>' },
  ], replHash: '' },

  // 应用规模化
  { slug: 'scaling-up-sfc', title: '单文件组件', intro: 'SFC 将模板、逻辑、样式放在同一文件。', steps: ['<script setup>', '样式作用域', '组合与组织'], details: [
    '使用 <script setup> 简化语法，自动导出组件上下文。',
    '样式作用域通过 <style scoped> 限定到当前组件。',
    '通过 props/插槽等组合组件，实现清晰的结构与复用。',
  ], code: [
    { title: 'App.vue', content: '<script setup>\nimport { ref } from \"vue\"\nimport Child from \"./Child.vue\"\nconst count = ref(0)\n</script>\n<template>\n  <section class=\"wrapper\">\n    <h3>单文件组件 (SFC)</h3>\n    <p>父计数：{{ count }}</p>\n    <button class=\"btn\" @click=\"count++\">count++</button>\n    <Child :count=\"count\" />\n  </section>\n</template>\n<style scoped>\n.wrapper { display: grid; gap: 8px; border: 1px solid #e5e7eb; padding: 10px; border-radius: 8px }\n.btn { background: #10b981; color: #fff; border: none; border-radius: 6px; padding: 6px 10px }\n</style>' },
    { title: 'Child.vue', content: '<script setup>\nconst props = defineProps({ count: { type: Number, default: 0 } })\n</script>\n<template>\n  <div class=\"child\">子组件计数：{{ props.count }}</div>\n</template>\n<style scoped>\n.child { color: #0ea5e9; font-weight: 600 }\n</style>' },
  ], replHash: '' },
  { slug: 'scaling-up-tooling', title: '工具链', intro: '配套工具与 IDE 支持。', steps: ['Vite', 'TS/ESLint/Prettier', 'IDE 插件'], details: [
    '使用 Vite 快速开发与构建，内置热更新与静态资源优化。',
    'TypeScript 与 Vue TS 工具提供更好的类型支持与检查。',
    'ESLint/Prettier 统一代码风格与质量检查。',
    'Vue Devtools 用于调试组件树与响应式依赖。',
  ], code: [
    { title: 'vite.config.js', content: "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\nexport default defineConfig({\n  plugins: [vue()],\n  base: '/static/'\n})" },
  ], replHash: '' },
  { slug: 'scaling-up-routing', title: '路由', intro: '使用 vue-router 管理页面导航。', steps: ['路由表与导航', '动态路由', '路由守卫'], details: [
    '核心概念：路由记录、导航 API、动态参数与嵌套路由。',
    '支持多种 history 模式：hash/history/内存，按部署场景选择。',
    '路由级懒加载与代码分割提升首屏性能。',
    '全局与路由独享守卫可在导航前后拦截处理。',
    'scrollBehavior 控制切换时的滚动位置与还原。',
  ], code: [
    { title: '概念演示 App.vue', content: '<script setup>\nimport { ref } from \\"vue\\"\nimport Home from \\"./Home.vue\\"\nimport User from \\"./User.vue\\"\nconst current = ref({ name: \\"home\\", params: {} })\nconst routes = { home: Home, user: User }\nfunction go(name, params){ current.value = { name, params: params || {} } }\n</script>\n<template>\n  <section>\n    <h3>路由概念演示</h3>\n    <div><button @click=\\"go(\\\'home\\\')\\">首页</button> <button @click=\\"go(\\\'user\\\', { id: 1 })\\">用户 1</button></div>\n    <component :is=\\"routes[current.name]\\" v-bind=\\"current.params\\" />\n  </section>\n</template>' },
    { title: 'Home.vue', content: '<template>\n  <div>首页</div>\n</template>' },
    { title: 'User.vue', content: '<script setup>\nconst props = defineProps({ id: { type: Number, default: 1 } })\n</script>\n<template>\n  <div>用户页：{{ props.id }}</div>\n</template>' },
    { title: '创建路由与守卫', content: "import { createRouter, createWebHistory } from 'vue-router'\nimport Home from './Home.vue'\nconst User = () => import('./User.vue')\nexport const router = createRouter({\n  history: createWebHistory(),\n  routes: [\n    { path: '/', name: 'home', component: Home },\n    { path: '/user/:id', name: 'user', component: User, props: true, meta: { requiresAuth: true } },\n  ],\n  scrollBehavior(){ return { top: 0 } }\n})\nrouter.beforeEach((to, from) => {\n  if(to.meta.requiresAuth){ return '/login' }\n})" },
  ], replHash: '' },
  { slug: 'scaling-up-state-management', title: '状态管理', intro: '在更大规模应用中集中式管理状态。', steps: ['Pinia 基础', '模块与持久化', '调试与性能'], details: [
    '使用 Pinia 管理集中状态，提供可组合的 store。',
    'store 包含 state/getters/actions，支持类型推导与持久化。',
    '结合 Devtools 观察状态变化与时间旅行调试。',
  ], code: [
    { title: 'Counter Store', content: "import { defineStore } from 'pinia'\nexport const useCounterStore = defineStore('counter', {\n  state: () => ({ count: 0 }),\n  getters: { double: (s) => s.count * 2 },\n  actions: { inc(){ this.count++ } }\n})" },
  ], replHash: '' },
  { slug: 'scaling-up-testing', title: '测试', intro: '为组件与逻辑编写自动化测试。', steps: ['单元测试', '端到端测试', '快照与覆盖率'], details: [
    '单元测试聚焦纯函数与小型组件的行为验证。',
    '端到端测试覆盖用户流程，保证关键路径稳定。',
    '通过覆盖率分析发现未测试的分支与文件。',
  ], code: [
    { title: '示例: 被测函数', content: 'export function sum(a, b){ return a + b }' },
    { title: '思路: 单元测试断言', content: '// 伪代码\nexpect(sum(1,2)).toBe(3)\nexpect(sum(-1,1)).toBe(0)' },
  ], replHash: '' },
  { slug: 'scaling-up-ssr', title: '服务端渲染 (SSR)', intro: '在服务端生成 HTML 以提升首屏和 SEO。', steps: ['基础概念', '同构与数据获取', '部署'], details: [
    '服务端渲染生成 HTML，客户端进行 hydration 绑定事件。',
    '支持流式渲染与按路由预取数据以优化首屏。',
    '部署需要 Node 服务器或适配器，区分服务器与客户端入口。',
  ], code: [
    { title: 'server.js', content: "import { renderToString } from '@vue/server-renderer'\nimport { createApp } from './app'\nexport async function render(url){\n  const { app } = createApp()\n  const html = await renderToString(app)\n  return html\n}" },
    { title: 'client.js', content: "import { createApp } from './app'\ncreateApp().app.mount('#app')" },
  ], replHash: '' },

  // 最佳实践
  { slug: 'best-practices-production-deployment', title: '生产部署', intro: '为生产环境构建与部署应用。', steps: ['环境变量', '构建产物优化', 'CDN 与缓存'], details: [
    '设置环境变量并通过 import.meta.env 读取配置。',
    '构建产物开启压缩与静态资源指纹，提升缓存命中。',
    '通过 CDN 与 Cache-Control 管理资源缓存与回源策略。',
    '配置 base 以匹配部署路径与资源前缀。',
  ], code: [
    { title: '读取环境变量', content: '<template>\n  <div>{{ env }}</div>\n</template>\n<script setup>\nconst env = import.meta.env\n</script>' },
    { title: 'vite base 配置', content: "import { defineConfig } from 'vite'\nexport default defineConfig({ base: '/assets/' })" },
  ], replHash: '' },
  { slug: 'best-practices-performance', title: '性能优化', intro: '识别并优化性能瓶颈。', steps: ['懒加载与代码分割', '虚拟列表', '响应性优化'], details: [
    '使用 defineAsyncComponent + Suspense 按需加载重组件，降低首屏压力。',
    '大型列表采用虚拟滚动或分页以减少渲染开销。',
    '谨慎创建深层响应式依赖，避免不必要的计算与更新。',
    '在需要时使用 shallowRef/markRaw 避免深层代理开销。',
    '通过性能分析工具定位重渲染与长任务。',
  ], code: [
    { title: '懒加载组件', content: '<script setup>\nimport { defineAsyncComponent } from \"vue\"\nconst Heavy = defineAsyncComponent(() => import(\"./Heavy.vue\"))\n</script>\n<template>\n  <Suspense>\n    <template #default>\n      <Heavy />\n    </template>\n    <template #fallback>加载中...</template>\n  </Suspense>\n</template>' },
    { title: 'shallowRef 与 markRaw', content: "import { shallowRef, markRaw } from 'vue'\nconst chart = shallowRef(null)\nfunction mountChart(){\n  const libChart = markRaw(new SomeChartLib())\n  chart.value = libChart\n}" },
  ], replHash: '' },
  { slug: 'best-practices-accessibility', title: '无障碍访问', intro: '创建对所有人更可达的界面。', steps: ['语义化标签', '可访问表单', '键盘导航'], details: [
    '为表单使用 label 与 id 建立关联，提升可达性。',
    '对状态按钮使用 aria-pressed 反映当前状态。',
    '对话框使用 role="dialog" 与 aria-modal，提供键盘可关闭。',
    '在路由切换后将焦点移动到主要内容区域。',
    '确保颜色对比度与可见焦点样式。',
  ], code: [
    { title: '基础表单与 ARIA', content: '<template>\n  <label for=\"name\">姓名</label>\n  <input id=\"name\" />\n  <button aria-pressed=\"false\">切换</button>\n</template>' },
    { title: '可访问对话框', content: '<template>\n  <div role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"title\">\n    <h2 id=\"title\">标题</h2>\n    <button @click=\"close\">关闭</button>\n  </div>\n</template>' },
  ], replHash: '' },
  { slug: 'best-practices-security', title: '安全', intro: '防范常见 Web 安全风险。', steps: ['XSS/CSRF', '依赖安全', '内容安全策略 CSP'], details: [
    '避免对不可信内容使用 v-html，优先文本插值。',
    '使用依赖审计工具与锁定版本，降低供应链风险。',
    '配置 CSP，限制脚本来源与内联执行。',
    '对敏感请求使用同源策略、SameSite Cookie 与 CSRF 防护。',
    '对用户输入进行服务端与客户端双重校验与清理。',
  ], code: [
    { title: 'XSS 风险示例', content: '<script setup>\nimport { ref } from "vue"\nconst html = ref("<img src=x onerror=\\\"alert(1)\\\" />")\n</script>\n<template>\n  <div v-html="html"></div>\n</template>' },
    { title: 'CSP 示例 (HTML)', content: '<head>\n  <meta http-equiv=\"Content-Security-Policy\" content=\"default-src \'self\'; script-src \'self\'\">\n</head>' },
  ], replHash: '' },
]

export const guideMap = Object.fromEntries(guideRegistry.map(g => [g.slug, g]))
