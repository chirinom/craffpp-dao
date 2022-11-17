import { notify } from '@kyvg/vue3-notification'
const { ethereum } = window

const state = {
  currentAccount: '',
}
const getters = {
  currentAccount: (state) => state.currentAccount,
  isAdmin: (state) => (state.currentAccount.toLowerCase() === process.env.VUE_APP_ADMIN_ACCOUNT.toLowerCase())
}
const actions = {
  async connectWallet({commit}) {
    try {
      const result = await ethereum.request({method: 'eth_requestAccounts'})
      if (result.length) {
        commit('setCurrentAccount', result[0])
        window.location.reload() 
      }
    } catch (e) {
      notify({title: 'Please install Metamask', type: 'warn'})
      console.error(e)
      throw new Error('No ethereum object')
    }
  },
  async checkIfWalletIsConnect({commit}) {
    try {
      const result = await ethereum.request({method: 'eth_accounts'})
      result.length ? commit('setCurrentAccount', result[0]) : null
    } catch (e) {
      console.error(e)
      throw new Error('No ethereum object')
    }
  },
}
const mutations = {
  setCurrentAccount: (state, data) => state.currentAccount = data,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
