import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/note',
    name: 'Note',
    component: () => import('../pages/Note.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
