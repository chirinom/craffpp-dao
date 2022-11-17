import { ethers } from 'ethers'
import { ticketsAbi, ticketsContractAddress } from '../../utils/constants'
import { notify } from '@kyvg/vue3-notification'
import store from '@/store/index.js'

const API_KEY = process.env.VUE_APP_API_KEY

const state = {
  currentTicketType: 0,
  currentTicketValue: 0,
  currentPoolDateCode: '',
  filterObject: { type: '', month: ''},
  isLoading: false,
  allTickets: [],
  ethBalance: 0,
  withdrawAddress: ''
}
const getters = {
  currentTicketType: (state) => state.currentTicketType,
  currentTicketValue: (state) => state.currentTicketValue,
  keyword: (state) => state.currentTicketType + state.currentPoolDateCode,
  filterObject: (state) => state.filterObject,
  isLoading: (state) => state.isLoading,
  allTickets: (state) => state.allTickets,
  ethBalance: (state) => state.ethBalance,
  withdrawAddress: (state) => state.withdrawAddress,
}
const actions = {
  async getBalance ({commit}) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const ticketsContract = new ethers.Contract(ticketsContractAddress, ticketsAbi, signer)
        const transactionsHash = await ticketsContract.getBalance()
        const data = parseInt(transactionsHash._hex) / (10 ** 18)
        commit('setBalance', data)
      }
    } catch (e) {
      console.error(e)
      throw new Error('No ethereum object')
    }
  },
  async withdrawFromContract({}) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const ticketsContract = new ethers.Contract(ticketsContractAddress, ticketsAbi, signer)
        const parsedAmount = ethers.utils.parseEther(state.ethBalance.toString())
        await ticketsContract.transferEther(state.withdrawAddress, parsedAmount._hex)
      }
    } catch (e) {
      console.error(e)
      throw new Error('No ethereum object')
    }
  },
  async sendTransaction ({commit, getters}) {
    commit('setIsLoading', true)
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const ticketsContract = new ethers.Contract(ticketsContractAddress, ticketsAbi, signer)
        const parsedAmount = ethers.utils.parseEther(state.currentTicketValue.toString())
        const ticketsHash = await ticketsContract.buyTicket(
          parsedAmount,
          store.getters.currentAccount,
          state.currentPoolDateCode,
          state.currentTicketType,
          getters.keyword,
          {value: parsedAmount._hex}
        )
        
        await ticketsHash.wait()
        notify({title: 'Succesfully bought (1) ' + state.currentTicketType + ' ticket for ' + state.currentPoolDateCode + ' raffle 🎉'})
        await new Promise(resolve => setTimeout(resolve, 4444))
        commit('setIsLoading', false)
        window.location.reload() 
      } 
    } catch (e) {
      console.error(e)
      commit('setIsLoading', false)
      e.error.code === -32000 ? notify({title: 'Insuficient Funds 😿', type: 'warn'}) : null
      throw new Error('No ethereum object')
    }
  },
  async getAllTickets({commit}) {
    try {
      const provider = new ethers.providers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/${API_KEY}`)
      const ticketsContract = new ethers.Contract(ticketsContractAddress, ticketsAbi, provider)
      const allTicketsHash = await ticketsContract.getAllTickets()
      const parcedTickets = allTicketsHash.map((ticket) => ({
        ticketOwner: ticket.ticket_owner,
        timestamp: new Date(ticket.timestamp.toNumber() * 1000).toLocaleString(),
        poolType: ticket.pool_type,
        month: ticket.month,
        keyword: ticket.keyword,
        amount: parseInt(ticket.amount._hex) / (10 ** 18)
      }))
      commit('setAllTickets', parcedTickets)
    } catch (e) {
      console.error(e)
    }
  },
}
const mutations = {
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
  setWithdrawAddress: (state, data) => state.withdrawAddress = data,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
