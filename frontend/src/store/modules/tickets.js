import { ethers } from 'ethers'
import { ticketsAbi, ticketsContractAddress } from '../../utils/constants'
import { notify } from '@kyvg/vue3-notification'

const API_KEY = process.env.VUE_APP_API_KEY

const state = {
  currentTicketType: 0,
  currentTicketValue: 0,
  currentPoolDateCode: '',
  filterObject: { type: '', month: ''},
  isLoading: false,
  allTickets: [],
  ethBalance: 0,
  poolDateCode: '',
  poolsData: [],
  ticketData: [],
  winProbability: 0
}
const getters = {
  currentTicketType: (state) => state.currentTicketType,
  currentTicketValue: (state) => state.currentTicketValue,
  keyword: (state) => state.currentTicketType + state.currentPoolDateCode,
  filterObject: (state) => state.filterObject,
  isLoading: (state) => state.isLoading,
  allTickets: (state) => state.allTickets,
  ethBalance: (state) => state.ethBalance,
  poolDateCode: (state) => state.poolDateCode,
  poolsData: (state) => state.poolsData,
  ticketData: (state) => state.ticketData,
  winProbability: (state) => state.winProbability,
  userTicketCount: (state) => state.ticketData.length,
  totalTicketCount: (state) => state.poolsData.length
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
  async withdrawFromContract({}, data) {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const ticketsContract = new ethers.Contract(ticketsContractAddress, ticketsAbi, signer)
        const parsedAmount = ethers.utils.parseEther(data.amount.toString())
        await ticketsContract.transferEther(data.address, parsedAmount._hex)
        notify({title: 'Succesfully withdraw from contract🎉'})
        await new Promise(resolve => setTimeout(resolve, 4444))
      }
    } catch (e) {
      console.error(e)
      throw new Error('No ethereum object')
    }
  },
  async sendTransaction ({commit, getters, dispatch, state}) {
    const {currentTicketType, currentTicketValue, currentPoolDateCode} = state
    if (currentTicketType && currentTicketValue && currentPoolDateCode) {
      commit('setIsLoading', true)
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          const ticketsContract = new ethers.Contract(ticketsContractAddress, ticketsAbi, signer)
          const parsedAmount = ethers.utils.parseEther(currentTicketValue.toString())
          const ticketsHash = await ticketsContract.buyTicket(parsedAmount, getters.currentAccount, currentPoolDateCode, currentTicketType, getters.keyword, {value: parsedAmount._hex})
          await ticketsHash.wait()
          await new Promise(resolve => setTimeout(resolve, 4444))
          notify({title: 'Succesfully bought (1) ' + state.currentTicketType + ' ticket for ' + state.currentPoolDateCode + ' raffle 🎉'})
          dispatch('getAllTickets')
          commit('setIsLoading', false)
          dispatch('filterTickets')
        }
      } catch (e) {
        console.error(e)
        commit('setIsLoading', false)
        e.error.code === -32000 ? notify({title: 'Insuficient Funds 😿', type: 'warn'}) : null
        throw new Error('No ethereum object')
      }
    } else {
      console.warn('Cannot send transaction. Required values are missing.')
    }
  },
  async getAllTickets({commit, dispatch}) {
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
      dispatch('filterTickets')
    } catch (e) {
      console.error(e)
      throw new Error('No ethereum object')
    }
  },
  filterTickets({ commit, state, getters, dispatch }, val) {
    if (val && val.length === 7) {
      commit('setPoolDateCode', val)
    }
    const { type, month } = state.filterObject
    const result = state.allTickets.filter((option) => 
      option.poolType === type && option.month === month
    )
    commit('setPoolsData', result)
    if (getters.currentAccount) {
      const ticketData = state.poolsData.filter(option => 
        option.ticketOwner.toLowerCase() === getters.currentAccount.toLowerCase()
      )
      commit('setTicketData', ticketData)
      dispatch('calculateWinProbability')
    } else {
      commit('setTicketData', [])
    }
  },
  calculateWinProbability({commit, getters}) {
    if (getters.userTicketCount > getters.totalTicketCount) {
      return 'User tickets can not be higher than total tickets'
    }
    const prob = (getters.userTicketCount / getters.totalTicketCount) * 100
    commit('setCalculateWinProbability', prob)
  }
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
  setPoolDateCode: (state, data) => state.poolDateCode = data,
  setPoolsData: (state, data) => state.poolsData = data,
  setTicketData: (state, data) => state.ticketData = data,
  setCalculateWinProbability: (state, data) => state.winProbability = data
}

export default {
  state,
  getters,
  actions,
  mutations,
}
