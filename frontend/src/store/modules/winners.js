import { ethers } from 'ethers'
import { winnersAbi, winnersContractAddress } from '../../utils/constants'

const { ethereum } = window
const provider =  new ethers.providers.Web3Provider(ethereum)
const signer = provider.getSigner()

const state = {
  winners: [],
  firstPlaceStruct: {},
  secondPlaceStruct: {},
  thirdPlaceStruct: {},
};
const getters = {
  winners: (state) => state.winners,
  firstPlaceStruct: (state) => state.firstPlaceStruct,
  secondPlaceStruct: (state) => state.secondPlaceStruct,
  thirdPlaceStruct: (state) => state.thirdPlaceStruct,
};
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
  async sendWinnersToBlockchain ({getters}) {
    try {
      if (ethereum) {
        const winnersContract = new ethers.Contract(winnersContractAddress, winnersAbi, signer)

        const firstPlaceHash = await winnersContract.addWinnerStructToBlockchain(
          getters.firstPlaceStruct.amount,
          getters.firstPlaceStruct.address,
          getters.firstPlaceStruct.pool_code,
          getters.firstPlaceStruct.standing,
        )
        await firstPlaceHash.wait();

        const secondPlaceHash = await winnersContract.addWinnerStructToBlockchain(
          getters.secondPlaceStruct.amount,
          getters.secondPlaceStruct.address,
          getters.secondPlaceStruct.pool_code,
          getters.secondPlaceStruct.standing,
        )
        await secondPlaceHash.wait();

        const thirdPlaceHash = await winnersContract.addWinnerStructToBlockchain(
          getters.thirdPlaceStruct.amount,
          getters.thirdPlaceStruct.address,
          getters.thirdPlaceStruct.pool_code,
          getters.thirdPlaceStruct.standing,
        )
        await thirdPlaceHash.wait();
      }
    } catch (e) {
      console.error(e);
      throw new Error("No ethereum object");
    }
  },
  async getAllWinners ({commit}) {
    try {
      if (ethereum) {
        const winnersContract = new ethers.Contract(winnersContractAddress, winnersAbi, signer)
        const winnersResponse = await winnersContract.getAllWinners()
        const parcedWinners = winnersResponse.map((winner) => ({
          amount: winner[0],
          address: winner[1],
          pool_code: winner[2],
          standing: winner[3],
        }));
        commit('setWinners', parcedWinners)
      }
    } catch (e) {
      console.error(e);
      throw new Error("No ethereum object");
    }
  },
};
const mutations = {
  setWinners: (state, data) => state.winners = data,
  setFirstPlaceStruct: (state, data) => state.firstPlaceStruct = data,
  setSecondPlaceStruct: (state, data) => state.secondPlaceStruct = data,
  setThirdPlaceStruct: (state, data) => state.thirdPlaceStruct = data,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
