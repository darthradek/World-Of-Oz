import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './views/Homepage.vue'
import Shop from './views/Shop.vue'
import Basket from './views/Basket'
import Register from './views/Register'
import Loginpage from './views/Loginpage'
import Productcard from './views/Productcard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/productcard',
      name: 'productcard',
      component: Productcard
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: Loginpage
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    }
  ]
})
