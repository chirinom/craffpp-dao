<template>
  <div>
    <ControllerTotals/>
    <ControllerFilteredTotals
      @handleChange="handleChange"
    />
    <ControllerWinnersBoard
      :firstPlaceAmount="firstPlaceAmount"
      :secondPlaceAmount="secondPlaceAmount"
      :thirdPlaceAmount="thirdPlaceAmount"
      :filteredData="filteredData"
      :poolCode="poolCode"
    />
    <ControllerContractBalance />
  </div>
</template>

<script>
import ControllerTotals from '@/components/atoms/ControllerTotals'
import ControllerFilteredTotals from '@/components/atoms/ControllerFilteredTotals'
import ControllerWinnersBoard from '@/components/atoms/ControllerWinnersBoard'
import ControllerContractBalance from '@/components/atoms/ControllerContractBalance'

export default {
  name: 'ControllerBoard',
  components: {
    ControllerTotals,
    ControllerFilteredTotals,
    ControllerWinnersBoard,
    ControllerContractBalance
  },
  data() {
    return {
      firstPlaceAmount: 0,
      secondPlaceAmount: 0,
      thirdPlaceAmount: 0,
      filteredData: [],
      poolCode: ''
    }
  },
  methods: {
    handleChange(poolCode, data, first, second, third) {
      this.poolCode = poolCode
      this.filteredData = data
      this.firstPlaceAmount = first
      this.secondPlaceAmount = second
      this.thirdPlaceAmount = third
    },
  },
}
</script>
