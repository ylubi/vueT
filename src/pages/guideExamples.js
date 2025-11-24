export function getFiles(slug) {
  const OPEN_SCRIPT = ['<', 'script setup>'].join('')
  const CLOSE_SCRIPT = ['</', 'script>'].join('')
  const OPEN_TEMPLATE = ['<', 'template>'].join('')
  const CLOSE_TEMPLATE = ['</', 'template>'].join('')
  const OPEN_STYLE = ['<', 'style scoped>'].join('')
  const CLOSE_STYLE = ['</', 'style>'].join('')

  switch (slug) {
    case 'introduction': {
      const content = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        "const msg = ref('Hello Vue')",
        'const count = ref(0)',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>简介演示</h3>',
        '    <p>{{ msg }}</p>',
        '    <button @click="count++">count: {{ count }}</button>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'essentials-lifecycle': {
      const content = [
        OPEN_SCRIPT,
        "import { ref, onMounted, onUnmounted } from 'vue'",
        'const c = ref(0)',
        'let t = null',
        'onMounted(() => { t = setInterval(() => c.value++, 500) })',
        'onUnmounted(() => { if (t) { clearInterval(t); t = null } })',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>生命周期演示</h3>',
        '    <p>计数：{{ c }}</p>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }
    case 'essentials-template-syntax': {
      const content = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        "const msg = ref('Hello')",
        "const rawHtml = '<span style=\"color: red\">This should be red.</span>'",
        "const dynamicId = 'list-1'",
        "const isButtonDisabled = false",
        "const objectOfAttrs = { id: 'container', class: 'wrapper' }",
        'const number = 1',
        'const ok = true',
        'const id = 42',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>模板语法演示</h3>',
        '    <p>文本插值：{{ msg }}</p>',
        '    <p>原始 HTML：<span v-html="rawHtml"></span></p>',
        '    <div :id="dynamicId">attribute 绑定</div>',
        '    <button :disabled="isButtonDisabled">布尔属性</button>',
        '    <div v-bind="objectOfAttrs">批量绑定</div>',
        "    <p>表达式：{{ number + 1 }} / {{ ok ? 'YES' : 'NO' }}</p>",
        "    <div :id=\"'list-' + id\">模板内表达式与模板字符串</div>",
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        '.wrapper { padding: 4px; background: #f3f4f6; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'components-async': {
      const app = [
        OPEN_SCRIPT,
        "import { defineAsyncComponent, ref } from 'vue'",
        "const show = ref(false)",
        "const AsyncChild = defineAsyncComponent(() => import('./AsyncChild.vue'))",
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>异步组件演示</h3>',
        '    <button @click="show = !show">toggle</button>',
        '    <AsyncChild v-if="show" />',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      const child = [
        OPEN_SCRIPT,
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <div style="border:1px solid #e5e7eb;padding:8px;border-radius:6px;">异步加载的子组件</div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app, 'AsyncChild.vue': child }
    }

    case 'reusability-composables': {
      const app = [
        OPEN_SCRIPT,
        "import { useCounter } from './useCounter.js'",
        'const { n, inc, dec } = useCounter()',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>组合式函数演示</h3>',
        '    <p>n: {{ n }}</p>',
        '    <div><button @click="inc">inc</button> <button @click="dec">dec</button></div>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      const use = [
        "import { ref } from 'vue'",
        'export function useCounter(){ const n = ref(0); const inc = () => n.value++; const dec = () => n.value--; return { n, inc, dec } }',
      ].join('\n')
      return { 'App.vue': app, 'useCounter.js': use }
    }

    case 'reusability-custom-directives': {
      const content = [
        OPEN_SCRIPT,
        'const vFocus = { mounted(el){ el.focus() } }',
        'defineOptions({ directives: { focus: vFocus } })',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>自定义指令演示</h3>',
        '    <input v-focus placeholder="自动聚焦" />',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'reusability-plugins': {
      const main = [
        "import { createApp } from 'vue'",
        "import App from './App.vue'",
        "import MyPlugin from './plugin.js'",
        'const app = createApp(App)',
        'app.use(MyPlugin)',
        "app.mount('#app')",
      ].join('\n')
      const app = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        "const name = ref('Vue')",
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>插件演示</h3>',
        '    <p>{{ $greet(name) }}</p>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      const plugin = [
        'export default { install(app){ app.config.globalProperties.$greet = (n) => "Hello " + n } }',
      ].join('\n')
      return { 'main.js': main, 'App.vue': app, 'plugin.js': plugin }
    }

    case 'built-ins-transition': {
      const content = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        'const show = ref(true)',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>Transition 演示</h3>',
        '    <button @click="show = !show">toggle</button>',
        '    <transition name="fade">',
        '      <p v-if="show">Hello</p>',
        '    </transition>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        '<style scoped>',
        '.fade-enter-active,.fade-leave-active{ transition: opacity .2s ease }',
        '.fade-enter-from,.fade-leave-to{ opacity: 0 }',
        'section { display: grid; gap: 8px; }',
        '</style>',
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'built-ins-transition-group': {
      const content = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        'const items = ref([1,2,3])',
        'function add(){ items.value.push(items.value.length + 1) }',
        'function remove(){ items.value.pop() }',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>TransitionGroup 演示</h3>',
        '    <div><button @click="add">add</button> <button @click="remove">remove</button></div>',
        '    <transition-group name="list" tag="ul">',
        '      <li v-for="i in items" :key="i">Item {{ i }}</li>',
        '    </transition-group>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        '<style scoped>',
        'ul{ list-style:none; padding:0; }',
        '.list-enter-active,.list-leave-active{ transition: all .2s ease }',
        '.list-enter-from,.list-leave-to{ opacity:0; transform: translateY(6px) }',
        'section { display: grid; gap: 8px; }',
        '</style>',
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'scaling-up-testing': {
      const app = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        "import { sum } from './math.js'",
        'const results = ref([])',
        'function run(){ results.value = []; results.value.push("sum(1,2) => " + sum(1,2)); results.value.push("sum(0,0) => " + sum(0,0)); results.value.push("sum(-1,1) => " + sum(-1,1)) }',
        'run()',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>测试概念演示</h3>',
        '    <button @click="run">重新运行</button>',
        '    <pre>{{ results }}</pre>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px }',
        CLOSE_STYLE,
      ].join('\n')
      const math = [
        'export function sum(a, b){ return a + b }',
      ].join('\n')
      return { 'App.vue': app, 'math.js': math }
    }

    case 'best-practices-performance': {
      const app = [
        OPEN_SCRIPT,
        "import { defineAsyncComponent, ref } from 'vue'",
        "const Heavy = defineAsyncComponent(() => import('./Heavy.vue'))",
        'const show = ref(false)',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>性能优化演示</h3>',
        '    <button @click="show = !show">加载/卸载 Heavy</button>',
        '    <Suspense>',
        '      <template #default>',
        '        <Heavy v-if="show" />',
        '      </template>',
        '      <template #fallback>加载中...</template>',
        '    </Suspense>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px }',
        CLOSE_STYLE,
      ].join('\n')
      const heavy = [
        OPEN_SCRIPT,
        "import { ref, computed } from 'vue'",
        'const n = ref(10000)',
        'const list = computed(() => Array.from({ length: n.value }, (_, i) => i))',
        'const total = computed(() => list.value.reduce((a,b) => a + b, 0))',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <div>Heavy 组件：列表长度 {{ n }}，总和 {{ total }}</div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app, 'Heavy.vue': heavy }
    }

    case 'best-practices-accessibility': {
      const app = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        'const name = ref("")',
        'const pressed = ref(false)',
        'const open = ref(false)',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>无障碍演示</h3>',
        '    <label for="name">姓名</label>',
        '    <input id="name" v-model="name" placeholder="输入姓名" />',
        '    <button :aria-pressed="pressed" @click="pressed = !pressed">切换状态</button>',
        '    <button @click="open = true">打开对话框</button>',
        '    <div v-if="open" role="dialog" aria-modal="true" style="position:fixed;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center" @click.self="open=false">',
        '      <div style="background:#fff;padding:12px;border-radius:10px">',
        '        <p>对话框内容</p>',
        '        <button @click="open=false">关闭</button>',
        '      </div>',
        '    </div>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': app }
    }

    case 'best-practices-security': {
      const app = [
        OPEN_SCRIPT,
        "import { ref, computed } from 'vue'",
        "const html = ref('<strong>Hello</strong> <img src=x onerror=\\'alert(1)\\' />')",
        'const safe = computed(() => html.value.replace(/on\\w+\\s*=\\s*(\"[^\"]*\"|\'[^\']*\')/gi, ""))',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>安全演示</h3>',
        '    <p>避免对不可信内容使用 v-html。下方同时展示原始与简化处理后的内容：</p>',
        '    <textarea v-model="html" rows="4" style="width:100%" />',
        '    <div style="display:grid;gap:8px">',
        '      <div>',
        '        <h4>原始 v-html</h4>',
        '        <div v-html="html"></div>',
        '      </div>',
        '      <div>',
        '        <h4>简单移除事件属性</h4>',
        '        <div v-html="safe"></div>',
        '      </div>',
        '    </div>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': app }
    }

    case 'quick-start': {
      const content = [
        OPEN_SCRIPT,
        "const msg = 'Hello Vue'",
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <h3>快速上手演示</h3>',
        '  <p>{{ msg }}</p>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'essentials-reactivity-fundamentals': {
      const content = [
        OPEN_SCRIPT,
        "import { ref, reactive, watch, watchEffect, toRefs } from 'vue'",
        'const count = ref(0)',
        "const user = reactive({ name: 'Ada', age: 18 })",
        'const { name, age } = toRefs(user)',
        'watch(count, (n, o) => console.log(`count: ${n}`))',
        'watchEffect(() => { console.log(`name: ${name.value}`) })',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>响应式基础演示</h3>',
        '    <p>count: {{ count }}</p>',
        '    <button @click="count++">count++</button>',
        '    <div>name: <input v-model="name" /></div>',
        '    <div>age: <input v-model.number="age" type="number" /></div>',
        '    <p>user: {{ user }}</p>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'essentials-computed': {
      const content = [
        OPEN_SCRIPT,
        "import { ref, computed } from 'vue'",
        'const count = ref(1)',
        'const double = computed(() => count.value * 2)',
        "const firstName = ref('Ada')",
        "const lastName = ref('Lovelace')",
        'const fullName = computed({',
        '  get: () => firstName.value + " " + lastName.value,',
        '  set: (v) => { const p = v.split(" "); firstName.value = p[0] || ""; lastName.value = p[1] || "" }',
        '})',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>计算属性演示</h3>',
        '    <p>count: {{ count }} / double: {{ double }}</p>',
        '    <button @click="count++">count++</button>',
        '    <div><input v-model="fullName" /></div>',
        '    <p>{{ firstName }} | {{ lastName }}</p>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'essentials-class-and-style': {
      const content = [
        OPEN_SCRIPT,
        "import { ref, computed } from 'vue'",
        "const isActive = ref(true)",
        "const hasError = ref(false)",
        "const baseClass = 'btn'",
        "const color = ref('#0ea5e9')",
        "const size = ref(14)",
        'const styleObj = computed(() => ({ color: color.value, fontSize: size.value + "px" }))',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>类与样式绑定演示</h3>',
        '    <div :class="{ active:isActive, error:hasError }">对象语法</div>',
        '    <div :class="[ baseClass, isActive ? \'active\' : \'\' ]">数组语法</div>',
        '    <div :style="styleObj">style 对象语法</div>',
        '    <button @click="isActive = !isActive">toggle active</button>',
        '    <button @click="hasError = !hasError">toggle error</button>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        '.active { background: #dcfce7; }',
        '.error { border: 1px solid #ef4444; }',
        '.btn { padding: 6px 8px; border: 1px solid #e5e7eb; }',
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'essentials-conditional': {
      const content = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        'const ok = ref(true)',
        'const visible = ref(true)',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>条件渲染演示</h3>',
        '    <p v-if="ok">OK</p><p v-else>NO</p>',
        '    <p v-show="visible">Visible</p>',
        '    <template v-if="ok"><p>A</p><p>B</p></template>',
        '    <button @click="ok = !ok">toggle ok</button>',
        '    <button @click="visible = !visible">toggle visible</button>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'essentials-list': {
      const content = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        'const items = ref([{ id: 1, text: "A" }, { id: 2, text: "B" }])',
        'const obj = ref({ a: 1, b: 2 })',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>列表渲染演示</h3>',
        '    <ul><li v-for="item in items" :key="item.id">{{ item.text }}</li></ul>',
        '    <div v-for="(val, key, i) in obj" :key="key">{{ i }}-{{ key }}: {{ val }}</div>',
        '    <div v-for="n in 5" :key="n">{{ n }}</div>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'essentials-event-handling': {
      const content = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        "const log = ref([])",
        'function onClick(){ log.value.push("clicked") }',
        'function handler(){ log.value.push("bubble stopped") }',
        'function onSubmit(e){ log.value.push("submit prevented") }',
        'function onEnter(){ log.value.push("enter key") }',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>事件处理演示</h3>',
        '    <button @click="onClick">点我</button>',
        '    <div @click.stop="handler" style="border:1px solid #e5e7eb;padding:8px;">@click.stop</div>',
        '    <form @submit.prevent="onSubmit"><input /><button type="submit">提交</button></form>',
        '    <input @keyup.enter="onEnter" placeholder="回车触发" />',
        '    <pre>{{ log }}</pre>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'essentials-forms': {
      const content = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        "const text = ref('')",
        'const checked = ref(false)',
        "const picked = ref('A')",
        'const age = ref(18)',
        "const name = ref('')",
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>表单输入绑定演示</h3>',
        '    <input v-model="text" placeholder="文本" />',
        '    <label><input type="checkbox" v-model="checked" /> 复选：{{ checked }}</label>',
        '    <div><label><input type="radio" value="A" v-model="picked" /> A</label> <label><input type="radio" value="B" v-model="picked" /> B</label> 选择：{{ picked }}</div>',
        '    <input v-model.number="age" type="number" /> 年龄：{{ age }}',
        '    <input v-model.trim="name" placeholder="去空格" /> 名称：{{ name }}',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'essentials-component-basics': {
      const app = [
        OPEN_SCRIPT,
        "import Child from './Child.vue'",
        "const msg = 'Hello'",
        'function onClose(){ alert("closed") }',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>组件基础演示</h3>',
        '    <Child :msg="msg" @close="onClose" />',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      const child = [
        OPEN_SCRIPT,
        "const props = defineProps({ msg:String })",
        "const emit = defineEmits(['close'])",
        'function close(){ emit("close") }',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <div style="border:1px solid #e5e7eb;padding:8px;border-radius:6px;">',
        '    <p>子组件：{{ props.msg }}</p>',
        '    <button @click="close">关闭</button>',
        '  </div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app, 'Child.vue': child }
    }

    case 'components-registration': {
      const app = [
        OPEN_SCRIPT,
        "import Child from './Child.vue'",
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>组件注册演示</h3>',
        '    <Child />',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      const child = [
        OPEN_SCRIPT,
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <div style="border:1px solid #e5e7eb;padding:8px;border-radius:6px;">已局部注册的子组件</div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app, 'Child.vue': child }
    }

    case 'components-props': {
      const app = [
        OPEN_SCRIPT,
        "import Child from './Child.vue'",
        "import { ref } from 'vue'",
        "const msg = ref('Hello Props')",
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>Props 演示</h3>',
        '    <input v-model="msg" />',
        '    <Child :msg="msg" />',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      const child = [
        OPEN_SCRIPT,
        "const props = defineProps({ msg: { type: String, default: 'Hi' } })",
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <div style="border:1px solid #e5e7eb;padding:8px;border-radius:6px;">来自父组件：{{ props.msg }}</div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app, 'Child.vue': child }
    }

    case 'components-events': {
      const app = [
        OPEN_SCRIPT,
        "import Child from './Child.vue'",
        "const log = []",
        'function onClose(){ log.push("close") }',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>事件演示</h3>',
        '    <Child @close="onClose" />',
        '    <pre>{{ log }}</pre>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      const child = [
        OPEN_SCRIPT,
        "const emit = defineEmits(['close'])",
        'function close(){ emit("close") }',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <div style="border:1px solid #e5e7eb;padding:8px;border-radius:6px;">',
        '    <button @click="close">派发 close</button>',
        '  </div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app, 'Child.vue': child }
    }

    case 'components-v-model': {
      const app = [
        OPEN_SCRIPT,
        "import Child from './Child.vue'",
        "import { ref } from 'vue'",
        'const text = ref("")',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>组件 v-model 演示</h3>',
        '    <Child v-model="text" />',
        '    <p>父：{{ text }}</p>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      const child = [
        OPEN_SCRIPT,
        "const props = defineProps({ modelValue: String })",
        "const emit = defineEmits(['update:modelValue'])",
        'function onInput(e){ emit("update:modelValue", e.target.value) }',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <input :value="props.modelValue" @input="onInput" placeholder="子组件输入" />',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app, 'Child.vue': child }
    }

    case 'components-attrs': {
      const app = [
        OPEN_SCRIPT,
        "import Child from './Child.vue'",
        "import { ref } from 'vue'",
        'const logs = ref([])',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>透传 Attributes 演示</h3>',
        '    <p>父组件传入的 class/style/id/@click 会自动透传到子组件根元素。</p>',
        '    <Child class="large" style="color:#0ea5e9" id="btn1" @click="()=>logs.push(\'parent click\')" />',
        '    <pre>{{ logs }}</pre>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      const child = [
        OPEN_SCRIPT,
        "import { ref, useAttrs } from 'vue'",
        "const childLogs = ref([])",
        'defineOptions({ inheritAttrs: true })',
        'const attrs = useAttrs()'
        ,
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <button class="btn" @click="childLogs.push(\'child click\')">子组件按钮 (根元素)</button>',
        '  <p>child attrs: {{ attrs }}</p>',
        '  <pre>{{ childLogs }}</pre>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        '.btn { padding: 6px 10px; border:1px solid #e5e7eb; border-radius:6px }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': app, 'Child.vue': child }
    }

    case 'components-slots': {
      const app = [
        OPEN_SCRIPT,
        "import Child from './Child.vue'",
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>插槽演示</h3>',
        '    <Child>',
        '      <template #header>自定义头部</template>',
        '      <template #default="{ count }">默认插槽：{{ count }}</template>',
        '      <template #footer>底部</template>',
        '    </Child>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      const child = [
        OPEN_SCRIPT,
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <header><slot name="header">默认头部</slot></header>',
        '  <main><slot :count="1">默认内容</slot></main>',
        '  <footer><slot name="footer">默认底部</slot></footer>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app, 'Child.vue': child }
    }

    case 'components-provide-inject': {
      const app = [
        OPEN_SCRIPT,
        "import { ref, provide } from 'vue'",
        "import Child from './Child.vue'",
        "const color = ref('#0ea5e9')",
        'const size = ref(14)',
        'provide("color", color)',
        'provide("size", size)',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>依赖注入演示</h3>',
        '    <div><label>颜色 <input v-model="color" /></label> <label>字号 <input v-model.number="size" type="number" /></label></div>',
        '    <Child />',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      const child = [
        OPEN_SCRIPT,
        "import { inject, computed } from 'vue'",
        'const color = inject("color", null)',
        'const size = inject("size", null)',
        'const styleObj = computed(() => ({ color: color ? color.value : "#374151", fontSize: (size ? size.value : 14) + "px" }))',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <div :style="styleObj">来自 provide 的样式</div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app, 'Child.vue': child }
    }

    case 'built-ins-keep-alive': {
      const a = [
        OPEN_TEMPLATE,
        '  <div>组件 A</div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      const b = [
        OPEN_TEMPLATE,
        '  <div>组件 B</div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      const app = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        "import A from './A.vue'",
        "import B from './B.vue'",
        "const view = ref('A')",
        'const map = { A, B }',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>KeepAlive 演示</h3>',
        '    <div><button @click="view = \"A\"">A</button> <button @click="view = \"B\"">B</button></div>',
        '    <keep-alive><component :is="map[view]" /></keep-alive>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': app, 'A.vue': a, 'B.vue': b }
    }

    case 'built-ins-teleport': {
      const content = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        'const open = ref(false)',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>Teleport 演示</h3>',
        '    <button @click="open = true">打开</button>',
        '    <teleport to="body">',
        '      <div v-if="open" class="overlay" @click.self="open=false">',
        '        <div class="dialog">传送到 body 的对话框</div>',
        '      </div>',
        '    </teleport>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        '.overlay { position: fixed; inset: 0; background: rgba(0,0,0,.45); display: flex; align-items: center; justify-content: center; }',
        '.dialog { background: #fff; padding: 12px; border-radius: 10px; }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': content }
    }

    case 'built-ins-suspense': {
      const app = [
        OPEN_SCRIPT,
        "import AsyncFoo from './AsyncFoo.vue'",
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>Suspense 演示</h3>',
        '    <Suspense>',
        '      <template #default>',
        '        <AsyncFoo />',
        '      </template>',
        '      <template #fallback>加载中...</template>',
        '    </Suspense>',
        '  </section>',
        CLOSE_TEMPLATE,
      ].join('\n')
      const foo = [
        OPEN_SCRIPT,
        "import { ref, onMounted } from 'vue'",
        'const ready = ref(false)',
        'onMounted(async () => { await new Promise(r => setTimeout(r, 1000)); ready.value = true })',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <div v-if="ready">异步内容已准备</div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app, 'AsyncFoo.vue': foo }
    }

    case 'scaling-up-tooling': {
      const app = [
        OPEN_SCRIPT,
        "import { defineAsyncComponent, ref } from 'vue'",
        "const show = ref(false)",
        "const Lazy = defineAsyncComponent(() => import('./Lazy.vue'))",
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>工具链演示</h3>',
        '    <button @click="show = !show">加载/卸载 Lazy 组件</button>',
        '    <Suspense>',
        '      <template #default><Lazy v-if="show" /></template>',
        '      <template #fallback><span class="loading">加载中...</span></template>',
        '    </Suspense>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px; }',
        '.loading { display: inline-block; padding: 4px 8px; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 6px; color: #6b7280; }',
        CLOSE_STYLE,
      ].join('\n')
      const lazy = [
        OPEN_TEMPLATE,
        '  <div style="border:1px solid #e5e7eb;padding:8px;border-radius:6px;">这是一个按需异步加载的组件</div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app, 'Lazy.vue': lazy }
    }

    case 'scaling-up-state-management': {
      const main = [
        "import { createApp } from 'vue'",
        "import App from './App.vue'",
        "import { createPinia } from 'pinia'",
        'const app = createApp(App)',
        'app.use(createPinia())',
        "app.mount('#app')",
      ].join('\n')
      const app = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        "import { useCounterStore } from './stores/counter.js'",
        'const store = useCounterStore()',
        "const input = ref('')",
        'function add(){ store.addTodo(input.value); input.value = "" }',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>状态管理演示（Pinia 风格）</h3>',
        '    <p>count: {{ store.count }} / double: {{ store.double }}</p>',
        '    <button @click="store.inc">inc</button>',
        '    <div style="display:flex; gap:6px; align-items:center">',
        '      <input v-model="input" placeholder="todo" />',
        '      <button @click="add">添加</button>',
        '    </div>',
        '    <ul><li v-for="t in store.todos" :key="t.id">{{ t.text }}</li></ul>',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px }',
        CLOSE_STYLE,
      ].join('\n')
      const counter = [
        "import { defineStore } from 'pinia'",
        'export const useCounterStore = defineStore("counter", {',
        '  state: () => ({ count: 0, todos: [] }),',
        '  getters: { double: (state) => state.count * 2 },',
        '  actions: { inc(){ this.count++ }, addTodo(text){ if(!text) return; this.todos.push({ id: Date.now(), text }) } },',
        '})',
      ].join('\n')
      return { 'main.js': main, 'App.vue': app, 'stores/counter.js': counter }
    }

    case 'scaling-up-ssr': {
      const app = [
        OPEN_SCRIPT,
        "import { ref, onMounted } from 'vue'",
        'const serverData = { user: { name: "Ada" }, ts: 123 }',
        'const hydrated = ref(false)',
        'onMounted(() => { hydrated.value = true })',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>SSR 概念演示</h3>',
        '    <p>服务端数据：{{ serverData }}</p>',
        '    <p>是否已水合：{{ hydrated }}</p>',
        '  </section>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app }
    }

    case 'best-practices-production-deployment': {
      const app = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        'const env = ref({ NODE_ENV: "production", API: "https://api.example.com" })',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>生产部署概念演示</h3>',
        '    <p>环境变量：{{ env }}</p>',
        '    <p>静态资源可通过 CDN 部署并结合缓存策略。</p>',
        '  </section>',
        CLOSE_TEMPLATE,
      ].join('\n')
      return { 'App.vue': app }
    }

    case 'scaling-up-sfc': {
      const app = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        "import Child from './Child.vue'",
        'const count = ref(0)',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section class="wrapper">',
        '    <h3>单文件组件 (SFC) 演示</h3>',
        '    <p>父计数：{{ count }}</p>',
        '    <button class="btn" @click="count++">count++</button>',
        '    <Child :count="count" />',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        '.wrapper { display: grid; gap: 8px; border: 1px solid #e5e7eb; padding: 10px; border-radius: 8px }',
        '.btn { background: #10b981; color: #fff; border: none; border-radius: 6px; padding: 6px 10px }',
        CLOSE_STYLE,
      ].join('\n')
      const child = [
        OPEN_SCRIPT,
        'const props = defineProps({ count: { type: Number, default: 0 } })',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <div class="child">子组件计数：{{ props.count }}</div>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        '.child { color: #0ea5e9; font-weight: 600 }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': app, 'Child.vue': child }
    }

    case 'scaling-up-routing': {
      const home = [
        OPEN_SCRIPT,
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <div>首页</div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      const user = [
        OPEN_SCRIPT,
        'const props = defineProps({ id: { type: Number, default: 1 } })',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <div>用户页：{{ props.id }}</div>',
        CLOSE_TEMPLATE,
      ].join('\n')
      const app = [
        OPEN_SCRIPT,
        "import { ref } from 'vue'",
        "import Home from './Home.vue'",
        "import User from './User.vue'",
        'const current = ref({ name: "home", params: {} })',
        'const routes = { home: Home, user: User }',
        'function go(name, params){ current.value = { name, params: params || {} } }',
        CLOSE_SCRIPT,
        '',
        OPEN_TEMPLATE,
        '  <section>',
        '    <h3>路由概念演示</h3>',
        '    <div><button @click="go(\'home\')">首页</button> <button @click="go(\'user\', { id: 1 })">用户 1</button></div>',
        '    <component :is="routes[current.name]" v-bind="current.params" />',
        '  </section>',
        CLOSE_TEMPLATE,
        '',
        OPEN_STYLE,
        'section { display: grid; gap: 8px }',
        CLOSE_STYLE,
      ].join('\n')
      return { 'App.vue': app, 'Home.vue': home, 'User.vue': user }
    }
  }

  return null
}