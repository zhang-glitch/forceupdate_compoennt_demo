import { createApp } from 'vue'
import App from './App.vue'
import echarts from "./utils/echarts.js"
// import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import router from "./router";

const app = createApp(App)
app.config.globalProperties.$echarts = echarts

app.use(router).mount('#app')
