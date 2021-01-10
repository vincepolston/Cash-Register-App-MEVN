import { createRouter, createWebHistory } from 'vue-router'
import Shop from '../views/Shop.vue'
import Admin from '../views/Admin.vue'
import ExampleChart from '../components/ExampleChart'

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/example-chart',
    name: 'ExampleChart',
    component: ExampleChart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
