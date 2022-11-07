const { ethereum } = window

const state = {
  currentAccount: '',
}
const getters = {
  currentAccount: (state) => state.currentAccount,
  isAdmin: (state) => (state.currentAccount.toLowerCase() === process.env.VUE_APP_ADMIN_ACCOUNT.toLowerCase())
}
const actions = {
  connectWallet({commit}) {
    return new Promise ((resolve, reject) => {
      if (!ethereum) return alert('Please install Metamask')
      ethereum.request({method: 'eth_requestAccounts'}).then(
        response => {
          if (response.length) {
            commit('setCurrentAccount', response[0])
            resolve(response[0])
            window.location.reload() 
          } else {
            console.log('No accounts found')
          }
        },
        error => {
          reject(error)
        }
      )
    })
  },
  checkIfWalletIsConnect({commit}) {
    return new Promise ((resolve, reject) => {
      if (!ethereum) return alert('Please install Metamask')
      ethereum.request({method: 'eth_accounts'}).then(
        response => {
          if (response.length) {
            commit('setCurrentAccount', response[0])
            console.log(response[0].toLowerCase() === process.env.VUE_APP_ADMIN_ACCOUNT.toLowerCase())
            resolve(response[0])
          } else {
            console.log('No accounts found')
          }
        },
        error => {
          reject(error)
        }
      )
    })
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
