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
  // {
  //   path: '/service-order',
  //   name: 'service-order',
  //   component: () => import(/* webpackChunkName: "service-order" */'@/views/Submit.vue')
  // },
  // {
  //   path: '/services',
  //   name: 'services',
  //   component: () => import(/* webpackChunkName: "services" */'@/views/Services.vue')
  // },
  // {
  //   path: '/documents',
  //   name: 'documents',
  //   component: () => import(/* webpackChunkName: "documents" */ '@/views/Documents.vue')
  // },
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
