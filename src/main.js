// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

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
  connection: 'http://localhost:5000'
}))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
