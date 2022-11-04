import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayView from '../views/PlayView.vue'
import HowItwork from '../views/HowItwork.vue'
import ContributionView from '../views/ContributionView.vue'
import ControllerView from '../views/ControllerView.vue'
import TermsView from '../views/TermsView.vue'
import store from '@/store/index.js'


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
    path: '/contribution',
    name: 'contributionView',
    component: ContributionView,
  },
  {
    path: '/controller',
    name: 'ControllerView',
    component: () => {
      if (store.getters.currentAccount.toLowerCase() === process.env.VUE_APP_ADMIN_ACCOUNT.toLowerCase()) {
        return ControllerView
      } else {
        return HomeView
      }
    },
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
