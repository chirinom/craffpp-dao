<template>
  <div class="my-navbar">
    <span v-if="!!tabs" class="tabs-container">
      <i class="fa-solid fa-circle-left scroll-button left" @click="scrollTabs(-3)"></i>
      <i class="fa-solid fa-circle-right scroll-button right" @click="scrollTabs(3)"></i>
      <button
        v-for="tab in filterMonthTabsByDate"
        class="amount-btn"
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
  computed: {
    filterMonthTabsByDate() {
      const currentDate = new Date()
      const filteredTabs = this.tabs.filter((tab) => {
        // Split the month and year values (e.g., "jul2023" -> ["jul", "2023"])
        const monthAbbreviation = tab.value.slice(0, 3)
        const year = parseInt(tab.value.slice(3), 10)
        // Map month abbreviations to month indices
        const monthIndices = {jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11}
        // Calculate the 28th day of the month
        const tabDate = new Date(year, monthIndices[monthAbbreviation], 28)
        // Calculate the difference in days between the tab's date and the current date
        const daysDifference = Math.ceil((tabDate - currentDate) / (1000 * 60 * 60 * 24))
        // Return true if the difference is greater than or equal to 3, indicating the 28th has passed by two days
        return daysDifference >= -2
      })
      return filteredTabs.slice(0,6)
    }
  },
  methods: {
    switchTab(tab) {
      if (this.selectedTab !== tab) {
        this.selectedTab = tab
        this.$emit('switch-tab', tab)
      }
    },
    scrollTabs(step) {
      const tabsContainer = this.$el.querySelector('.tabs-container')
      if (tabsContainer) {
      // Calculate the new scroll position
        const scrollLeft = tabsContainer.scrollLeft + step * 100 // Adjust the step value as needed
        // Scroll to the new position smoothly
        tabsContainer.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        })
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
  position: relative;

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
  
    .scroll-button {
      position: absolute;
      border-radius: 50%;
      cursor: pointer;
      border: 1px;
      color: $primary-white;
      font-size: 22px;

      &:hover {
        color: $primary;
      }
    }
    .left {
      left: 22px;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .right {
      right: 0px;
      top: 50%;
      transform: translate(-50%, -50%);
    }

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
      color: $primary-white;
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
    color: $primary-white;
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
