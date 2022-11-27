import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-loaders/dist/vue-loaders.css'
import VueLoaders from 'vue-loaders'
import Notifications from '@kyvg/vue3-notification'
import VueConfetti from 'vue-confetti'

createApp(App)
  .use(VueConfetti)
  .use(Notifications)
  .use(VueLoaders)
  .use(store)
  .use(router)
  .mount('#app')
