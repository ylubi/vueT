
import { test, expect } from 'vitest'
import { menus } from '../templates/vue3/menus/main.js'
import { guideRegistry } from '../templates/vue3/knowledge/main.js'
import { getFiles } from '../src/pages/guideExamples.js'

test('Menu structure is valid', () => {
  expect(menus).toBeInstanceOf(Array)
  menus.forEach(group => {
    expect(group).toHaveProperty('title')
    expect(group.items).toBeInstanceOf(Array)
    group.items.forEach(item => {
      expect(item).toHaveProperty('slug')
      expect(item).toHaveProperty('title')
    })
  })
})

test('Knowledge registry matches menu items', () => {
  const menuSlugs = menus.flatMap(g => g.items.map(i => i.slug))
  const knowledgeSlugs = guideRegistry.map(g => g.slug)
  
  // 检查所有菜单项都有对应的知识点
  menuSlugs.forEach(slug => {
    expect(knowledgeSlugs).toContain(slug)
  })
})

test('Examples exist for all menu items', () => {
  const menuSlugs = menus.flatMap(g => g.items.map(i => i.slug))
  
  // 检查所有菜单项都有对应的示例代码
  menuSlugs.forEach(slug => {
    const files = getFiles(slug)
    expect(files).not.toBeNull()
    expect(Object.keys(files || {}).length).toBeGreaterThan(0)
  })
})
