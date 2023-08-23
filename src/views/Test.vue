<template>
  <Tabs v-model:activeKey="activeKey">
    <TabPane
      v-for="item in tabs"
      :key="item.id"
      :tab="item.title"
      :disabled="isDisabled && item.id != '1' && item.id != '2'"
    >
      <!-- <div v-if="!isDisabled"> -->
      <!-- <div > -->
      <component :is="item.component" :key="item.id" v-show="!isDisabled" :info="{id}"></component>
      <!-- </div> -->
      <div v-show="isDisabled">
        待分配 
        <br>
        <button @click="handlebtn">按钮</button>
      </div>
    </TabPane>
  </Tabs>
</template>

<script setup>
import { TabPane, Tabs } from "ant-design-vue";
import { ref } from "vue";
import Example1 from "../components/Example1.vue";
import Example2 from "../components/Example2.vue";
import Example3 from "../components/Example3.vue";
import Example4 from "../components/Example4.vue";
const id = ref('')
fetch('http://json.schemastore.org/lerna').then(res => res.json()).then(res => {
  console.log("res22222222222222222222222", res)
  id.value = res.$id
})
const tabs = [
  {
    id: "1",
    title: "zh1",
    component: Example1,
  },
  {
    id: "2",
    title: "zh2",
    component: Example2,
  },
  {
    id: "3",
    title: "zh3",
    component: Example3,
  },
  {
    id: "4",
    title: "zh4",
    component: Example4,
  },
];

const isDisabled = ref(true);
const activeKey = ref("1");

const handlebtn = () => {
  console.log("===");
  isDisabled.value = false;
};
</script>

