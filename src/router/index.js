import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/foods',
    name: 'Foods',
    component: () => import('../views/Foods.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/Success.vue')
  },
  {
    path: '/carts',
    name: 'Carts',
    component: () => import('../views/Carts.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
