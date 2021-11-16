import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
    children: [
      {
        path:'shorts',
        component: () => import('../views/ShortSearch.vue')
      },
      {
        path:'channels',
        component: () => import('../views/ChannelSearch.vue')
      },
      {
        path:'products',
        component: () => import('../views/ProductSearch.vue')
      },
    ],
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
