import Vue from 'vue'
import VueRouter from 'vue-router'
import Submit from '@/views/Submit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SubmitOrder',
    component: Submit
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/Services.vue')
  },
  {
    path: '/services/:serviceSlug',
    name: 'Service',
    component: () => import(/* webpackChunkName: "service" */ '@/views/Service.vue')
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
