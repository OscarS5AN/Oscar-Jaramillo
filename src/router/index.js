import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Comunas from '../views/Comunas.vue'
import EditarComuna from '../components/comunas/EditarComuna.vue'
import NewComuna from '../components/comunas/NewComuna.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/comunas',
    name: 'Comunas',
    component: Comunas
  },
  {
    path: '/editar-comuna/:id',
    name: 'EditarComuna',
    component: EditarComuna
  },
  {
    path: '/add-comuna',
    name: 'NewComuna',
    component: NewComuna
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router