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
      tabs: [
        { text: 'September', value: 'sep2022' },
        { text: 'October', value: 'oct2022' },
        { text: 'November', value: 'nov2022' },
        { text: 'Decemeber', value: 'dec2022' },
        { text: 'January', value: 'jan2023' },
        { text: 'February', value: 'feb2023' },
        { text: 'March', value: 'mar2023' },
        { text: 'April', value: 'apr2023' },
        { text: 'May', value: 'may2023' },
        { text: 'June', value: 'jun2023' },
        { text: 'July', value: 'jul2023' },
        { text: 'August', value: 'aug2023' },
        { text: 'September', value: 'sep2023' }
      ],
    };
  },
  methods: {
    switchTab(tab) {
      if (this.selectedTab !== tab) {
        this.selectedTab = tab;
        this.$emit('switch-tab', tab);
      }
    },
  },
  mounted() {
    this.selectedTab = this.initialValue;
  },
};
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
    span:hover {
      color: rgb(46, 71, 141);
      border-bottom: 2px solid rgb(11, 45, 139);
    }
    .selected {
      color: rgb(98, 108, 138);
      border-bottom: 2px solid rgb(46, 71, 141);
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
