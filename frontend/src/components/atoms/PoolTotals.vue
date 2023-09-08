<template>
<div class="totals">
  <div class="title-price">
    <h2 class="ocean">{{STRINGS.oceanCleanup}}</h2>
    <div class="title-price">
      <i class="fa-brands fa-ethereum"></i>
      <h2 class="eth-num">{{ motherNature }}</h2>
    </div>
  </div>
   <div class="title-price">
    <h2 class="label">{{STRINGS.fristPlace}}</h2>
    <div class="eth-price">
      <i class="fa-brands fa-ethereum"></i>
      <h2 class="eth-num">{{ firstPlace }}</h2>
    </div>
  </div>
  <span :class="['address', isPoolPassed? '' : 'wallet', currentAccount === firstPlaceAddress? 'winner' : '']">{{isPoolPassed? firstPlaceAddress : sampleAddress}}</span>
   <div class="title-price">
    <h2 class="label">{{STRINGS.secondPlace}}</h2>
    <div class="eth-price">
      <i class="fa-brands fa-ethereum"></i>
      <h2 class="eth-num">{{ secondPlace }}</h2>
    </div>
  </div>
  <span :class="['address', isPoolPassed? '' : 'wallet', currentAccount === secondPlaceAddress? 'winner' : '']">{{isPoolPassed? secondPlaceAddress : sampleAddress}}</span>
   <div class="title-price">
    <h2 class="label">{{STRINGS.thirdPlace}}</h2>
    <div class="eth-price">
      <i class="fa-brands fa-ethereum"></i>
      <h2 class="eth-num">{{ thirdPlace }}</h2>
    </div>
  </div>
  <span :class="['address', isPoolPassed? '' : 'wallet', currentAccount === thirdPlaceAddress? 'winner' : '']">{{isPoolPassed? thirdPlaceAddress : sampleAddress}}</span>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
    calcTotal() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0)
      return total.toFixed(4)
    },
    motherNature() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 16 / 100 )
      return result.toFixed(4)
    },
    firstPlace() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 40 / 100 )
      return result.toFixed(4)
    },
    secondPlace() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 25 / 100 )
      return result.toFixed(4)
    },
    thirdPlace() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 15 / 100 )
      return result.toFixed(4)
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
    thirdPlaceAddress() {
      const total = this.winners.filter(option => 
        option.pool_code === this.filterObject.type + this.filterObject.month
        && option.pool_standing === 'third'
      )
      const result = total.map(option => option.address)
      return result[0]
    },
  },
  methods: {
    ...mapActions(['getAllWinners']),
  },
  mounted() {
    this.getAllWinners()
  }
}
</script>

<style lang="scss" scoped>
.totals {
  padding: 22px 222px;
}
.fa-ethereum {
  margin: 30px 4px 0 0;
  font-size: 15px;
  text-align: right;
}
.eth-num {
  font-family: 'Koulen', cursive;
  letter-spacing: 2px;
  margin: 20px 0;
}
.label, .ocean {
  color: $primary-black;
  font-family: "Patua One", cursive;  
  margin: 25px 0 0 0;
}
.title-price {
  display: flex;
  justify-content: space-around;
  height: 50px;
  margin: 0 0 10px 0;
  font-size: 14px;
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
  .totals {
    padding: 22px 144px 77px;
  }
  .title-price {
    justify-content: space-evenly;
  }
}
@media (max-width: 1333px) {
  .totals {
    padding: 22px 55px 77px;
  }
}
@media (max-width: 1089px) {}
@media (max-width: 768px) {
  .totals {
    padding: 22px 0 77px;
    font-size: 18px;
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

</style>
