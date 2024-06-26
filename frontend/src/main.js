import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-loaders/dist/vue-loaders.css'
import VueLoaders from 'vue-loaders'
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)

// Plugins
app.use(Notifications)
app.use(VueLoaders)

// Store and router
app.use(store)
app.use(router)

// Mount
app.mount('#app')
