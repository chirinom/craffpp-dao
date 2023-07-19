<template>
  <div class="home">
    <PoolsBoard
      :poolsData="poolsData"
      :isPoolPassed="poolPassed"
      @monthChange="filterTickets"
    />
    <TicketBoard
      @typeChange="filterTickets"
      @poolPassed="setPoolIsPassed"
    />
  </div>
</template>

<script>
import TicketBoard from '@/components/molecules/TicketBoard'
import PoolsBoard from '@/components/molecules/PoolsBoard'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PlayView',
  components: {
    TicketBoard,
    PoolsBoard,
  },
  data() {
    return {
      poolPassed: false,
    }
  },
  computed: {
    ...mapGetters(['filterObject', 'allTickets', 'currentAccount', 'poolsData', 'poolDateCode']),
  },
  methods: {
    ...mapActions(['checkIfWalletIsConnect', 'filterTickets']),
    setPoolIsPassed(val) {
      this.poolPassed = val
    },
  },
  mounted() {
    this.checkIfWalletIsConnect()
  }
}
</script>
<style scoped lang="scss">
.home {
  padding: 77px 0 222px;
  display: inline-flex;
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
