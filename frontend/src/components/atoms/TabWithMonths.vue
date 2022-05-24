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
        // { text: 'January', value: 'jan' },
        // { text: 'February', value: 'feb' },
        // { text: 'March', value: 'mar' },
        // { text: 'April', value: 'apr' },
        { text: 'May', value: 'may' },
        { text: 'June', value: 'jun' },
        { text: 'July', value: 'jul' },
        { text: 'August', value: 'aug' },
        { text: 'September', value: 'sep' },
        { text: 'October', value: 'oct' },
        { text: 'November', value: 'nov' },
        { text: 'Decemeber', value: 'dec' },
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
  padding: 22px;
  background-color: #2e478d14;
  text-align: center;
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
@media (max-width: 1536px) {
}
@media (max-width: 1280px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
@media (max-width: 640px) {
}
@media (max-width: 511px) {
}
</style>
