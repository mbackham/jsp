import Vue from 'vue'
import Router from 'vue-router'
import Shopmall from '@/components/pages/shopmall'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shopmall',
      component: Shopmall
    }
  ]
})
