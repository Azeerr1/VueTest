import Vue from 'vue'
import VueRouter from 'vue-router'
import Projets from '../views/Projets.vue'


Vue.use(VueRouter)

const routes = [
   {
    path: '/Projets',
    name: 'Projets',
    component: Projets
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
