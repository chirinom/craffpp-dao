import { ethers } from 'ethers'
import { abi, contractAddress } from '../../utils/constants'

const { ethereum } = window
const provider =  new ethers.providers.Web3Provider(ethereum)
const signer = provider.getSigner()

const state = {
  currentAccount: '',
  currentTicketType: 0,
  currentTicketValue: 0,
  currentPoolDateCode: '',
  filterObject: {
    type: '',
    month: ''
  },
  isLoading: false,
  allTransactions: []
};
const getters = {
  currentTicketType: (state) => state.currentTicketType,
  currentTicketValue: (state) => state.currentTicketValue,
  keyword: (state) => state.currentTicketType + state.currentPoolDateCode,
  filterObject: (state) => state.filterObject,
  isLoading: (state) => state.isLoading,
  allTransactions: (state) => state.allTransactions
};
const actions = {
  async sendTransaction ({commit, getters}) {
    commit('setIsLoading', true)
    try {
      if (ethereum) {
        const addressTo = process.env.VUE_APP_SEND_TO_ADDRESS
        const parsedAmount = ethers.utils.parseEther(state.currentTicketValue.toString())

        const transacionsContract = new ethers.Contract(contractAddress, abi, signer)
        const transactionHash = await transacionsContract.addToBlockchain(
          addressTo,
          parsedAmount,
          state.currentPoolDateCode,
          state.currentTicketType,
          getters.keyword,
          {value: parsedAmount._hex}
        )

        await transactionHash.wait();
        commit('setIsLoading', false)
        window.location.reload(); 
      }
    } catch (e) {
      console.error(e);
      commit('setIsLoading', false)
      throw new Error("No ethereum object");
    }
  },
  getAllTransactions ({commit}) {
    return new Promise((resolve, reject) => {
      if (ethereum) {
        const transacionsContract = new ethers.Contract(contractAddress, abi, this.currentAccount? signer: provider)
        transacionsContract.getAllTransactions().then(
          response => {
            const parcedTransactions = response.map((ticket) => ({
              addressTo: ticket.receiver,
              addressFrom: ticket.sender,
              timestamp: new Date(ticket.timestamp.toNumber() * 1000).toLocaleString(),
              poolType: ticket.pool_type,
              month: ticket.month,
              keyword: ticket.keyword,
              amount: parseInt(ticket.amount._hex) / (10 ** 18)
            }));
            commit('setAllTransactions', parcedTransactions)
            resolve(parcedTransactions)
          },
          error => {
            reject(error)
          }
        )
      }
    })
  },
  connectWallet () {
    return new Promise ((resolve, reject) => {
      if (!ethereum) return alert('Please install Metamask')
      ethereum.request({method: 'eth_requestAccounts'}).then(
        response => {
          resolve(response)
          window.location.reload(); 
        },
        error => {
          reject(error)
        }
      )
    })
  },
  checkIfWalletIsConnect () {
    return new Promise ((resolve, reject) => {
      if (!ethereum) return alert('Please install Metamask')
      ethereum.request({method: 'eth_accounts'}).then(
        response => {
          if (response.length) {
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
};
const mutations = {
  setCurrentAccount: (state, data) => state.currentAccount = data,
  setCurrentTicketType: (state, data) => state.currentTicketType = data,
  setCurrentTicketValue: (state, data) => state.currentTicketValue = data,
  setCurrentPoolDateCode: (state, data) => state.currentPoolDateCode = data,
  setKeyword: (state, data) => state.keyword = data,
  setFilterObject: (state, data) => {
    data.length === 7
    ? state.filterObject.month = data
    : state.filterObject.type = data
  },
  setIsLoading: (state, data) => state.isLoading = data,
  setAllTransactions: (state, data) => state.allTransactions = data,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
