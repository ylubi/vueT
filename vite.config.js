import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import markdownLoader from './src/plugins/markdown-loader.js'

const theme = process.env.VITE_THEME || 'vue3'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), markdownLoader()],
  resolve: {
    alias: {
      '@template': resolve(__dirname, `templates/${theme}`)
    }
  },
  optimizeDeps: {
    exclude: ['@vue/repl'],
  },
})
