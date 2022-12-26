<template>
  <div>
    <div v-for="(pool, index) in settledPools" :key="index">
      <div class="pool-tabs">
          <h4>{{pool}}</h4>
          <ExpandButtons
            :key="index"
            @open="handleExpand(index)"
            @close="handleExpand(index)"
          />
      </div>
      <div v-if="showSettledPools[index]">
          <ArchivePoolTypesList :filterCode="pool" />
          <br>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ExpandButtons from '@/components/atoms/ExpandButtons'
import ArchivePoolTypesList from '@/components/molecules/ArchivePoolTypesList'

export default {
  name: 'ArchivePage',
  components: {
    ExpandButtons,
    ArchivePoolTypesList
  },
  data() {
    return {
      showSettledPools: [],
      months: {
        ene: '28th, January, ',
        feb: '28th, February, ',
        mar: '28th, March, ',
        apr: '28th, April, ',
        may: '28th, May, ',
        jun: '28th, June, ',
        jul: '28th, July, ',
        aug: '28th, August, ',
        sep: '28th, September, ',
        oct: '28th, October, ',
        nov: '28th, November, ',
        dec: '28th, December, '
      },
      poolCode: '',
      winnersArray: '',
      fixedPoolCode: ''
    }
  },
  computed: {
    ...mapGetters(['winners','filterObject', 'currentAccount']),
    settledPools() {
      const allPools = this.winners.map((option) => {
        return this.months[option.pool_code.slice(-7,-4)] + option.pool_code.slice(-4)
      })
      const filteredPools = [...new Set(allPools)]
      return filteredPools
    },
    settledPoolsBuyIns() {
      const allPools = this.winners.map((option) => {
        return option.pool_code.slice(0,-7)
      })
      const filteredPools = [...new Set(allPools)]
      return filteredPools
    },
  },
  methods: {
    ...mapActions(['getAllWinners']),
    handleExpand(index){
      this.showSettledPools[index] = !this.showSettledPools[index]
    },
  },
  mounted() {
    this.getAllWinners()
  }
}
</script>

<style lang="scss" scoped>
.pool-tabs {
  border-radius: 6px;
  background: $light-grey;
  margin:  0.1px auto auto;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 2px 0 0 0;
  padding: 0 11px;

  & h4 {
      margin: auto 0;
  }

  & .btn-container {
      margin: 0 !important;
  }
}

.list {
  margin: 0 !important;
}
</style>
