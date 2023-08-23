<script setup>
// import { provide, ref, getCurrentInstance, onMounted } from "vue"
// import {option} from "./data"
// // import Son from "./components/Son.vue"
// // const info = ref({})

// // const queryData = () => {
// //   fetch("/api").then(res => res.json()).then(res => {
// //     console.log("res", res)
// //     info.value = res
// //   })
// // }
// // queryData()

// // provide("getData", queryData)
// const chartsRef = ref()

// onMounted(() => {
//   const echarts = getCurrentInstance().appContext.config.globalProperties.$echarts

//   if (chartsRef.value) {
//     const graphEchart = echarts.init(chartsRef.value)
//     graphEchart.setOption(option)
//   }
// })

</script>

<template>
  <!-- <Son :info="info" /> -->
  <!-- <div class="custom-content-echart" ref="chartsRef"></div> -->
<div>
  <router-view></router-view>
</div>
</template>

<style scoped>
.custom-content-echart {
  width: 800px;
  height: 800px;
}

html, body, #app {
  width: 100%;
  height: 100%;
}
</style>
