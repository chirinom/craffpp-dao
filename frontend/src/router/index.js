import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HowItwork from '../views/HowItwork.vue';
import ContributionView from '../views/ContributionView.vue';
import ControllerView from '../views/ControllerView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/how',
    name: 'howItWork',
    component: HowItwork,
  },
  {
    path: '/best-part',
    name: 'contributionView',
    component: ContributionView,
  },
  {
    path: '/controller',
    name: 'ControllerView',
    component: ControllerView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
