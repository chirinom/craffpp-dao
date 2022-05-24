import { createStore } from 'vuex';

import pools_info from './modules/pools_info'
import contract from './modules/contract'
import controller from './modules/controller'

export default createStore({
  modules: {
    pools_info,
    contract,
    controller
  },
});
