<template>
  <div class="bingo-board">
    <div v-if="showArchive" class="archive-wrapper">
      <div class="header archive">{{STRINGS.archive}}</div>
      <ArchivePage />
      <button class="archive-btn" @click="setShowArchive">{{STRINGS.pricePool}}<i class="fa-solid fa-angles-right"></i></button>
    </div>
    <div class="pool-wrapper" v-else>
      <div class="header">{{STRINGS.pricePool}}</div>
      <div class="pick">{{STRINGS.selectMonth}}</div>
      <TabWithMonths @switch-tab="handleMonthChange" />
      <TimerContainer :poolDateCode="poolDateCode" />
      <PoolTotals
        :poolsData="poolsData"
        :isPoolPassed="isPoolPassed"
        :poolDateCode='poolDateCode'
      />
      <button class="archive-btn" @click="setShowArchive"><i class="fa-solid fa-angles-left"></i>  Archive</button>
    </div>
  </div>
</template>

<script>
import ArchivePage from '@/components/molecules/ArchivePage'
import TabWithMonths from '@/components/atoms/TabWithMonths'
import TimerContainer from '@/components/atoms/TimerContainer'
import PoolTotals from '@/components/atoms/PoolTotals'
import { STRINGS } from '../../utils/strings'

import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'PoolsBoard',
  components: {
    ArchivePage,
    TabWithMonths,
    PoolTotals,
    TimerContainer,
  },
  props: {
    poolsData: {
      type: Array
    },
  },
  data() {
    return {
      STRINGS: STRINGS,
      showArchive: false,
      isPoolPassed: false
    }
  },
  computed: { ...mapGetters(['poolDateCode']) },
  methods: {
    ...mapActions(['calculateWinProbability']),
    ...mapMutations(['setFilterObject', 'setCurrentPoolDateCode']),
    getMonth(monthStr){
      return new Date(monthStr+'-1-01').getMonth()+1
    },
    isInThePast(date) {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return date < today
    },
    handleMonthChange(val) {
      const poolDate = val.slice(3) + '-' + this.getMonth(val.slice(0,3)) + '-28'
      if (poolDate.length >= 9) { this.isPoolPassed = this.isInThePast(new Date(poolDate)) }
      this.setCurrentPoolDateCode(val)
      this.setFilterObject(val)
      this.$emit('monthChange', val)
      this.calculateWinProbability()
    },
    setShowArchive() {
      this.showArchive = !this.showArchive
      this.$emit('show-archive')
    }
  },
}
</script>
<style scoped lang="scss">
.bingo-board {
  border: 1px solid lightgrey;
  background: white;
  overflow: visible;
  border-radius: 6px;
  height: 590px;
  position: relative;
  width: 777px;
}
.archive-wrapper {
  padding: 0 15px 22px;
  overflow: hidden;
  max-height: 515px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.pool-wrapper {
  padding: 0 15px 22px;
  margin: 0 auto;
  overflow: hidden;
  max-height: 600px;
}
.header {
  font-family: "Patua One";
  font-size: 33px;
  font-weight: bold;
  color: $primary;
  padding: 22px 0 0 0;

  &.archive {
    color: $primary-light;
  }

}
.pick {
  font-size: 12px;
  font-weight: bold;
  margin: 4px 4px 7px;
  text-align: left;

  & i {
    color:  $primary;
    cursor: pointer;

  }
}

// Create wrapper component
.archive-btn {
  border: none;
  background: none;
  padding: 11px 0;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  left: 22px;
  bottom: 0;
  cursor: pointer;
  color: $primary-grey;

  &:hover {
    color: $primary-light;
  }
}
@media (max-width: 1650px) {
  .bingo-board {
    width: 100%;
    margin-top: 44px
  }
}
</style>
