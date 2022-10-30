<template>
  <div>
    <ControllerTotals/>
    <ControllerFilteredTotals @handleChange="handleChange" />
    <ControllerWinnersBoard :filteredData="filteredData" :poolCode="poolCode" />
  </div>
</template>

<script>
import ControllerTotals from '@/components/atoms/ControllerTotals'
import ControllerFilteredTotals from '@/components/atoms/ControllerFilteredTotals'
import ControllerWinnersBoard from '@/components/atoms/ControllerWinnersBoard'
import { mapActions } from 'vuex'

export default {
  name: 'ControllerBoards',
  components: {
    ControllerTotals,
    ControllerFilteredTotals,
    ControllerWinnersBoard
  },
  data() {
    return {
      filteredData: [],
      poolCode: ''
    }
  },
  methods: {
    ...mapActions(['getAllTransactions']),
    handleChange(poolCode, data) {
      this.poolCode = poolCode
      this.filteredData = data
    }
  },
  mounted () {
    this.getAllTransactions()
  }
}
</script>
