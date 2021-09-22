import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "registration" */'@/views/Registration.vue')
  },
  {
    path: '/partner',
    name: 'partner',
    component: () => import(/* webpackChunkName: "partner" */'@/views/Partner.vue')
  },
  {
    path: '/dgtek-calculator',
    name: 'dgtek-calculator',
    component: () => import(/* webpackChunkName: "calculator" */'@/views/Calculator.vue')
  },
  {
    path: '/sms-send',
    name: 'sms-send',
    component: () => import('@/components/popups/SendSMS.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "" */ '@/views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
