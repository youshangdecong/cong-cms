import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    component: () => import('../components/home.vue')
  },
  {
    path: '/about',
    component: () => import('../components/about.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
