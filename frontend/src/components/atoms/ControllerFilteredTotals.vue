<template>
  <div>
    <h3>Filtered Totals</h3>

    <TabWithAmounts :tabs="tabs" @ticketType="handleChange" />
    <TabWithMonths @switch-tab="handleChange" />

    <table class="filteredTable">
      <tr>
        <td>Total Tickets</td>
        <td>Total Ethereum</td>
        <td>Ocean Cleanup</td>
        <td>First place</td>
        <td>Second place</td>
        <td>Third place</td>
        <td>Craffpp Co.</td>
      </tr>
      <tr>
        <td>{{filteredTotalTickets}}</td>
        <td>{{filteredEthTotal}}</td>
        <td>{{filteredMotherNature}}</td>
        <td>{{filteredFirstPlace}}</td>
        <td>{{filteredSecondPlace}}</td>
        <td>{{filteredThirdPlace}}</td>
        <td>{{filteredCraffppCo}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TabWithMonths from '@/components/atoms/TabWithMonths'
import TabWithAmounts from '@/components/atoms/TabWithAmounts'
import TICKET_VALUES from '../../utils/ticket_values.json'

export default {
    name: 'ControllerFilteredTotals',
    components: {
        TabWithMonths,
        TabWithAmounts,
    },
    data() {
        return  {
            controllerDashboardData: [],
            filterObject: {},
            tabs: TICKET_VALUES.ticketValues,
        }
    },
    computed: {
        ...mapGetters(['allTransactions']),
        filteredTotalTickets() {
        const total = this.controllerDashboardData.length
        return total
        },
        filteredEthTotal() {
        const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
        return total.toFixed(4);
        },
        filteredMotherNature() {
        const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
        const result = total * ( 16 / 100 )
        return result.toFixed(4);
        },
        filteredFirstPlace() {
        const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
        const result = total * ( 40 / 100 )
        return result.toFixed(4);
        },
        filteredSecondPlace() {
        const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
        const result = total * ( 25 / 100 )
        return result.toFixed(4);
        },
        filteredThirdPlace() {
        const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
        const result = total * ( 15 / 100 )
        return result.toFixed(4);
        },
        filteredCraffppCo() {
        const total = this.controllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
        const result = total * ( 4 / 100 )
        return result.toFixed(4);
        },
    },
    methods: {
        ...mapActions(['getAllTransactions']),
        handleChange(val) {
            val.length === 7 ? this.filterObject.month = val : this.filterObject.type = val
            const poolCode =  this.filterObject.type + this.filterObject.month
            const result = this.allTransactions.filter((option) => 
                option.poolType === this.filterObject.type 
                && option.month === this.filterObject.month
            )
            this.controllerDashboardData = result
            this.$emit('handleChange', poolCode, result)
        },
    },
    mounted () {
        this.getAllTransactions()
    }
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
