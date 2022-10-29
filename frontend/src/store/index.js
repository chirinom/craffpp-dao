import { createStore } from 'vuex';

import contract from './modules/contract'
import winners from './modules/winners'

export default createStore({
  modules: {
    contract,
    winners
  },
});
