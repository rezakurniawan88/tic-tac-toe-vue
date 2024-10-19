import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StarterView from '@/views/StarterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'starter',
      component: StarterView,
    },
    {
      path: '/tictactoe',
      name: 'tictactoe',
      component: HomeView,
    },
  ],
})

export default router
