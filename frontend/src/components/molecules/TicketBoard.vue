<template>
  <div class="ticketbooth">
    <div class="header">{{STRINGS.ticketBooth}}</div>
    <div class="booth-content">
      <span class="pick">{{STRINGS.selectBuyin}}</span>
      <div class="ticket-amount">
        <TabWithAmounts :tabs="tabs" @ticketType="setTicketType" />
      </div>
      <div  v-if="!!currentAccount" :class="['available-tickets', { expanded: isExpanded }]">
        <div class="header">
          <span>{{STRINGS.yourTickets}}</span>
          <div class="counter-box">
            <div class="box-number">{{ticketData.length}}</div>
          </div>
          <div class="percent-win" title="Your chances to win">{{fixedWinProbability}}</div>
        </div>
        <BoothTicketListBox v-if="isExpanded"/>
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
        @orderValid="setOrderValid"
      />
      <ConnectAndBuyButtons :orderValid="orderValid" />
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
import BoothTicketListBox from '@/components/atoms/BoothTicketListBox'
import { mapMutations, mapGetters, mapActions} from 'vuex'
import TICKET_VALUES from '../../utils/ticket_values.json'
import { STRINGS } from '../../utils/strings'

export default {
  name: 'TicketBoard',
  components: {
    TabWithAmounts,
    BoothTicketListBox,
    OrderSummary,
    ExpandButtons,
    ConnectAndBuyButtons
  },
  data() {
    return {
      orderValid: false,
      ticketCount: 0,
      currentTab: '',
      currentValue: 0,
      isInfoShown: false,
      isExpanded: false,
      tabs: TICKET_VALUES.ticketValues,
      STRINGS: STRINGS,
    }
  },
  computed: {
    ...mapGetters(['ticketData', 'poolDateCode', 'currentAccount', 'winProbability']),
    fixedWinProbability() {
      return this.winProbability? '(' + this.winProbability.toFixed(2) + '%)' : null
    }
  },
  methods: {
    ...mapActions(['calculateWinProbability']),
    ...mapMutations(['setCurrentTicketType', 'setCurrentTicketValue', 'setFilterObject']),
    setTicketType (type, value) {
      this.currentTab = type
      this.currentValue = value
      this.setCurrentTicketValue(value)
      this.setCurrentTicketType(type)
      this.setFilterObject(type)
      this.$emit('typeChange', type)
      this.calculateWinProbability()
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
}
</script>
<style scoped lang="scss">
.terms {
  display: flex;
  text-align: left;
  margin: 11px 0;
}
.ticketbooth {
  width: 100%;
  border: 1px solid lightgrey;
  background: white;
  overflow: visible;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  height: fit-content;
  width: 555px;
  margin-left: 44px;

  & .header {
    margin: 0;
    padding: 22px 0 0 0;
    font-weight: 700;
    font-size: 33px;
    font-family: "Patua One", cursive;
    color: $primary;

    & .percent-win {
      margin: 0 0 0 4px;
      cursor: default;
      color: $primary-light;
      font-weight: 100;
    }
  }
  & .ticket-amount {
    border-radius: 6px;
    width: 100%;
    display: flex;
    background: none;
  }
}
.pick {
  font-size: 12px;
  font-weight: bold;
  float:left ;
  margin: 4px 4px 7px;

  & i {
    color: $primary;
    cursor: pointer;
  }
}
.info-box {
  position: absolute;
  width: 278px;
  text-align: initial;
  padding: 4px;
  border-radius: 6px;
  top: 71px;
  right: 50px;
  font-size: 11px;
  color: rgba(60, 60, 67, 0.6);
  opacity: 0.7;
}
.booth-content {
  padding: 0 15px;
  height: fit-content;
}
.btns-container {
  padding: 15px;
}

.available-tickets {
  font-weight: 700;
  color: rgba(60, 60, 67, 0.6);
  width: 100%;
  border-radius: 6px;
  margin: 0 0 11px;
  padding: 0;
  position: relative;

  &.expanded {
    height: 255px;
    margin-bottom: 0;

    & .dropdown-btn {
        display: none;
    }
  }
}
.box-number {
  padding: 0 6px;
  border-radius: 4px;
  color: $primary;
  font-weight: bold;
}
@media (max-width: 1650px) {
  .ticketbooth {
    width: 100%;
    margin: 0;
  }
  .booth-content {
    height: fit-content;
  }
  .btns-container {
    padding: 15px;
  }
  .available-tickets {
    padding: 0;
  }
}
@media (max-width: 768px) {
  .ticketbooth {
    width: 100%;
    margin: 24px 0;

    & h2 {
      margin: 0;
      font-weight: 700;
      font-size: 33px;
      line-height: 24px;
      padding: 22px 0;
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
    margin: 0px 4px;
    font-size: 14px;
    color: $primary-black;
  }
   & div {
    font-size: 14px;
   }
}
</style>
