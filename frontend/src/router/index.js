import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/analytic',
    name: 'Analytic',
    component: () => import('../views/Analytic.vue')
  },
  {
    path: '/Channel',
    name: 'Channel',
    component: () => import('../views/Channel.vue')
  },
  {
    path: '/Mypage',
    name: 'Mypage',
    component: () => import('../views/Mypage.vue')
  },
  {
    path: '/Product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
