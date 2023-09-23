<template>
  <div class="pools-by-buyin">
    <div v-for="(type, index) in poolTypes" :key="index" class="pools-by-type" @click="handleTypeTabExpand(index)">
      {{type}}
      <ArchiveTicketListBox v-if="showTickets[index]" :ticketInfo="filterWinnerbyPoolType(type)"/>
    </div>
  </div>
</template>

<script>
import ArchiveTicketListBox from '@/components/atoms/ArchiveTicketListBox'
import { mapGetters } from 'vuex'

export default {
  name: 'ArchivePoolTypesList',
  components: {
    ArchiveTicketListBox
  },
  props: {
    poolData: {
      type: Array
    }
  },
  data() {
    return {
      poolTypes: ['Micro', 'Small', 'Medium', 'Large'],
      showTickets: [],
    }
  },
  computed: {
    ...mapGetters(['winners']),
  },
  methods: {
    handleTypeTabExpand(index) {
      this.showTickets[index] = !this.showTickets[index]
    },
    filterWinnerbyPoolType(type) {
      const filterdArray = this.poolData.filter(pool => pool.pool_type === type.toLowerCase())
      return filterdArray
    }
  },
}
</script>

<style lang="scss" scoped>
.pools-by-buyin {
  border-radius: 6px;
  margin:  0.1px auto auto;
  text-align: left;
  cursor: pointer;
  margin: 2px 0 0 0;
  padding: 0 11px;
}
.pools-by-type {
  border-bottom: 1px solid $light-grey;
  padding: 6px 0 0 0;

  &:hover {
    color: $primary-grey;
  }
}
</style>