<template>
<div class="totals">
   <div class="title-price">
    <h2 class="label">{{STRINGS.firstPlace}}</h2>
    <div class="eth-price">
      <h2 class="eth-num">{{ firstPlace }}&nbsp;ETH</h2>
    </div>
  </div>
  <span :class="['address', isPoolPassed? '' : 'wallet', currentAccount === firstPlaceAddress? 'winner' : '']">{{isPoolPassed? firstPlaceAddress : sampleAddress}}</span>
   <div class="title-price">
    <h2 class="label">{{STRINGS.secondPlace}}</h2>
    <div class="eth-price">
      <h2 class="eth-num">{{ secondPlace }}&nbsp;ETH</h2>
    </div>
  </div>
  <span :class="['address', isPoolPassed? '' : 'wallet', currentAccount === secondPlaceAddress? 'winner' : '']">{{isPoolPassed? secondPlaceAddress : sampleAddress}}</span>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { STRINGS } from '../../utils/strings'

export default {
  name: 'PoolTotals',
  props: {
    isPoolPassed: {
      type: Boolean,
    },
    poolsData: {
      type: Array,
    },
    poolDateCode: {
      type: String
    }
  },
  data() {
    return {
      totalEth: 0,
      sampleAddress: '0x0000000000000000000000000000000000000000',
      winnersList: [],
      STRINGS: STRINGS
    }
  },
  watch: { 
    winners: function(newVal, oldVal) {
      this.$emit('winners', newVal)
    }
  },
  computed: {
    ...mapGetters(['winners','filterObject', 'currentAccount']),
    firstPlace() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 55 / 100 )
      return result.toFixed(3)
    },
    secondPlace() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 25 / 100 )
      return result.toFixed(3)
    },
    firstPlaceAddress() {
      const total = this.winners.filter(option =>
        option.pool_code === this.filterObject.type + this.filterObject.month
        && option.pool_standing === 'first'
      )
      const result = total.map(option => option.address)
      return result[0]
    },
    secondPlaceAddress() {
      const total = this.winners.filter(option => 
        option.pool_code === this.filterObject.type + this.filterObject.month
        && option.pool_standing === 'second'
      )
      const result = total.map(option => option.address)
      return result[0]
    },
  },
}
</script>

<style lang="scss" scoped>
.totals {
  position: absolute;
  top: 69%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 369px;
}
.eth-num {
  font-family: "Patua One", cursive;
}
.label {
  color: $primary;
  font-family: "Patua One", cursive;  
}
.title-price {
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 0 0 33px 0;
  font-size: 22px;
}
.eth-price {
  display: flex;
}
.address {
  font-size: 14px;
}
.wallet {
  font-size: 12px;
  color: lightgrey;
  background-color: rgb(240, 239, 239);
  border-radius: 10px;
  padding: 3px;
  filter: blur(4px);
  word-break: break-all;
}
.winner {
  color: #0bd50b;
}
@media (max-width: 1650px) {
  .title-price {
    justify-content: space-evenly;
  }
}
@media (max-width: 1089px) {}
@media (max-width: 768px) {
    .title-price {
      margin: 0;
    }
  .totals {
    font-size: 18px;
    top: 66%;
  }
  .eth-num {
    font-size: 18px;
  }
  .label, .ocean {
    font-size: 18px;
  }
  .address {
    font-size: 12px;
  }
}

@media (max-width: 511px) {
  .totals {
    width: 100%;
  }
}

</style>
