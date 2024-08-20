import { createRouter, createWebHistory } from 'vue-router'

import ListeLivres from '../components/livres/ListeLivres.vue'
import ListeMembres from '../components/membres/ListeMembres.vue'
import ListePrets from '../components/prets/ListePrets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../components/livres/ListeLivres.vue')
    }
  ]
})

export default router
