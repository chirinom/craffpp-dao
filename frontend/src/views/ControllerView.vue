<template>
  <div class="controllersView">
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

    <!-- Filters -->
    <TabWithAmounts :tabs="tabs" @ticketType="handleChange" />
    <TabWithMonths @switch-tab="handleChange" />

    <h3>Filtered Totals</h3>
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


    <h3>Winners Draw</h3>
    <table class="winnersTable">
      <tr>
        <th>Position</th>
        <th>Address</th>
        <th>Actions</th>
      </tr>
      <tr>
        <td>First Place</td>
        <td class="address">{{firstPlaceAddress}}</td>
        <td><button class="buy-btn" @click="getWinners">Select Winners</button></td>
      </tr>
      <tr>
        <td>Second Place</td>
        <td class="address">{{secondPlaceAddress}}</td>
        <td> <button class="buy-btn" @click="sendWinnersToBlockchain">Send Winners</button></td>
      </tr>
      <tr>
        <td>Third Place</td>
        <td class="address">{{thirdPlaceAddress}}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import TabWithMonths from '@/components/atoms/TabWithMonths'
import TabWithAmounts from '@/components/atoms/TabWithAmounts'
import { mapActions, mapGetters } from 'vuex'
import TICKET_VALUES from '../utils/ticket_values.json'

export default {
// TODO: This componets is to big
name: 'ControllerView',
components: {
  TabWithMonths,
  TabWithAmounts
},
data() {
  return  {
    firstPlaceAddress: '',
    secondPlaceAddress: '',
    thirdPlaceAddress: '',
    transactions: [],
    contorllerDashboardData: [],
    winner: {},
    winners: [],
    filterObject: {},
    tabs: TICKET_VALUES.ticketValues,
  }
},
  computed: {
    ...mapGetters(['allTransactions', 'firstPlaceStruct','secondPlaceStruct', 'thirdPlaceStruct']),
    ethTotal() {
      const total = this.transactions.reduce((a, b) => a + (b['amount'] || 0), 0);
      return total.toFixed(4);
    },
    motherNature() {
      const total = this.transactions.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 16 / 100 )
      return result.toFixed(4);
    },
    firstPlace() {
      const total = this.transactions.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 40 / 100 )
      return result.toFixed(4);
    },
    secondPlace() {
      const total = this.transactions.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 25 / 100 )
      return result.toFixed(4);
    },
    thirdPlace() {
      const total = this.transactions.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 15 / 100 )
      return result.toFixed(4);
    },
    CraffppCo() {
      const total = this.transactions.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 4 / 100 )
      return result.toFixed(4);
    },
    totalTickets() {
      const total = this.transactions.length
      return total
    },
    // Filtered
    filteredEthTotal() {
      const total = this.contorllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
      return total.toFixed(4);
    },
    filteredMotherNature() {
      const total = this.contorllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 16 / 100 )
      return result.toFixed(4);
    },
    filteredFirstPlace() {
      const total = this.contorllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 40 / 100 )
      return result.toFixed(4);
    },
    filteredSecondPlace() {
      const total = this.contorllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 25 / 100 )
      return result.toFixed(4);
    },
    filteredThirdPlace() {
      const total = this.contorllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 15 / 100 )
      return result.toFixed(4);
    },
    filteredCraffppCo() {
      const total = this.contorllerDashboardData.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 4 / 100 )
      return result.toFixed(4);
    },
    filteredTotalTickets() {
      const total = this.contorllerDashboardData.length
      return total
    },
  },
  methods: {
    ...mapActions([
      'createFirstPlaceStruct',
      'createSecondPlaceStruct',
      'createThirdPlaceStruct',
      "sendWinnersToBlockchain",
      'getAllTransactions',
      'getAllWinners',
      'setWinnerStruct',
      'setWinners'
    ]),
    handleChange(val) {
      val.length === 7 ? this.filterObject.month = val : this.filterObject.type = val
      const result = this.transactions.filter((option) => 
        option.poolType === this.filterObject.type 
        && option.month === this.filterObject.month
      )
      this.contorllerDashboardData = result
    },
    async getWinners() {
      // TODO: This function is not 100% efficient (sometimes the data object is not filled)
      let addressesArray = this.contorllerDashboardData.map(option => option.addressFrom);
      let random = Math.floor(Math.random() * addressesArray.length);
      let first = {}
      let second = {}
      let third = {}

      const firstPlace = addressesArray[random]
      // For rendering
      this.firstPlaceAddress = firstPlace
      // For data object to blockchain
      first.amount = this.filteredFirstPlace
      first.address = firstPlace
      first.pool_code = this.filterObject.type + this.filterObject.month
      first.standing = 'first'
      this.createFirstPlaceStruct(first)
      const firstPlaceIndex = addressesArray.indexOf(firstPlace)
      if (firstPlaceIndex >= 0) addressesArray.splice(firstPlaceIndex, 1);

      const secondPlace = addressesArray[random]
      this.secondPlaceAddress = secondPlace
      second.amount = this.filteredSecondPlace
      second.address = secondPlace
      second.pool_code = this.filterObject.type + this.filterObject.month
      second.standing = 'second'
      this.createSecondPlaceStruct(second)
      const secondPlaceIndex = addressesArray.indexOf(secondPlace)
      if (secondPlaceIndex >= 0) addressesArray.splice(secondPlaceIndex, 1);

      const thirdPlace = addressesArray[random]
      this.thirdPlaceAddress = thirdPlace
      third.amount = this.filteredThirdPlace
      third.address = thirdPlace
      third.pool_code = this.filterObject.type + this.filterObject.month
      third.standing = 'third'
      this.createThirdPlaceStruct(third)
      const thirdPlaceIndex = addressesArray.indexOf(thirdPlace)
      if (thirdPlaceIndex >= 0) addressesArray.splice(thirdPlaceIndex, 1);
    },
  },
  mounted () {
    this.getAllTransactions().then(
      (response) => {
        this.transactions = response
      }
    )   
  }
}
</script>

<style scoped lang="scss">
.controllersView {
  padding: 33px 222px;

  .totalsTable {
    font-weight: bold;
  }


  .totalsTable,
  .filteredTable,
  .winnersTable {
    margin: 33px auto;
    text-align: center;

    tr, td{
      padding: 0 33px 0 0;
      margin: 0 auto;
    }
  }
  .winnersTable {
    .address {
      min-width: 222px;
    }
  }
}
// TODO: This css is repeated
.buy-btn {
  border: 1px solid lightgrey;
  padding: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
  width: 100%;
  background-color: #3e5badc7;
  color: #fff;
  border-radius: 6px;
  max-height: 42px;

  &:hover {
    background-color: #2e478d;
  }
  &:disabled {
    background-color: #7a85a3c7;
    cursor: not-allowed;
  }
}
</style>

<style scoped lang="scss">
.my-navbar {
  margin-bottom: 12px;
}
</style>
