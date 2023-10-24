<template>
  <div class="winners-payment-container">
    <h2>{{STRINGS.winnersPayment}}</h2>
    <div v-for="(winner, index) in filteredData" :key="index">
      <ControllerWinnerCard
        :standing="winner.pool_standing"
        :address="winner.address"
        :amount="winner.amount"
        :pool_code="winner.pool_code"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { STRINGS } from '../../utils/strings'
import ControllerWinnerCard from '@/components/atoms/ControllerWinnerCard'

export default {
  name: 'ControllerPaymentBoard',
  components: {
    ControllerWinnerCard
  },
  props: {
    poolCode: {
      type: String
    }
  },
  data() {
    return {
      STRINGS: STRINGS
    }
  },
  computed: {
    ...mapGetters(['winners']),
    filteredData() {
      const result = this.winners.filter(winner => winner.pool_code === this.poolCode)
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.winners-payment-container {
  padding: 22px;
  text-align: left;
}
</style>