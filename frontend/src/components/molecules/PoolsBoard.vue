<template>
  <div class="bingo-board">
    <div>
      <div class="header">Price pool</div>
    </div>
    <div class="pick">Select month</div>
    <TabWithMonths @switch-tab="handleMonthChange" />
    <TimerContainer :poolDateCode="poolDateCode" />
    <PoolTotals
      :poolsData="poolsData"
      :isPoolPassed="isPoolPassed"
      :poolDateCode='poolDateCode'
    />
  </div>
</template>

<script>
import TabWithMonths from '@/components/atoms/TabWithMonths'
import TimerContainer from '@/components/atoms/TimerContainer'
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
    isPoolPassed: {
      type: Boolean,
    },
    poolDateCode: {
      type: String
    },
    poolsData: {
      type: Array
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
}
</script>
<style scoped lang="scss">
.bingo-board {
  border: 1px solid lightgrey;
  background: white;
  overflow: visible;
  border-radius: 6px;
  height: fit-content;
  min-height: 464px;
  margin: 44px 0 0 0;
  padding: 0 15px 15px;
}
.header {
  font-family: "Patua One";
  font-size: 33px;
  font-weight: bold;
  color:#2e478d;
  padding: 22px 0 0 0;

}
.pick {
  font-size: 12px;
  font-weight: bold;
  margin: 4px 4px 7px;
  text-align: left;

  & i {
    color: #3e5badc7;
    cursor: pointer;

  }
}
</style>
