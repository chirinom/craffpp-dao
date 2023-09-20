<template>
  <div>
    <div v-for="(pool, index) in settledPoolsArray" :key="index">
      <div class="pool-tabs">
        <h4>{{pool}}</h4>
        <ExpandButtons
          :key="index"
          @open="handleExpand(index)"
          @close="handleExpand(index)"
        />
      </div>
      <div v-if="showSettledPools[index]">
        <ArchivePoolTypesList :poolData="filterWinnersByPoolDate(pool)" />
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ExpandButtons from '@/components/atoms/ExpandButtons'
import ArchivePoolTypesList from '@/components/molecules/ArchivePoolTypesList'

export default {
  name: 'ArchivePage',
  components: {
    ArchivePoolTypesList,
    ExpandButtons
  },
  data() {
    return {
      settledPoolsArray: [],
      showSettledPools: [],
      winnersArray: []
    }
  },
  computed: {
    ...mapGetters(['winners']),
  },
  methods: {
    handleWinnersDataMapping() {
      const months = {
        'jan': 'Enero',
        'feb': 'Febrero',
        'mar': 'Marzo',
        'apr': 'Abril',
        'may': 'Mayo',
        'jun': 'Junio',
        'jul': 'Julio',
        'aug': 'Agosto',
        'sep': 'Septiembre',
        'oct': 'Octubre',
        'nov': 'Noviembre',
        'dec': 'Diciembre'
      }

      const mappedWinners = this.winners.map(winner => {
        const poolCode = winner.pool_code
        const codigoMesAnio = poolCode.slice(-7)
        const month = months[codigoMesAnio.slice(0, 3)]
        const year = codigoMesAnio.slice(3)
        winner.date = '28th, ' + month + ', ' + year
        return '28th, ' + month + ', ' + year
      })

      this.settledPoolsArray = [...new Set(mappedWinners)].reverse()

      this.winnersArray = this.winners
    },
    filterWinnersByPoolDate(poolDate) {
      const filteredArray = this.winnersArray.filter(winner => winner.date === poolDate)
      return filteredArray
    },
    handleExpand(index){
      this.showSettledPools[index] = !this.showSettledPools[index]
    },
  },
  mounted() {
    this.handleWinnersDataMapping()
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
