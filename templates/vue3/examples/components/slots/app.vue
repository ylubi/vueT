<script setup>
import Child from './Child.vue'
</script>

<template>
  <section>
    <div class="container">
      <div class="section-container">
        <h1>插槽演示</h1>
        <span class="desc">具名插槽与作用域插槽</span>
        <div class="section-item col">
          <span class="remark">组件：</span>
          <span class="code" style="display:block;width:100%">
            <Child>
              <template #header>自定义头部</template>
              <template #default="{ count }">默认插槽：{{ count }}</template>
              <template #footer>底部</template>
            </Child>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container { display: grid; gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb; }
.section-container { display: grid; gap: 8px; padding: 12px; border: 1px solid #2ba46d; border-radius: 8px; background: #ffffff; }
.section-container h1 { font-size: 18px; font-weight: 600; color: #1f2937; }
.section-container .desc { font-size: 14px; font-weight: 500; color: #4b5563; }
.section-item { display: flex; align-items: flex-start; gap: 8px; }
.section-item .remark { font-size: 14px; color: #333; margin-top: 6px; }
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
  flex: 1;
}
.col { flex-direction: column; display: flex; align-items: flex-start; }
</style>
