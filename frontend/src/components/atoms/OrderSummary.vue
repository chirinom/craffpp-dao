<template>
  <div>
    <div class="checkout-container">
      <div class="header-container">
        <h1 class="checkout-header">{{STRINGS.orderSummary}}</h1>
        <i :class="['far fa-check-circle', orderValid? 'passed': 'not-passed']"></i>
      </div>
      <div class="row code">
        <h4>{{STRINGS.selectedPool}}</h4><h4>{{poolDateCode? poolDateCode : '-'}}</h4>
      </div>
      <div class="row count">
        <h4>{{STRINGS.ticketCount}}</h4><h4>{{!!currentValue && !!poolDateCode? 1 : 0}}</h4>
      </div>
      <div class="row total">
        <h4>{{STRINGS.orderTotal}}</h4><h4>{{currentValue}}  ETH</h4>
      </div>
    </div>
    <div class="terms">
      <div v-if="showTermsCheckbox">
        <input type="checkbox" v-model="termsCheckbox">
        <span>{{STRINGS.agreeTerms}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'
import { STRINGS } from '../../utils/strings'

export default {
  name: 'OrderSummary',
  props: {
    currentValue: {
      type: [String, Number]
    },
  },
  data(){
    return {
      termsCheckbox: false,
      STRINGS: STRINGS,
      showTermsCheckbox: false
    }
  },
  computed: {
    ...mapGetters(['allTickets', 'poolDateCode', 'currentAccount']),
    orderValid() {
      const firstTime = this.allTickets.filter((option) => option.ticketOwner.toLowerCase() === this.currentAccount)
      const orderValid = firstTime.length === 0
        ? !!this.poolDateCode && this.currentValue > 0 && this.termsCheckbox
        : !!this.poolDateCode && this.currentValue > 0
      return orderValid
    }
  },
  watch: {
    allTickets(newValue, oldValue) {
      const result = newValue.filter((option) => option.ticketOwner.toLowerCase() === this.currentAccount)
      const firstTimer = result.length === 0
      this.showTermsCheckbox = firstTimer
    },
    orderValid(newValue, oldValue) {
      this.$emit('orderValid', newValue)
    }
  },
}
</script>
<style scoped lang="scss">
.checkout-container {
  font-family: "Patua One", cursive;
  
  & .checkout-header {
    margin: 0 0 9px;
    text-align: left;
    color: $primary;
    font-size: 19px;
  }
  & .row {
    display: flex;
    justify-content: space-between;
    margin: 6px 0;
    
    & h4 {
      margin: 0;
      font-size: 14px;
    }
  }
}
  .code, .count {
    h4 {
      font-weight: 100;
    }
  }
  .total {
    h4 {
      font-weight: bold;
    }
  }
.terms {
  display: flex;
  text-align: left;
  justify-content: space-between;
  margin: 11px 0;

}
.header-container {
  display: flex;

  & .fa-check-circle {
    margin: 5px;
    font-size:15px;
  }

  & .passed {
    color: #0bd50b;
  }

  & .not-passed {
    color: #f2de27;
  }
}
</style>
