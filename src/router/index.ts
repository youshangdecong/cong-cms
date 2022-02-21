import { pccatch } from '@/utils/catch'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    children: [
      {
        path: '/main',
        redirect: '/main/analysis/overview'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = pccatch.getCatch('token')

    if (!token) {
      console.log('1')

      return '/login'
    }
  }

  // if (to.path === '/mian') {

  // }
})
export default router
