<template>
  <div class="home">
    <TicketBoard
      :currentMonth="currentMonth"
      :currentAccount="currentAccount"
      :ticketData="ticketData"
      @typeChange="filterTickets"
    />
    <PoolsBoard
      :ticketType="poolAmount"
      :poolsData="poolsData"
      :currentMonth="currentMonth"
      @monthChange="filterTickets"
    />
  </div>
</template>

<script>
import TicketBoard from '@/components/molecules/TicketBoard';
import PoolsBoard from '@/components/molecules/PoolsBoard';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    TicketBoard,
    PoolsBoard,
  },
  data() {
    return {
      poolsData: [],
      allTickets: [],
      ticketData: [],
      currentMonth: '',
      currentAccount: ''
    };
  },
  computed: {
    ...mapGetters(['filterObject'])
  },
  methods: {
    ...mapActions(['getAllTransactions', 'checkIfWalletIsConnect']),
    ...mapMutations(['setCurrentAccount']),
    filterTickets(val) {
      if (val.length === 3) this.currentMonth = val
      const result = this.allTickets.filter((option) => 
        option.poolType === this.filterObject.type 
        && option.month === this.filterObject.month
      )
      this.poolsData = result
      if (!!this.currentAccount) {
        const ticketData = this.poolsData.filter(option => 
          option.addressFrom.toLowerCase() === this.currentAccount.toLowerCase()
        )
        this.ticketData = ticketData
      }
    },
    checkWalletConnected() {
      this.checkIfWalletIsConnect().then(
        response => {
          this.setCurrentAccount(response)
          this.currentAccount = response
        }
      )
    },
  },
  mounted () {
    this.checkWalletConnected()
    this.getAllTransactions().then(
      (response) => {
        this.allTickets = response
      }
    )   
  }
};
</script>
<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 34px 333px;
}
@media (max-width: 768px) {
  .home {
    display: block;
  }
}
@media (max-width: 511px) {
  .home {
    padding: 11px 22px;
  }
}
</style>
