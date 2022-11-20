// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入moment
import moment from 'moment'; //导入模块
moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn'); 
Vue.prototype.$moment = moment;//赋值使用
// 引入echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
// 引入iconfont
import '@/assets/icon/iconfont.js'
import IconSvg from '@/components/icon-svg/IconSvg.vue'
Vue.component('icon-svg', IconSvg)
// 引入vue-socket.io
import VueSocketIO from 'vue-socket.io'
// 引入全局样式
import './index.css'
// 引入ElementUI
import ElementUI from 'element-ui';
// 引入ElementUI全局样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:9099'
}))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
