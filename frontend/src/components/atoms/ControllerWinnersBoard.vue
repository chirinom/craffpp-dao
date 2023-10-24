<template>
  <div class="winners-container">
    <div class="row">
      <h2>{{STRINGS.winnersDraw}}</h2>
      <div v-if="poolCode.length >= 10" class="indicators">
        <h4 v-if="poolAlreadySettled" class="danger">Pool already settled</h4>
        <h4 v-if="timerHasntEnded && !poolAlreadySettled" class="success">Ready to Settle</h4>
        <h4 v-if="!timerHasntEnded" class="danger">Timer has Ended</h4>
      </div>
    </div>
    <div class="row">
      <h3>{{STRINGS.firstPlace}}</h3>
      <span class="address">{{firstPlaceAddress}}</span>
    </div>
    <div class="row">
      <h3>{{STRINGS.secondPlace}}</h3>
      <span class="address">{{firstPlaceAddress}}</span>
    </div>
    <div class="row">
      <button
        class="buy-btn"
        :disabled="poolCode.length <= 10 ? true : poolAlreadySettled || !timerHasntEnded"
        @click="getWinners"
      >
        {{STRINGS.selectWinners}}
      </button>
    </div>
      <br/>
    <div class="row">
      <button
        class="buy-btn"
        :disabled="poolCode.length <= 10 ? true : poolAlreadySettled || !timerHasntEnded"
        @click="setSendWinners"
      >
        {{STRINGS.sendWinners}}
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters } from 'vuex'
import { STRINGS } from '../../utils/strings'

export default {
  name: 'ControllerWinnersBoard',
  props: {
    filteredData: {
      type: Array
    },
    poolCode: {
      type: String
    },
    firstPlaceAmount: {
      type: [Number, String]
    },
    secondPlaceAmount: {
      type: [Number, String]
    },
  },
  data() {
    return {
      firstPlaceAddress: '',
      secondPlaceAddress: '',
      STRINGS: STRINGS
    }
  },
  computed: {
    ...mapGetters(['winners']),
    poolAlreadySettled() {
      const result = this.winners.filter(option => option.pool_code === this.poolCode)
      return result.length >= 1
    },
    timerHasntEnded() {
      const poolDate = this.poolCode.slice(-4) + '-' + this.getMonth(this.poolCode.slice(-7,-4)) + '-28'
      const result = this.isInThePast(new Date(poolDate))
      return result
    }
  },
  methods: {
    ...mapActions([
      'createFirstPlaceStruct',
      'createSecondPlaceStruct',
      'sendWinnersToBlockchain',
    ]),
    setSendWinners() {
      this.sendWinnersToBlockchain()
      this.firstPlaceAddress = ''
      this.secondPlaceAddress = ''
    },
    getMonth(monthStr){
      return new Date(monthStr+'-1-01').getMonth()+1
    },
    isInThePast(date) {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return date < today
    },
    async getWinners() {
      let first = {}
      let second = {}
      let addressesArray = this.filteredData.map(option => option.ticketOwner)
      let random = Math.floor(Math.random() * addressesArray.length)
      const poolType = this.poolCode.slice(0, -7)

      const firstPlace = addressesArray[random]
      this.firstPlaceAddress = firstPlace
      first.amount = this.firstPlaceAmount
      first.address = firstPlace
      first.pool_code = this.poolCode
      first.pool_standing = 'first'
      first.pool_type = poolType
      this.createFirstPlaceStruct(first)
      const firstPlaceIndex = addressesArray.indexOf(firstPlace)
      if (firstPlaceIndex >= 0) addressesArray.splice(firstPlaceIndex, 1)

      const secondPlace = addressesArray[random]
      this.secondPlaceAddress = secondPlace
      second.amount = this.secondPlaceAmount
      second.address = secondPlace
      second.pool_code = this.poolCode
      second.pool_standing = 'second'
      second.pool_type = poolType
      this.createSecondPlaceStruct(second)
      const secondPlaceIndex = addressesArray.indexOf(secondPlace)
      if (secondPlaceIndex >= 0) addressesArray.splice(secondPlaceIndex, 1)
    },
  }
}
</script>

<style lang="scss" scoped>
.winners-container {
  padding: 22px;
  text-align: left;

  .row {
    display: flex;
    justify-content: space-between;

    .address {
      width: 100%;
      max-width: 444px;
      height: 19px;
    }
  }
}

.buy-btn {
  @extend .BUTTON;
  max-height: 42px;

  &:hover {
    background-color: $secondary;
  }
  &:disabled {
    background-color: #7a85a3c7;
    cursor: not-allowed;
  }
}
.danger {
  color: red;
  font-weight: bold;
}
.success {
  color: #0bd50b;
  font-weight: bold;
}
.indicators {
  text-align: left;
  font-size: 18px;
  margin: 0 22px 0 0;
}
</style>