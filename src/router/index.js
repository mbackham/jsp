import Vue from 'vue'
import Router from 'vue-router'
import Shopmall from '@/components/pages/shopmall'
import Register from '@/components/pages/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shopmall',
      component: Shopmall
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
