import { ethers } from 'ethers'
import { winnersAbi, winnersContractAddress } from '../../utils/constants'
import { notify } from '@kyvg/vue3-notification'

const API_KEY = process.env.VUE_APP_API_KEY

const state = {
  winners: [],
  firstPlaceStruct: {},
  secondPlaceStruct: {},
  thirdPlaceStruct: {},
}
const getters = {
  winners: (state) => state.winners,
  firstPlaceStruct: (state) => state.firstPlaceStruct,
  secondPlaceStruct: (state) => state.secondPlaceStruct,
  thirdPlaceStruct: (state) => state.thirdPlaceStruct,
}
const actions = {
  createFirstPlaceStruct({commit}, val) {
    commit('setFirstPlaceStruct', val)
  },
  createSecondPlaceStruct({commit}, val) {
    commit('setSecondPlaceStruct', val)
  },
  createThirdPlaceStruct({commit}, val) {
    commit('setThirdPlaceStruct', val)
  },
  async sendWinnersToBlockchain({ getters }) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const winnersContract = new ethers.Contract(winnersContractAddress, winnersAbi, signer)
  
      const sendWinnerStruct = async (winnerStruct) => {
        const { amount, address, pool_code, pool_standing, pool_type } = winnerStruct
        const tx = await winnersContract.addWinnerStructToBlockchain(amount, address, pool_code, pool_standing, pool_type)
        await tx.wait()
      }
  
      await Promise.all([
        sendWinnerStruct(getters.firstPlaceStruct),
        sendWinnerStruct(getters.secondPlaceStruct),
        sendWinnerStruct(getters.thirdPlaceStruct),
      ])
  
      notify({ title: 'Successfully sent winners struct to blockchain' })
    } catch (e) {
      console.error(e)
      throw new Error('No Ethereum object')
    }
  },
  async getAllWinners ({commit}) {
    try {
      const provider = new ethers.providers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/${API_KEY}`)
      const winnersContract = new ethers.Contract(winnersContractAddress, winnersAbi, provider)
      const winnersResponse = await winnersContract.getAllWinners()
      const parcedWinners = winnersResponse.map((winner) => ({
        amount: winner[0],
        address: winner[1],
        pool_code: winner[2],
        pool_standing: winner[3],
        pool_type: winner[4],
      }))
      commit('setWinners', parcedWinners)
    } catch (e) {
      console.error(e)
      throw new Error('No ethereum object')
    }
  },
}
const mutations = {
  setWinners: (state, data) => state.winners = data,
  setFirstPlaceStruct: (state, data) => state.firstPlaceStruct = data,
  setSecondPlaceStruct: (state, data) => state.secondPlaceStruct = data,
  setThirdPlaceStruct: (state, data) => state.thirdPlaceStruct = data,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
