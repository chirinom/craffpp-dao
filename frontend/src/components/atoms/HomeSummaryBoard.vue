<template>
  <div class="summary-container">
    <div class="forThePlanet">
      <img class="image" :src="require('@/assets/recicle.png')" />
      <h1><i class="fa-brands fa-ethereum"></i>{{motherNature}}</h1>
      <span>{{STRINGS.totalRaised}}</span>
    </div>
    <div class="forThePeople">
      <img class="image" :src="require('@/assets/give_back.png')" />
      <h1><i class="fa-brands fa-ethereum"></i>{{ giveBackToPeople }}</h1>
      <span>{{STRINGS.totalGivedBack}}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { STRINGS } from '../../utils/strings'

export default {
  name: 'HomeSummaryboard',
  data() {
    return {
      STRINGS: STRINGS,
    }
  },
  computed: {
    ...mapGetters(['allTickets']),
    motherNature() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 16 / 100 )
      return result.toFixed(4)
    },
    giveBackToPeople() {
      const total = this.allTickets.reduce((a, b) => a + (b['amount'] || 0), 0)
      const result = total * ( 40 / 100 ) + total * ( 25 / 100 ) + total * ( 15 / 100 )
      return result.toFixed(4)
    },
  },
  methods: { ...mapActions(['getAllTickets']) },
  mounted () {
    this.getAllTickets()
  }
}
</script>

<style lang="scss" scoped>
.summary-container {
  display: flex;
  justify-content: space-between;
  padding: 33px 622px 88px;

  h1 {
    font-family: 'Koulen', cursive;
    margin-top: 0;
  }

  i {
    margin: 0 11px 0 0;
  }

  span {
    font-size: 14px;
  }
}
.image {
  width: 111px;
  opacity: 11%;
}

@media (max-width: 1650px) {
  .summary-container {
    padding: 33px 444px 88px;
  }
}
@media (max-width: 1333px) {
  .summary-container {
    padding: 33px 222px 88px;
  }
}
@media (max-width: 1089px) {
  .summary-container {
    padding: 33px 111px 88px;
  }
}
@media (max-width: 777px) {
  .summary-container {
    padding: 33px 33px 88px;
  }
}
</style>