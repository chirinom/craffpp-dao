<template>
  <div class="my-navbar">
    <span v-if="!!tabs" class="tabs-container">
      <button
        v-for="tab in tabs"
        class="amount-btn"
        ref=""
        :class="{ selected: tab.value === selectedTab }"
        :key="tab.value"
        @click="switchTab(tab.value)"
        @keyup="switchTab(tab.value)"
      >
        <div class="name">
          {{ tab.text }}
        </div>
      </button>
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
      tabs: MONTH_TABS,
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
  background-color: #2e478d14;
  text-align: center;
  width: 100%;
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
      border-bottom: 2px solid transparent;
    }
    span:hover {
      color: rgb(46, 71, 141);
      border-bottom: 2px solid rgb(11, 45, 139);
    }
    .selected {
      background-color: $primary;
      color: #fff;
    }
  }
}
.amount-btn {
  margin: 2px;
  border: none;
  font-weight: 700;
  color: rgba(60, 60, 67, 0.6);
  font-size: 14px;
  line-height: 24px;
  border-radius: 6px;
  background: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: $primary;
    color: #fff;
  }
}
.name {
  width: 111px;
  margin: 8px
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
