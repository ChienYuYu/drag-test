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
    path: '/sample2',
    name: 'sample2',
    component: () => import('../views/s2/SampleTwo.vue')
  },
  {
    path: '/sample3',
    name: 'sample3',
    component: () => import('../views/s3/SampleThree.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
