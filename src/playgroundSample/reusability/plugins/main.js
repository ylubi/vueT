import { createApp } from 'vue'
import App from './App.vue'
import MyPlugin from './plugin.js'
const app = createApp(App)
app.use(MyPlugin)
app.mount('#app')