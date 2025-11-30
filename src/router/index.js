import { createRouter, createWebHistory } from 'vue-router'
import { guideMap } from '../guide/content'
import { menus } from '@template/menus/main.js'

const Guide = () => import('../pages/Guide.vue')
const Play = () => import('../pages/Play.vue')

// 自动获取第一个有效 slug 作为默认首页
const firstSlug = menus[0]?.items[0]?.slug || 'introduction'

const routes = [
  { path: '/', name: 'home', redirect: `/guide/${firstSlug}` },
  { path: '/guide/:slug', name: 'guide', component: Guide },
  { path: '/play', name: 'play', component: Play },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const DEFAULT_TITLE = 'Vue 指南与 Playground'
const DEFAULT_DESC = 'Vue 3 学习指南与在线 Playground，涵盖基础、组件、内置组件、规模化与最佳实践示例。'

function setMeta(name, content){
  let el = document.querySelector(`meta[name="${name}"]`)
  if(!el){
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url){
  let el = document.querySelector('link[rel="canonical"]')
  if(!el){
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

if (typeof window !== 'undefined') {
  router.afterEach((to) => {
    const slug = to.params.slug
    const meta = slug && guideMap[slug] ? guideMap[slug] : null
    document.title = meta ? `${meta.title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE
    setMeta('description', meta?.intro || DEFAULT_DESC)
    setMeta('keywords', 'Vue3,Vue,教程,指南,Playground,示例,组件,Pinia,路由')
    const url = window.location.origin + to.fullPath
    setCanonical(url)
  })
}

export default router