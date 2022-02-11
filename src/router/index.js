import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home/1'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '1',
        name: '1',
        component: () => import('../components/Form1.vue')
      },
      {
        path: '2',
        name: '2',
        component: () => import('../components/Form2.vue')
      },
      {
        path: '3',
        name: '3',
        component: () => import('../components/Form3.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
