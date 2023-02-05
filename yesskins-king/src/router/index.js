//该文件应用于创建整个应用的路由器
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import BoxHome from "@/views/BoxHome";
import Main from "../components/Main";
Vue.use(VueRouter)


//创建并暴露一个路由器
export default new VueRouter({
  routes: [
    //  进入首先加载主页面
    {
      path: '/',
      component: Main
    },
    {
      path: '/BoxHome',
      component: BoxHome
    },

  ]
})
