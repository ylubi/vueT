/**
 * 构建配置脚本
 * 使用：node scripts/build-theme.js [theme-name]
 */

import { execSync } from 'child_process'
import { existsSync } from 'fs'
import { resolve } from 'path'

const theme = process.argv[2] || 'vue3'
const themeDir = resolve(process.cwd(), 'templates', theme)

if (!existsSync(themeDir)) {
  console.error(`Theme "${theme}" not found at ${themeDir}`)
  process.exit(1)
}

console.log(`Building theme: ${theme}...`)

// 设置环境变量传递给 vite
process.env.VITE_THEME = theme

try {
  execSync('vite build', { stdio: 'inherit' })
  console.log(`Theme "${theme}" built successfully!`)
} catch (e) {
  console.error(`Build failed: ${e.message}`)
  process.exit(1)
}
