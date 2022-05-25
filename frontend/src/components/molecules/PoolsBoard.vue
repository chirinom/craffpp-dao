<template>
  <div class="bingo-board">
    <TabWithMonths @switch-tab="handleMonthChange" />
    <TimerContainer :poolDateCode="poolDateCode" />
    <PoolTotals :poolsData="poolsData"  />
  </div>
</template>

<script>
import TabWithMonths from '@/components/atoms/TabWithMonths';
import TimerContainer from '@/components/atoms/TimerContainer';
import PoolTotals from '@/components/atoms/PoolTotals'

import { mapMutations } from 'vuex'

export default {
  name: 'PoolsBoard',
  components: {
    TabWithMonths,
    PoolTotals,
    TimerContainer
  },
  props: {
    poolDateCode: {
      type: String
    },
    poolsData: {
      type: Array
    },
    ticketType: {
      type: String,
      required: true
    },
  },
  methods: {
    ...mapMutations(['setFilterObject', 'setCurrentPoolDateCode']),
    handleMonthChange(val) {
      this.setCurrentPoolDateCode(val)
      this.setFilterObject(val)
      this.$emit('monthChange', val)
    },
  },
};
</script>
<style scoped lang="scss">
.bingo-board {
  width: 777px;
  border: 1px solid lightgrey;
  background: white;
  overflow: visible;
  border-radius: 6px;
  height: fit-content;
  min-height: 464px;
}
@media (max-width: 511px) {
  .bingo-board {
    width: 100%;
  }
}
</style>
