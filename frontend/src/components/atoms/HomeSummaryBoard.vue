<template>
  <div class="summary-container">
    <div class="for-the-planet">
      <img class="image" :src="require('@/assets/recicle.png')" :alt="STRINGS.altCleanup" />
      <h3 class="label">{{STRINGS.totalRaised}}</h3>
      <h1>{{motherNature}} ETH</h1>
    </div>
    <div class="for-the-people">
      <img class="image" :src="require('@/assets/give_back.png')" :alt="STRINGS.altPrizes" />
      <h3 class="label">{{STRINGS.totalGivedBack}}</h3>
      <h1>{{ giveBackToPeople }} ETH</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { STRINGS } from '../../utils/strings'

export default {
  name: 'HomeSummaryboard',
  data() {
    return {
      STRINGS: STRINGS,
    }
  },
  computed: {
    ...mapGetters(['allTickets']),
    motherNature() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 16 / 100 )
      return result.toFixed(3)
    },
    giveBackToPeople() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 40 / 100 ) + total * ( 25 / 100 ) + total * ( 15 / 100 )
      return result.toFixed(3)
    },
  },
}
</script>

<style lang="scss" scoped>
.summary-container {
  display: flex;
  justify-content: space-between;
  padding: 33px 444px 222px;

  .label {
    font-size: 16px;
  }

  h1 {
    font-family: 'Koulen', cursive;
    margin-top: 0;
    font-size: 44px;
  }

  i {
    margin: 0 11px 0 0;
  }

  span {
    font-size: 18px;
    color: $primary-grey;
  }
}
.image {
  width: 111px;
  opacity: 11%;
}

@media (max-width: 1650px) {
  .summary-container {
    padding: 33px 444px 88px;
  }
}
@media (max-width: 1333px) {
  .summary-container {
    padding: 33px 222px 88px;
  }
}
@media (max-width: 1089px) {
  .summary-container {
    padding: 33px 111px 88px;
  }
}
@media (max-width: 777px) {
  .summary-container {
    padding: 33px 22px 88px;
    justify-content: center;
    display: block;

    & .for-the-people {
      margin: 77px 0 0 0;
    }
  }
}
</style>