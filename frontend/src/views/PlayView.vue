<template>
  <div class="home">
    <TicketBoard
      :poolDateCode="poolDateCode"
      :currentAccount="currentAccount"
      :ticketData="ticketData"
      @typeChange="filterTickets"
      @poolPassed="setPoolIsPassed"
    />
    <PoolsBoard
      :poolsData="poolsData"
      :poolDateCode="poolDateCode"
      :isPoolPassed="poolPassed"
      @monthChange="filterTickets"
    />
  </div>
</template>

<script>
import TicketBoard from '@/components/molecules/TicketBoard'
import PoolsBoard from '@/components/molecules/PoolsBoard'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'PlayView',
  components: {
    TicketBoard,
    PoolsBoard,
  },
  data() {
    return {
      poolPassed: false,
      poolsData: [],
      ticketData: [],
      poolDateCode: '',
    }
  },
  computed: {
    ...mapGetters(['filterObject', 'allTickets', 'currentAccount'])
  },
  methods: {
    ...mapActions(['checkIfWalletIsConnect']),
    ...mapMutations(['setCurrentAccount']),
    setPoolIsPassed(val) {
      this.poolPassed = val
    },
    filterTickets(val) {
      if (val.length === 7) this.poolDateCode = val
      const result = this.allTickets.filter((option) => 
        option.poolType === this.filterObject.type 
        && option.month === this.filterObject.month
      )
      this.poolsData = result
      if (!!this.currentAccount) {
        const ticketData = this.poolsData.filter(option => 
          option.ticketOwner.toLowerCase() === this.currentAccount.toLowerCase()
        )
        this.ticketData = ticketData
      }
    },
  },
  mounted () {
    this.checkIfWalletIsConnect()
  }
}
</script>
<style scoped lang="scss">
.home {
  display: block;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 44px 444px 222px;
}
@media (max-width: 1650px) {
  .home {
    padding: 34px 353px 222px;
  }
}
@media (max-width: 1333px) {
  .home {
    padding: 34px 222px 222px;
  }
}
@media (max-width: 1089px) {
  .home {
    padding: 34px 222px;
  }
}
@media (max-width: 777px) {
  .home {
    padding: 11px 22px 222px;
  }
}
</style>
