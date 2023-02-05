import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from "vue-router";
import router from './router/index'

// 引入Element组件
import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
// 引入axios组件
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

//应用插件
Vue.use(Element)
Vue.use(VueRouter)

new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
