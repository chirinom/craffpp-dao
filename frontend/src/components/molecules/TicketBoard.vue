<template>
  <div class="ticketbooth">
    <h2>Ticketbooth</h2>
    <div class="booth-content">
      <span class="pick">Info
        <i @click="setInfo" @keyup="setInfo" class="fa-solid fa-circle-info"></i>
        <div v-if="isInfoShown" class="info-box">
          Pick pool amount and month
        </div>
      </span>
      <div class="ticket-amount">
        <TabWithAmounts
          :tabs="tabs"
          @ticketType="setTicketType"
        />
      </div>
      <div  v-if="!!currentAccount" :class="['available-tickets', { expanded: isExpanded }]">
        <div class="header">
          <span>Your Tickets</span>
          <div class="counter-box">
            <span class="box-number">{{ticketData.length}}</span>
          </div>
        </div>
        <TicketListBox  
          v-if="isExpanded"
          :currentAccount="currentAccount"
          :ticketData="ticketData"
        />
        <ExpandButtons
          @open="handleExpand"
          @close="handleExpand"
        />
      </div>
    </div>
    <div class="btns-container">
      <OrderSummary 
        v-if="!!currentAccount"
        :poolDateCode="poolDateCode"
        :currentValue="currentValue"
        :currentAccount="currentAccount"
        @orderValid="setOrderValid"
      />
      <ConnectAndBuyButtons
        :currentAccount="currentAccount"
        :orderValid="orderValid"
      />
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import ConnectAndBuyButtons from '@/components/atoms/ConnectAndBuyButtons'
import ExpandButtons from '@/components/atoms/ExpandButtons'
import OrderSummary from '@/components/atoms/OrderSummary'
import TabWithAmounts from '@/components/atoms/TabWithAmounts'
import TicketListBox from '@/components/atoms/TicketListBox'
import { mapMutations } from 'vuex'

export default {
  name: 'TicketBoard',
  components: {
    TabWithAmounts,
    TicketListBox,
    OrderSummary,
    ExpandButtons,
    ConnectAndBuyButtons
  },
  props: {
    poolDateCode: {
      type: String,
    },
    currentAccount: {
      type: String,
    },
    ticketData: {
      type: Array,
    }
  },
  data() {
    return {
      orderValid: false,
      buyTicketCount: 0,
      ticketCount: 0,
      currentTab: '',
      currentValue: 0,
      isInfoShown: false,
      isExpanded: false,
      tabs: [
        { value: 0.003, type: 'micro' },
        { value: 0.007, type: 'small' },
        { value: 0.150, type: 'medium' },
        { value: 0.250, type: 'large' },
        { value: 0.500, type: 'epic' },
      ],
    };
  },
  methods: {
    ...mapMutations([
      'setCurrentTicketType',
      'setCurrentTicketValue',
      'setFilterObject'
    ]),
    setTicketType (type, value) {
      this.currentTab = type
      this.currentValue = value
      this.setCurrentTicketValue(value)
      this.setCurrentTicketType(type)
      this.setFilterObject(type)
      this.$emit('typeChange', type)
    },
    setInfo() {
      this.isInfoShown = true
      setTimeout(() => { this.isInfoShown = false }, 3000)
    },
    setOrderValid(val) {
      this.orderValid = val
    },
    handleExpand(val){
      this.isExpanded = val
    }
  },
};
</script>
<style scoped lang="scss">
.terms {
  display: flex;
  text-align: left;
  margin: 11px 0;
}
.ticketbooth {
  width: 420px;
  border: 1px solid lightgrey;
  background: white;
  overflow: visible;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  height: fit-content;

  & h2 {
    background-color: #2e478d14;
    margin: 0;
    padding: 22px 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    font-family: "Patua One", cursive;
   color: #3e5badc7;
  }
  & .ticket-amount {
    border-radius: 6px;
    width: 100%;
    display: flex;
  }
}
.pick {
  font-size: 12px;
  font-weight: bold;
  float:left ;
  margin: 4px 4px 7px;

  & i {
    color: #3e5badc7;
    cursor: pointer;
  }
}
.info-box {
  position: absolute;
  width: 278px;
  text-align: initial;
  /* background-color: rgba(211, 211, 211, 0.425); */
  padding: 4px;
  border-radius: 6px;
  top: 71px;
  right: 50px;
  font-size: 11px;
  color: rgba(60, 60, 67, 0.6);
  opacity: 0.7;
}
.booth-content {
  padding: 15px;
}
.btns-container {
  padding: 0 15px 15px;
}

.available-tickets {
  border: 1px solid lightgrey;
  font-weight: 700;
  color: rgba(60, 60, 67, 0.6);
  cursor: pointer;
  width: 100%;
  border-radius: 6px;
  margin: 23px 0 11px;
  background-color: #2e478d14;
  padding: 6px 0 0 0;
  position: relative;

  &.expanded {
    height: 253px;
    margin-bottom: 0;

    & .dropdown-btn {
        display: none;
    }
  }
}
.box-number {
  padding: 0 6px;
  background-color: lightgray;
  border-radius: 4px;
  color:#3e5badc7;
  font-weight: bold;
}

@media (max-width: 768px) {
  .ticketbooth {
    width: 100%;
    margin: 24px 0;
    & h2 {
      margin: 0;
      padding: 15px 0;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
    }
    & .ticket-amount {
      border-radius: 6px;
      width: 100%;
      display: flex;
    }
  }
  .buy-btn {
    width: 100%;
    position: inherit;
    margin: 0 0 11px 0;
  }
}

.header {
  display: flex;
  justify-content: center;

  & span {
    margin: 3px;
    font-size: 12px;
  }
}
</style>
