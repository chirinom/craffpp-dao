import { createStore } from 'vuex';

import contract from './modules/contract'
import controller from './modules/controller'

export default createStore({
  modules: {
    contract,
    controller
  },
});
