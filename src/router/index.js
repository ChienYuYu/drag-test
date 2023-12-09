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
  },
  {
    path: '/sample6',
    name: 'sample6',
    component: () => import('../views/s6/SampleSix.vue')
  },
  {
    path: '/sample7',
    name: 'sample7',
    component: () => import('../views/s7/SampleSeven.vue')
  },
  {
    path: '/sample8',
    name: 'sample8',
    component: () => import('../views/s8/SampleEight.vue')
  },
  {
    path: '/sample9',
    name: 'sample9',
    component: () => import('../views/s9/SampleNine.vue')
  },
  {
    path: '/sample9-1',
    name: 'sample9-1',
    component: () => import('../views/s9-1/SampleNine-1.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
