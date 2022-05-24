const polBase = [
  {
    month: 'jan',
    endDate: 'Jan 28, 2023 11:00:00'
  },
  {
    month: 'feb',
    endDate: 'Feb 28, 2023 11:00:00'
  },
  {
    month: 'mar',
    endDate: 'Mar 28, 2023 11:00:00'
  },
  {
    month: 'apr',
    endDate: 'Apr 28, 2023 11:00:00'
  },
  {
    month: 'may',
    endDate: 'May 28, 2023 11:00:00'
  },
  {
    month: 'jun',
    endDate: 'Jun 28, 2023 11:00:00'
  },
  {
    month: 'jul',
    endDate: 'Jul 28, 2023 11:00:00'
  },
  {
    month: 'aug',
    endDate: 'Aug 28, 2023 11:00:00'
  },
  {
    month: 'sep',
    endDate: 'Sep 28, 2023 11:00:00'
  },
  {
    month: 'oct',
    endDate: 'Oct 28, 2023 11:00:00'
  },
  {
    month: 'nov',
    endDate: 'Nov 28, 2023 11:00:00'
  },
  {
    month: 'dec',
    endDate: 'Dec 28, 2023 11:00:00'
  },
]
const state = {
  poolTotal: 0,
  poolContribution: 0,
  poolFirstPlace: 0,
  poolSecondPlace: 0,
  poolThirdPlace: 0
}
const getters = {
  poolTotal: (state) => state.poolTotal,
  poolContribution: (state) => state.poolContribution,
  poolFirstPlace: (state) => state.poolFirstPlace,
  poolSecondPlace: (state) => state.poolSecondPlace,
  poolThirdPlace: (state) => state.poolThirdPlace,
}
const actions = {
  setPoolInfo({commit}, data) {
    commit('setPoolTotal', data)
    commit('setPoolContribution', data)
    commit('setPoolFirstPlace', data)
    commit('setPoolSecondPlace', data)
    commit('setPoolThirdPlace', data)
  }
}
const mutations = {
  setPoolTotal: (state, data) => state.poolTotal = data,
  setPoolContribution: (state, data) => state.poolContribution = data,
  setPoolFirstPlace: (state, data) => state.poolFirstPlace = data,
  setPoolSecondPlace: (state, data) => state.poolSecondPlace = data,
  setPoolThirdPlace: (state, data) => state.poolThirdPlace = data,
}

export default {
  state,
  getters,
  actions,
  mutations,
  polBase
}