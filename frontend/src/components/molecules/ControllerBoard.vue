<template>
  <div>
    <ControllerTotals/>
    <ControllerFilteredTotals @handleChange="handleChange" />
    <ControllerWinnersBoard :filteredData="filteredData" :poolCode="poolCode" />
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
      filteredData: [],
      poolCode: ''
    }
  },
  methods: {
    handleChange(poolCode, data) {
      this.poolCode = poolCode
      this.filteredData = data
    }
  },
}
</script>
