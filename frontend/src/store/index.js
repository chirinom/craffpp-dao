import { createStore } from 'vuex'

import tickets from './modules/tickets'
import winners from './modules/winners'
import wallet_connection from './modules/wallet_connection'

export default createStore({
  modules: {
    tickets,
    winners,
    wallet_connection
  },
})
