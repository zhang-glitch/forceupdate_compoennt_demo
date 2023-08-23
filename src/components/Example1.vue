<template>
  <div class="example1">{{ $attrs.info.id }}</div>
</template>

<script lang="ts" setup>
import { ref, useAttrs } from "vue";
console.log("重新记载111111111")
defineOptions({
  inheritAttrs: false
})

console.log("useAttrs", useAttrs())
// const id = ref("")

// fetch('http://json.schemastore.org/lerna').then(res => res.json()).then(res => {
//   console.log("res", res)
//   id.value = res.$id
// })
</script>

<style scoped lang="scss"></style>
