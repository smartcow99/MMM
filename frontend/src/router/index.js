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
  {
    path:'/404',
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path:'/:pathMatch(.*)*',
    redirect:'/404'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to,from,next)=>{
  console.log(next)
  const getCookie = (name) => {
      const value = document.cookie.match(`(^|;)?${name}=([^;]*)(;|$)`);
      return value? value[2] : null;
  };
  if(getCookie('login')==='logined' && store.state['userInfo'].isLogined===false) {
    store.dispatch('requestUserInfo');
  }
  if(store.state['loginPageOn']===true) {
    store.commit('setLoginPageOn',false);
  }
  else if(store.state['uploadShortPageOn']===true) {
    store.commit('setUploadShortPageOn',false);
  }
  else if(store.state['shortPageOn']===true) {
    store.commit('setShortPageOn',false);
  }
  switch(to.path) {
    case '/': {
      store.dispatch('getRecommendShorts');
      break;
    }
    case '/channelshort': {
      if(!!to.query['channelId']) {
        store.dispatch('requestChannelInfo',to.query['channelId']);
      }
      break;
    }
    case '/search/':{
      if(!!to.query['content']) {
        store.dispatch('requestSearch',{
          'type':'short',
          'content':to.query['content']
        });
      }
      break;
    }
    case '/search/channels':{
      if(!!to.query['content']) {
        store.dispatch('requestSearch',{
          'type':'channel',
          'content':to.query['content']
        });
      }
      break;
    }
    case '/search/products':{
      if(!!to.query['content']) {
        store.dispatch('requestSearch',{
          'type':'product',
          'content':to.query['content']
        });
      }
      break;
    }
    case '/channel': {
      if(!!to.query['channelId']) {
        store.dispatch('requestChannelInfo',to.query['channelId']);
      }
    }
    case '/product': {
      if(!!to.query['productId']) {
        store.dispatch('requestProductInfo',to.query['productId']);
      }
    }
  }
  next();
})
export default router;
