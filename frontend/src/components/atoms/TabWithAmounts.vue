<template>
  <div class="my-navbar">
    <span v-if="!!tabs" class="tabs-container">
      <button
        v-for="tab in tabs"
        class="amount-btn"
        :class="{ selected: tab.type === selectedTab }"
        :key="tab.value"
        @click="switchTab(tab.type, tab.value)"
        @keyup="switchTab(tab.type, tab.value)"
      >
        <div class="name">
          {{ tab.type.charAt(0).toUpperCase() + tab.type.slice(1) }}
        </div>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TabWithAmounts',
  props: {
    tabs: {
      type: Array,
      required: false,
      default: () => [],
    },
    initialValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedTab: '',
    }
  },
  methods: {
    switchTab(type, value) {
      if (this.selectedTab !== type) {
        this.selectedTab = type
        this.$emit('ticketType', type, value )
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
    display: flex;
    border-radius: 6px;
    width: 100%;
    height: 44px;
    
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
::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar-track {
  display: none;
}
::-webkit-scrollbar-thumb {
  display: none;
}
@media (max-width: 1536px) {}
@media (max-width: 768px) {
  .amount-btn {
    padding: 11px 3px;
    font-size: 12px;
    line-height: 15px;
    border-radius: 6px;
    width: 100%;
  }
}
</style>
