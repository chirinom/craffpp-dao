import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayView from '../views/PlayView.vue'
import HowItwork from '../views/HowItwork.vue'
import ControllerView from '../views/ControllerView.vue'
import TermsView from '../views/TermsView.vue'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView,
  },
  {
    path: '/play',
    name: 'PlayView',
    component: PlayView,
  },
  {
    path: '/how',
    name: 'howItWork',
    component: HowItwork,
  },
  {
    path: '/controller',
    name: 'ControllerView',
    component: ControllerView,
  },
  {
    path: '/terms',
    name: 'TermsView',
    component: TermsView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
