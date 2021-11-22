import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from '../store';
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/ShortSearch.vue"),
      },
      {
        path: "channels",
        component: () => import("../views/ChannelSearch.vue"),
      },
      {
        path: "products",
        component: () => import("../views/ProductSearch.vue"),
      },
    ],
  },
  {
    path: "/analysis",
    name: "Analysis",
    component: () => import("../views/Analysis.vue"),
  },
  {
    path: "/channel",
    name: "Channel",
    component: () => import("../views/Channel.vue"),
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: () => import("../views/MyPage.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/UserInfo.vue"),
      },
      {
        path: "purchase-history",
        component: () => import("../views/PurchaseHistory.vue"),
      },
    ],
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/channelshort",
    name: "ChannelShort",
    component: () => import("../views/ChannelShort.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to,from,next)=>{
  if(store.state['loginPageOn']==true) {
    store.commit('setLoginPageOn',false);
    next(from);
  }
  else if(store.state['uploadShortPageOn']==true) {
    store.commit('setUploadShortPageOn',false);
    next(from);
  }
  else if(store.state['shortPageOn']==true) {
    store.commit('setShortPageOn',false);
    next(from);
  }
  else {
    next();
  }

})
export default router;
