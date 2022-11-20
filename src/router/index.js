import Vue from 'vue'
import Router from 'vue-router'
 

Vue.use(Router)

// 根路由
export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    redirect: '/home/dashboard',
    name: 'fragment',
    component: () => import('@/layout/Fragment.vue'),
    meta: {
      title: '系统主页'
    },
    // 主页面子路由 
    children:[ 
      {
        path: 'dashBoard',
        name: 'dashBoard',
        component: () => import('@/views/dashBoard/DashBoard.vue'),
        meta: { 
          title: '我的设备' 
        }
      },
      {
        path: 'entrance-authority',
        name: 'entrance-authority',
        component: () => import('@/views/entrance/entranceAuthority/EntranceAuthority.vue'),
        meta: { 
          title: '门禁权限' 
        }
      },
      {
        path: 'entrance-log',
        name: 'entrance-log',
        component: () => import('@/views/entrance/entranceLog/EntranceLog.vue'),
        meta: { 
          title: '门禁日志' 
        }
      },
      // {
      //   path: 'socketTest',
      //   name: 'socketTest',
      //   component: () => import('@/views/socketTest/SocketTest.vue'),
      //   meta: { 
      //     title: '测试Socket' 
      //   }
      // },
      // {
      //   path: 'meterData',
      //   name: 'meterData',
      //   component: () => import('@/views/meterData/MeterData.vue'),
      //   meta: { 
      //     title: '电表参数' 
      //   }
      // },
      {
        path: 'monitor',
        name: 'monitor',
        component: () => import('@/views/monitor/Monitor.vue'),
        meta: { 
          title: '视频监控' 
        }
      },
      {
        path: 'device-control',
        name: 'device-control',
        component: () => import('@/views/deviceControl/DeviceControl.vue'),
        meta: { 
          title: '设备操控' 
        }
      },
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import ('@/views/login/Login.vue'),
    meta: { 
      title: '登录页' 
    }
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
  if(to.meta.title){
    document.title = to.meta.title;
  }
})


export default router