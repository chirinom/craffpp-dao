<template>
  <div class="home">
    <div class="play-container">
      <PoolsBoard
        :poolsData="poolsData"
        :isPoolPassed="poolPassed"
        @show-archive="toggleShowTicketBoard"
        @monthChange="filterTickets"
      />
      <TicketBoard
        v-if="!archiveHidden"
        @typeChange="filterTickets"
      />
    </div>
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
      archiveHidden: false
    }
  },
  computed: {
    ...mapGetters(['filterObject', 'allTickets', 'currentAccount', 'poolsData', 'poolDateCode']),
  },
  methods: {
    ...mapActions(['checkIfWalletIsConnect', 'filterTickets']),
    toggleShowTicketBoard() {
      this.archiveHidden = !this.archiveHidden
    }
  },
  mounted() {
    this.checkIfWalletIsConnect()
  }
}
</script>
<style scoped lang="scss">
.home {
  padding: 77px 0 222px;

  .play-container {
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 1650px) {
  .home {
    padding: 34px 169px 222px;

    .play-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .play-container > :nth-child(1) {
      order: 1;
    }
  }
}
@media (max-width: 1333px) {
  .home {
    padding: 34px 111px 222px;
  }
}
@media (max-width: 777px) {
  .home {
    padding: 11px 22px 222px;
  }
}
</style>
