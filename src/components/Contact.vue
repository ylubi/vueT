<script setup>
import { ref } from 'vue'

const qqQun = ref('725190771')
const qqQunElementRef = ref(null)
const displayedQqQun = ref(qqQun.value)

function copyQqQun() {
  navigator.clipboard.writeText(qqQun.value)
  displayedQqQun.value = '已复制'

  if (qqQunElementRef.value) {
    qqQunElementRef.value.classList.add('move-up-animation')
    qqQunElementRef.value.addEventListener('animationend', () => {
      qqQunElementRef.value.classList.remove('move-up-animation')
    }, { once: true })
  }

  setTimeout(() => {
    displayedQqQun.value = qqQun.value
  }, 1000)
}
</script>

<template>
  <div class="contact">
    <label class="contact-label" for="qq-qun">QQ群：</label>
    <span @click="copyQqQun" class="contact-value" id="qq-qun" ref="qqQunElementRef">{{ displayedQqQun }}</span>
  </div>
</template>

<style scoped>
.contact {
  display: inline-flex;
  float: right;
  height: 100%;
  align-items: center;
  margin-right: 30px;
}

.contact-label {
  margin-right: 4px;
  font-size: 14px;
  color: #666666;
  font-weight: 500;
}

.contact-value {
  font-size: 14px;
  color: #333333;
  font-weight: 500;
  cursor: pointer;
  min-width: 68px;
}

.move-up-animation {
  animation: move-up 0.3s ease-out;
}

@keyframes move-up {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
