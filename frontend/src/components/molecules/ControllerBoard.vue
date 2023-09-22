<template>
  <div>
    <ControllerTotals/>
    <ControllerFilteredTotals
      @handleChange="handleChange"
    />
    <ControllerWinnersBoard
      :firstPlaceAmount="firstPlaceAmount"
      :secondPlaceAmount="secondPlaceAmount"
      :filteredData="filteredData"
      :poolCode="poolCode"
    />
    <ControllerPaymentBoard :poolCode="poolCode" />
    <ControllerContractBalance />
  </div>
</template>

<script>
import ControllerTotals from '@/components/atoms/ControllerTotals'
import ControllerFilteredTotals from '@/components/molecules/ControllerFilteredTotals'
import ControllerWinnersBoard from '@/components/atoms/ControllerWinnersBoard'
import ControllerPaymentBoard from '@/components/molecules/ControllerPaymentBoard'
import ControllerContractBalance from '@/components/atoms/ControllerContractBalance'

export default {
  name: 'ControllerBoard',
  components: {
    ControllerTotals,
    ControllerFilteredTotals,
    ControllerWinnersBoard,
    ControllerPaymentBoard,
    ControllerContractBalance
  },
  data() {
    return {
      firstPlaceAmount: 0,
      secondPlaceAmount: 0,
      filteredData: [],
      poolCode: ''
    }
  },
  methods: {
    handleChange(poolCode, data, first, second) {
      this.poolCode = poolCode
      this.filteredData = data
      this.firstPlaceAmount = first
      this.secondPlaceAmount = second
    },
  },
}
</script>
