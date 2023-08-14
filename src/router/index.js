import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test1',
    name: 'test1',
    component: () => import(/* webpackChunkName: "about" */ '../views/TestOne.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
