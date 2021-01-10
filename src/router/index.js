import Vue from 'vue'
import VueRouter from 'vue-router'
import Submit from '@/views/Submit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Submit
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "services" */'@/views/Services.vue')
  },
  {
    path: '/documents',
    name: 'documents',
    component: () => import(/* webpackChunkName: "documents" */ '@/views/Documents.vue')
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
