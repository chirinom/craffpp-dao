<template>
  <div class="my-navbar">
    <span v-if="!!tabs" class="tabs-container">
      <span
        v-for="tab in tabs"
        class="tab"
        :class="{ selected: tab.value === selectedTab }"
        :key="tab.value"
        @click="switchTab(tab.value)"
        @keyup="switchTab(tab.value)"
      >
        <div class="name">
          {{ tab.text }}
        </div>
      </span>
    </span>
  </div>
</template>

<script>
import {MONTH_TABS} from '../../utils/month_tabs'

export default {
  name: 'TabWithMonths',
  props: {
    initialValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedTab: '',
      tabs: MONTH_TABS
    }
  },
  methods: {
    switchTab(tab) {
      if (this.selectedTab !== tab) {
        this.selectedTab = tab
        this.$emit('switch-tab', tab)
      }
    },
  },
  mounted() {
    this.selectedTab = this.initialValue
  },
}
</script>

<style lang="scss" scoped>
.my-navbar {
  padding: 15px;
  background-color: #2e478d14;
  text-align: center;
  border-radius: 6px;

  .tabs-container {
    height: fit-content;
    display: flex;
    overflow-x: scroll;
    overflow-y: visible;
    flex-wrap: nowrap;
    font-size: 33px;
    font-weight: 700;
    color: rgba(60, 60, 67, 0.6);
    font-size: 14px;
    line-height: 24px;

    span {
      width: max-content;
      display: block;
      transition: color 0.3s ease, border 0.3s ease;
      cursor: pointer;
      margin-right: 32px;
      border-bottom: 2px solid transparent;
    }
    span:hover,
    .selected {
      color: $primary;
      border-bottom: 2px solid $primary;
    }
    .tab {
      margin-left: 32px;
      white-space: nowrap;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar-track {
  display: none;
}
::-webkit-scrollbar-thumb {
  display: none;
}
</style>
