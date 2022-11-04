import { ethers } from 'ethers'
import { ticketsAbi, ticketsContractAddress } from '../../utils/constants'

const { ethereum } = window
const provider = new ethers.providers.Web3Provider(ethereum)
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
  allTickets: [],
  ethBalance: 0,
  ethHexBalance: 0
}
const getters = {
  currentAccount: (state) => state.currentAccount,
  currentTicketType: (state) => state.currentTicketType,
  currentTicketValue: (state) => state.currentTicketValue,
  keyword: (state) => state.currentTicketType + state.currentPoolDateCode,
  filterObject: (state) => state.filterObject,
  isLoading: (state) => state.isLoading,
  allTickets: (state) => state.allTickets,
  ethBalance: (state) => state.ethBalance,
}
const actions = {
  async getBalance ({commit}) {
    try {
      if (ethereum) {
        const ticketsContract = new ethers.Contract(ticketsContractAddress, ticketsAbi, signer)
        const transactionsHash = await ticketsContract.getBalance()
        const data = {value: parseInt(transactionsHash._hex) / (10 ** 18)}
        commit('setBalance', data)
      }
    } catch (e) {
      console.error(e)
      throw new Error('No ethereum object')
    }
  },
  async withdraw({}) {
    try {
      if (ethereum) {
        const parsedAmount = ethers.utils.parseEther(state.ethBalance.value.toString())
        const ticketsContract = new ethers.Contract(ticketsContractAddress, ticketsAbi, signer)
        await ticketsContract.transferEther('0x612284E26DC7F428Bd6aAC24B1a7b1b0c827A21c', parsedAmount._hex)
      }
    } catch (e) {
      console.error(e)
      throw new Error('No ethereum object')
    }
  },
  async sendTransaction ({commit, getters}) {
    commit('setIsLoading', true)
    try {
      if (ethereum) {
        const parsedAmount = ethers.utils.parseEther(state.currentTicketValue.toString())
        const ticketsContract = new ethers.Contract(ticketsContractAddress, ticketsAbi, signer)
        const ticketsHash = await ticketsContract.buyTicket(
          parsedAmount,
          state.currentAccount,
          state.currentPoolDateCode,
          state.currentTicketType,
          getters.keyword,
          {value: parsedAmount._hex}
        )

        await ticketsHash.wait()
        commit('setIsLoading', false)
        window.location.reload() 
      }
    } catch (e) {
      console.error(e)
      commit('setIsLoading', false)
      throw new Error('No ethereum object')
    }
  },
  getAllTickets ({commit}) {
    return new Promise((resolve, reject) => {
      if (ethereum) {
        const ticketsContract = new ethers.Contract(ticketsContractAddress, ticketsAbi, this.currentAccount? signer: provider)
        ticketsContract.getAllTickets().then(
          response => {
            const parcedTickets = response.map((ticket) => ({
              ticketOwner: ticket.ticket_owner,
              timestamp: new Date(ticket.timestamp.toNumber() * 1000).toLocaleString(),
              poolType: ticket.pool_type,
              month: ticket.month,
              keyword: ticket.keyword,
              amount: parseInt(ticket.amount._hex) / (10 ** 18)
            }))
            commit('setAllTickets', parcedTickets)
            resolve(parcedTickets)
          },
          error => {
            reject(error)
          }
        )
      }
    })
  },
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
  setAllTickets: (state, data) => state.allTickets = data,
  setBalance: (state, data) => state.ethBalance = data,

  
}

export default {
  state,
  getters,
  actions,
  mutations,
}
