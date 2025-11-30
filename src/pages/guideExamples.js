const modules = import.meta.glob('@template/examples/**/*.{vue,js}', { query: '?raw', import: 'default', eager: true })

const samples = {}

for (const path in modules) {
  const content = modules[path]
  // 统一化路径处理，适配 @template 别名
  const rel = path.replace(/^.*\/examples\//, '')
  const segs = rel.split('/')
  const category = segs[0]
  const topic = segs.length > 2 ? segs[1] : null
  const slug = topic ? `${category}-${topic}` : category
  const filename = segs[segs.length - 1]
  let nameKey
  if (filename.toLowerCase() === 'app.vue') {
    nameKey = 'App.vue'
  } else {
    const inner = topic ? segs.slice(2).join('/') : segs.slice(1).join('/')
    nameKey = inner || filename
  }
  if (!samples[slug]) samples[slug] = {}
  samples[slug][nameKey] = content
}

export function getFiles(slug) {
  return samples[slug] || null
}
