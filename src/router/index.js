import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/About.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import(/* webpackChunkName: "contact" */ '@/components/Details.vue'),
    props: true
  },
  {
    path: '/places',
    name: 'places',
    component: () => import(/* webpackChunkName: "contact" */ '@/components/Places.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
