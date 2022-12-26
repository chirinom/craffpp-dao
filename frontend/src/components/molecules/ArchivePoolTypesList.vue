<template>
    <div class="pools-by-buyin">
        <div v-for="(type, index) in poolTypes" :key="index" class="pools-by-type" @click="handleTypeTabExpand(index)">
            {{type}}
            <TicketListBox v-if="showTickets[index]" :ticketData="winnersByPoolType(filterCode, type)"/>
        </div>
    </div>
</template>

<script>
import TicketListBox from '@/components/atoms/TicketListBox'
import { mapGetters } from 'vuex'

export default {
  name: 'ArchivePoolTypesList',
  components: {
    TicketListBox
  },
  props: {
    filterCode: {
      type: String
    }
  },
  data() {
    return {
      poolTypes: ['Micro', 'Small', 'Medium', 'Large', 'Epic'],
      showTickets: [],
      result: {}
    }
  },
  computed: {
    ...mapGetters(['winners']),
  },
  methods: {
    winnersByPoolType(val, type) {
      const fixedPoolCode = type.toLowerCase() + val.slice(-13, -10).toLowerCase() + val.slice(-4)
      const result = this.winners.filter((option) => option.pool_code === fixedPoolCode)
      return result
    },
    handleTypeTabExpand(index) {
      this.showTickets[index] = !this.showTickets[index]
    },
  }
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