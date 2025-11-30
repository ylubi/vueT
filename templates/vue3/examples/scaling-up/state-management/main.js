import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const app = createApp(App)

// 后续可以用 pinia 的 defineStore 定义 store
// 其他地方可以用 useCounterStore 来获取 store 实例
app.use(createPinia())
app.mount('#app')