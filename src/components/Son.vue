<script setup>
import { inject, ref, watch } from 'vue'

const props = defineProps({
  info: Object,
})

const getData = inject("getData")

const handleBtn = () => {
  console.log("重新请求")
  getData()
}

watch(() => props.info, () => {
  console.log("=======")
})

</script>

<template>
  <div>
    <div v-for="item in info.list" :key="item.value">{{ item.label }}</div>
    <div>page: {{ info.list.length }}</div>
    <button @click="handleBtn">重新请求</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
