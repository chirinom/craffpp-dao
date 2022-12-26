<template>
  <div>
    <TabWithAmounts :tabs="tabs" @ticketType="handleChange" />
    <TabWithMonths @switch-tab="handleChange" />
    <h3>{{STRINGS.filteredTotals}}</h3>
    <table class="filteredTable">
      <tr>
        <td>{{STRINGS.addressCount}}</td>
        <td>{{STRINGS.totalTickets}}</td>
        <td>{{STRINGS.totalEthereum}}</td>
        <td>{{STRINGS.fristPlace}}</td>
        <td>{{STRINGS.secondPlace}}</td>
        <td>{{STRINGS.thirdPlace}}</td>
        <td>{{STRINGS.oceanCleanup}}</td>
        <td>{{STRINGS.craffpp}}</td>
        <td>{{STRINGS.craffppTotal}}</td>
      </tr>
      <tr>
        <td>{{filteredAddressCount}}</td>
        <td>{{filteredEthTotal}}</td>
        <td>{{filteredFirstPlace}}</td>
        <td>{{filteredSecondPlace}}</td>
        <td>{{filteredThirdPlace}}</td>
        <td>{{filteredMotherNature}}</td>
        <td>{{filteredCraffppCo}}</td>
        <td>{{filteredCraffppTotal}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TabWithMonths from '@/components/atoms/TabWithMonths'
import TabWithAmounts from '@/components/atoms/TabWithAmounts'
import TICKET_VALUES from '../../utils/ticket_values.json'
import { STRINGS } from '../../utils/strings'

export default {
  name: 'ControllerFilteredTotals',
  components: {
    TabWithMonths,
    TabWithAmounts,
  },
  data() {
    return {
      controllerDashboardData: [],
      filterObject: {},
      tabs: TICKET_VALUES.ticketValues,
      STRINGS: STRINGS
    }
  },
  computed: {
    ...mapGetters(['allTickets']),
    filteredAddressCount() {
      let addresses = this.controllerDashboardData.map(option => option.ticketOwner)
      let unique = [...new Set(addresses)]
      return unique.length
    },
    filteredTotalTickets() {
      const total = this.controllerDashboardData.length
      return total
    },
    filteredEthTotal() {
      const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0)
      return total.toFixed(4)
    },
    filteredFirstPlace() {
      const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 40 / 100 )
      return result.toFixed(4)
    },
    filteredSecondPlace() {
      const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 25 / 100 )
      return result.toFixed(4)
    },
    filteredThirdPlace() {
      const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 15 / 100 )
      return result.toFixed(4)
    },
    filteredMotherNature() {
      const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 16 / 100 )
      return result.toFixed(4)
    },
    filteredCraffppCo() {
      const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 4 / 100 )
      return result.toFixed(4)
    },
    filteredCraffppTotal() {
      const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 20 / 100 )
      return result.toFixed(4)
    },
  },
  methods: {
    handleChange(val) {
      val.length === 7 ? this.filterObject.month = val : this.filterObject.type = val
      const type = this.filterObject.type? this.filterObject.type : null
      const month = this.filterObject.month? this.filterObject.month : null
      const poolCode = type + month

      const result = this.allTickets.filter((option) => 
        option.poolType === this.filterObject.type 
        && option.month === this.filterObject.month
      )
      this.controllerDashboardData = result
      this.$emit('handleChange',
        poolCode,
        result,
        this.filteredFirstPlace,
        this.filteredSecondPlace,
        this.filteredThirdPlace
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.filteredTable {
    margin: 33px auto;
    text-align: center;

    tr,
    td {
        padding: 0 33px 0 0;
        margin: 0 auto;
    }
}
</style>

<style scoped lang="scss">
.my-navbar {
  margin-bottom: 12px;
}
</style>
