<template>
  <div class="winners-container">
    <h3>{{STRINGS.winnersDraw}}</h3>
    <table class="winnersTable">
      <tr>
        <th>{{STRINGS.position}}</th>
        <th>{{STRINGS.address}}</th>
        <th>{{STRINGS.actions}}</th>
      </tr>
      <tr>
        <td>{{STRINGS.fristPlace}}</td>
        <td class="address">{{firstPlaceAddress}}</td>
        <td><button class="buy-btn" @click="getWinners">{{STRINGS.selectWinners}}</button></td>
      </tr>
      <tr>
        <td>{{STRINGS.secondPlace}}</td>
        <td class="address">{{secondPlaceAddress}}</td>
        <td> <button class="buy-btn" @click="sendWinnersToBlockchain">{{STRINGS.sendWinners}}</button></td>
      </tr>
      <tr>
        <td>{{STRINGS.thirdPlace}}</td>
        <td class="address">{{thirdPlaceAddress}}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapActions } from 'vuex'
import { STRINGS } from '../../utils/strings'

export default {
  name: 'ControllerWinnersBoard',
  props: {
    filteredData: {
      type: Array
    },
    poolCode: {
      type: String
    }
  },
  data() {
    return {
      firstPlaceAddress: '',
      secondPlaceAddress: '',
      thirdPlaceAddress: '',
      STRINGS: STRINGS
    }
  },
  methods: {
    ...mapActions([
      'createFirstPlaceStruct',
      'createSecondPlaceStruct',
      'createThirdPlaceStruct',
      'sendWinnersToBlockchain',
    ]),
    async getWinners() {
      // TODO: This function is not 100% efficient (sometimes the data object is not filled)
      let addressesArray = this.filteredData.map(option => option.ticketOwner)
      let random = Math.floor(Math.random() * addressesArray.length)
      let first = {}
      let second = {}
      let third = {}

      const firstPlace = addressesArray[random]
      this.firstPlaceAddress = firstPlace
      first.amount = this.filteredFirstPlace
      first.address = firstPlace
      first.pool_code = this.poolCode
      this.createFirstPlaceStruct(first)
      const firstPlaceIndex = addressesArray.indexOf(firstPlace)
      if (firstPlaceIndex >= 0) addressesArray.splice(firstPlaceIndex, 1)

      const secondPlace = addressesArray[random]
      this.secondPlaceAddress = secondPlace
      second.amount = this.filteredSecondPlace
      second.address = secondPlace
      second.pool_code = this.poolCode
      second.standing = 'second'
      this.createSecondPlaceStruct(second)
      const secondPlaceIndex = addressesArray.indexOf(secondPlace)
      if (secondPlaceIndex >= 0) addressesArray.splice(secondPlaceIndex, 1)

      const thirdPlace = addressesArray[random]
      this.thirdPlaceAddress = thirdPlace
      third.amount = this.filteredThirdPlace
      third.address = thirdPlace
      third.pool_code = this.poolCode
      third.standing = 'third'
      this.createThirdPlaceStruct(third)
      const thirdPlaceIndex = addressesArray.indexOf(thirdPlace)
      if (thirdPlaceIndex >= 0) addressesArray.splice(thirdPlaceIndex, 1)
    },
  }
}
</script>

<style lang="scss" scoped>
.winners-container {
  background-color: #2e478d14;
  padding: 22px;
  margin: 33px auto;

  h3 {
    margin: 0 auto 22px;
  }
}
.winnersTable {
    text-align: center;
    width: 100%;
    border-radius: 6px;

    tr, td{
      margin: 0 auto;
      vertical-align: inherit;
    }
  }
  .winnersTable {
    .address {
      min-width: 222px;
    }
}
// TODO: This css is repeated
.buy-btn {
  border: 1px solid lightgrey;
  padding: 8px;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  cursor: pointer;
  width: 100%;
  background-color: $primary;
  color: #fff;
  border-radius: 6px;
  max-height: 42px;

  &:hover {
    background-color: $secondary;
  }
  &:disabled {
    background-color: #7a85a3c7;
    cursor: not-allowed;
  }
}
</style>