<script setup>
import { ref, reactive, watch, onBeforeUnmount } from 'vue'
import { debounce, mockAskQuestion } from './util.js'

// 防抖演示：
// - `question` 是输入框的即时值
// - 通过 `debouncedQuestion` 把高频输入合并为低频更新
const question = ref('')
const debounceDelay = ref(500)
const debouncedQuestion = ref('')
const answer = ref('')
const loading = ref(false)
const triggeredCount = ref(0)  // 记录 watch 副作用触发次数
const lastTriggeredAt = ref('')

const x = ref(0)
const y = ref(0)
const sum = ref(0)

// nested 是一个对象，需要深度侦听
const state = reactive({ count: 0, nested: { keyword: '' } }) 
const deepTriggeredCount = ref(0)
const nestedKeywordLog = ref('')

let cancelPendingDebounce = null // 用于取消上一次的防抖等待

// 监听 question 和 debounceDelay，当它们变化时：
// - 取消上一次的防抖等待
// - 创建新的防抖函数，延迟执行更新 `debouncedQuestion`
watch([question, debounceDelay], ([q, delayMs]) => {
  if (cancelPendingDebounce) {
    cancelPendingDebounce()
  }

  const safeDelay = Math.max(0, Number(delayMs) || 0)
  const delayedUpdate = debounce((value) => {
    debouncedQuestion.value = value
  }, safeDelay)

  cancelPendingDebounce = delayedUpdate.cancel
  delayedUpdate(q)
})

onBeforeUnmount(() => {
  if (cancelPendingDebounce) {
    cancelPendingDebounce()
  }
})

// 监听 debouncedQuestion，当它变化时：
// - 模拟异步回答问题
watch(debouncedQuestion, async (q) => {
  triggeredCount.value++
  loading.value = true
  answer.value = '搜索中...'
  answer.value = await mockAskQuestion(q, { delayMs: 600 })

  lastTriggeredAt.value = new Date().toLocaleTimeString()
  loading.value = false
})

// 监听 x 和 y，当它们变化时：
// - 计算它们的和并更新 sum
watch(
  () => x.value + y.value,
  (newSum) => {
    sum.value = newSum
  },
  { immediate: true }   // immediate: true 表示在初始化时立即执行一次
)

// 监听 state.nested.keyword，当它变化时：
// - 更新 nestedKeywordLog
watch(
  () => state.nested.keyword,
  (v) => {
    nestedKeywordLog.value = `nested.keyword: ${v}`
  },
  { immediate: true }
)

// 监听 state，当它变化时：
// - 记录触发次数
watch(
  state,
  () => {
    deepTriggeredCount.value++
  },
  { deep: true }
)
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>侦听器演示</h1>
        <span class="desc">watch / 多数据源 / 深度侦听 / 防抖</span>

        <div class="block">
          <h2 class="block-title">防抖输入 + watch 副作用</h2>
          <div class="section-item">
            <span class="remark">输入：</span>
            <span class="code" style="display:flex;align-items:center;gap:8px;width:100%">
              <input v-model="question" placeholder="提问" style="flex:1" />
              <input v-model.number="debounceDelay" type="number" min="0" style="width:90px" />
              <span class="muted">ms</span>
            </span>
          </div>
          <div class="section-item">
            <span class="remark">即时值：</span>
            <span class="code">{{ question }}</span>
          </div>
          <div class="section-item">
            <span class="remark">防抖值：</span>
            <span class="code">{{ debouncedQuestion }}</span>
          </div>
          <div class="section-item">
            <span class="remark">状态：</span>
            <span class="code">{{ loading ? '加载中' : '空闲' }} / 触发次数：{{ triggeredCount }} / 最近触发：{{ lastTriggeredAt || '-' }}</span>
          </div>
          <div class="section-item">
            <span class="remark">答案：</span>
            <span class="code">{{ answer || '' }}</span>
          </div>
        </div>

        <div class="block">
          <h2 class="block-title">侦听 getter：watch(() => x + y)</h2>
          <div class="section-item">
            <span class="remark">x / y：</span>
            <span class="code" style="display:flex;align-items:center;gap:8px">
              <button @click="x--">x--</button>
              <span>{{ x }}</span>
              <button @click="x++">x++</button>
              <span style="margin-left:10px">+</span>
              <button @click="y--">y--</button>
              <span>{{ y }}</span>
              <button @click="y++">y++</button>
            </span>
          </div>
          <div class="section-item">
            <span class="remark">求和：</span>
            <span class="code">{{ sum }}</span>
          </div>
        </div>

        <div class="block">
          <h2 class="block-title">深度侦听与嵌套属性</h2>
          <div class="section-item">
            <span class="remark">count：</span>
            <span class="code" style="display:flex;align-items:center;gap:8px">
              <button @click="state.count--">count--</button>
              <span>{{ state.count }}</span>
              <button @click="state.count++">count++</button>
              <span style="margin-left:10px">deep 触发：{{ deepTriggeredCount }}</span>
            </span>
          </div>
          <div class="section-item">
            <span class="remark">嵌套属性：</span>
            <span class="code" style="display:flex;align-items:center;gap:8px;width:100%">
              <input v-model="state.nested.keyword" placeholder="state.nested.keyword" style="flex:1" />
              <span class="muted">{{ nestedKeywordLog }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
.section-container { display: grid; gap: 12px; padding: 12px; border: 1px solid #2ba46d; border-radius: 8px; background: #ffffff; }
.section-container h1 { font-size: 18px; font-weight: 600; color: #1f2937; }
.section-container .desc { font-size: 14px; font-weight: 500; color: #4b5563; }
.section-item { display: flex; align-items: center; gap: 8px; }
.section-item .remark { font-size: 14px; color: #333; min-width: 86px; }
.section-item .code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 13px;
  color: #111827;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 6px 8px;
  line-height: 1.6;
  white-space: pre-wrap;
  min-width: 40px;
  min-height: 20px;
}

.block { display: grid; gap: 8px; padding: 10px; border: 1px solid #e5e7eb; border-radius: 8px; background: #ffffff; }
.block-title { margin: 0; font-size: 14px; color: #0f172a; font-weight: 600; }

input { padding: 4px 8px; border: 1px solid #d1d5db; border-radius: 4px; font-size: 13px; outline: none; height: 32px; }
input:focus { border-color: #42b883; box-shadow: 0 0 0 2px rgba(66,184,131,0.1); }
button { cursor: pointer; padding: 4px 8px; border-radius: 4px; border: 1px solid #d1d5db; background: #ffffff; }
button:hover { border-color: #42b883; }

.muted { color: #6b7280; }
</style>
