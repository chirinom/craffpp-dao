<template>
  <div>
    <h3>Totals</h3>
    <table class="totalsTable">
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
        <td>{{totalTickets}}</td>
        <td>{{ethTotal}}</td>
        <td>{{motherNature}}</td>
        <td>{{firstPlace}}</td>
        <td>{{secondPlace}}</td>
        <td>{{thirdPlace}}</td>
        <td>{{CraffppCo}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ControllerTotals',
  computed: {
    ...mapGetters(['allTickets']),
    totalTickets() {
      const total = this.allTickets.length
      return total
    },
    ethTotal() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      return total.toFixed(4)
    },
    motherNature() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 16 / 100 )
      return result.toFixed(4)
    },
    firstPlace() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 40 / 100 )
      return result.toFixed(4)
    },
    secondPlace() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 25 / 100 )
      return result.toFixed(4)
    },
    thirdPlace() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 15 / 100 )
      return result.toFixed(4)
    },
    CraffppCo() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 4 / 100 )
      return result.toFixed(4)
    },
  },

}
</script>

<style lang="scss" scoped>
.totalsTable {
    font-weight: bold;
    margin: 33px auto;
    text-align: center;

    tr,
    td {
        padding: 0 33px 0 0;
        margin: 0 auto;
    }
}
</style>