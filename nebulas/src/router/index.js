import Vue from 'vue'
import Router from 'vue-router'
import Main from '../Main/Main.vue'

Vue.use(Router)
// 主页
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main
    }
  ]
})
