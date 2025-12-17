// 防抖：把高频触发的函数调用合并成一次执行
// - 每次调用都会取消上一次的定时器
// - 最终只在停止触发一段时间后执行一次
// - 返回值包含：防抖后的函数，以及用于取消等待中的执行

export function debounce(fn, delay = 0) {
  if (typeof fn !== 'function') {
    throw new TypeError('debounce(fn, delay) 需要传入函数作为 fn')
  }

  let timerId = null

  const debounced = (...args) => {
    const safeDelay = Math.max(0, Number(delay) || 0)
    if (timerId !== null) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      timerId = null
      fn(...args)
    }, safeDelay)
  }

  debounced.cancel = () => {
    if (timerId !== null) {
      clearTimeout(timerId)
      timerId = null
    }
  }

  return debounced
}

// 异步模拟：等待一段时间后，根据问题返回一个模拟答案
export async function mockAskQuestion(question, options = {}) {
  const delayMs = 'delayMs' in options ? options.delayMs : 600
  const safeDelay = Math.max(0, Number(delayMs) || 0)

  const q = typeof question === 'string' ? question : String(question || '')
  await new Promise((r) => setTimeout(r, safeDelay))

  if (!q) {
    return ''
  }
  if (q.includes('?')) {
    const candidates = ['yes', 'no', 'maybe']
    return candidates[Math.floor(Math.random() * candidates.length)]
  }
  return '没有找到你要的答案，你可以重新提问。'
}
