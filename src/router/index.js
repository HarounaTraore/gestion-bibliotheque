import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import ListeLivres from '../components/livres/ListeLivres.vue'
import ListeMembres from '../components/membres/ListeMembres.vue'
import ListePrets from '../components/prets/ListePrets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/livres',
      name: 'livres',
      component: ListeLivres
    },
    {
      path: '/membres',
      name: 'membres',
      component: ListeMembres
    },
    {
      path: '/prets',
      name: 'prets',
      component: ListePrets
    },
  ]
})

export default router
