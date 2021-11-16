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
        path:'',
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
    path: '/analysis',
    name: 'Analysis',
    component: () => import('../views/Analysis.vue')
  },
  {
    path: '/channel',
    name: 'Channel',
    component: () => import('../views/Channel.vue')
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: () => import('../views/Mypage.vue'),
    children: [
      {
        path:'',
        component: () => import('../views/UserInfo.vue'),
      },
      {
        path:'purchase-history',
        component: () => import('../views/PurchaseHistory.vue'),
      }
    ]
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
