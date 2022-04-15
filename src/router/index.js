import Vue from 'vue'
import Router from 'vue-router'
 

Vue.use(Router)

// 根路由
const routes = [
  {
    path: '/',
    name: 'fragment',
    component: () => import('@/layout/Fragment.vue'),
    meta: {
      title: '系统主页'
    },
    // 主页面子路由 
    children:[ 
      {
        path: 'socketTest',
        name: 'socketTest',
        component: () => import('@/views/socketTest/SocketTest.vue'),
        meta: { 
          title: '测试Socket' 
        }
      },
      {
        path: 'meterData',
        name: 'meterData',
        component: () => import('@/views/meterData/MeterData.vue'),
        meta: { 
          title: '电表参数' 
        }
      },
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import ('@/views/login/Login.vue')
  }

]

const router =  new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'login' && !window.localStorage.getItem('user')) {
    next({name: 'login'})
  }
  else {
    next()
  }
})


export default router