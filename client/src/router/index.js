import { createRouter, createWebHistory } from 'vue-router'
import Shop from '../views/Shop.vue'
import Admin from '../views/Admin.vue'
import PlanetChart from '../components/PlanetChart'

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
    path: '/pchart',
    name: 'pchart',
    component: PlanetChart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
