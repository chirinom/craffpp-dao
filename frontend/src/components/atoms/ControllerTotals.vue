<template>
  <div>
    <h3>{{STRINGS.totals}}</h3>
    <table class="totalsTable">
      <tr>
        <td>{{STRINGS.addressCount}}</td>
        <td>{{STRINGS.totalTickets}}</td>
        <td>{{STRINGS.totalEthereum}}</td>
        <td>{{STRINGS.fristPlace}}</td>
        <td>{{STRINGS.secondPlace}}</td>
        <td>{{STRINGS.oceanCleanup}}</td>
        <td>{{STRINGS.craffpp}}</td>
        <td>{{STRINGS.craffppAndOceanCleanup}}</td>
      </tr>
      <tr>
        <td>{{addressCount}}</td>
        <td>{{totalTickets}}</td>
        <td>{{ethTotal}}</td>
        <td>{{firstPlace}}</td>
        <td>{{secondPlace}}</td>
        <td>{{motherNature}}</td>
        <td>{{craffppCo}}</td>
        <td>{{craffppAndOceanCleanup}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { STRINGS } from '../../utils/strings'

export default {
  name: 'ControllerTotals',
  data() {
    return {
      STRINGS: STRINGS
    }
  },
  computed: {
    ...mapGetters(['allTickets']),
    addressCount() {
      let addresses = this.allTickets.map(option => option.ticketOwner)
      let unique = [...new Set(addresses)]
      return unique.length
    },
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
    craffppCo() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 4 / 100 )
      return result.toFixed(4)
    },
    craffppAndOceanCleanup() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 20 / 100 )
      return result.toFixed(4)
    }
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