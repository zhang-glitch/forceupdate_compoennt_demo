import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/test",
    children: [
      {
        path: '/test',
        component: () => import("../views/Test.vue")
      }
    ]
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})