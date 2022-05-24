<template>
  <div>
    <div class="checkout-container">
      <div class="header-container">
        <h1 class="checkout-header">Order summary</h1>
        <i v-if="orderValid" class="far fa-check-circle passed"></i>
      </div>
      <div class="row">
        <h4>Pool month </h4><h4>{{currentMonth? currentMonth : '-'}}</h4>
      </div>
      <div class="row">
        <h4>Pool amount</h4><h4>{{currentValue}} eth</h4>
      </div>
      <div class="row">
        <h4>Ticket</h4><h4>({{!!currentValue && !!currentMonth? 1 : 0}})</h4>
      </div>
    </div>
    <div class="terms">
      <div v-show="firstTimeUser">
        <input type="checkbox" v-model="termsCheckbox">
        <span>I agree to terms and conditions</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
  name: 'OrderSummary',
  props: {
    currentAccount: {
      type: String,
    },
    currentMonth: {
      type: String,
    },
    currentValue: {
      type: [String, Number]
    },
  },
  data(){
    return {
      termsCheckbox: false
    }
  },
  computed: {
    ...mapGetters(['allTransactions']),
    firstTimeUser() {
      const result = this.allTransactions.filter((option) => 
        option.addressFrom.toLowerCase() === this.currentAccount
      )
      return result.length === 0
    },
    orderValid() {
      const firstTime = this.allTransactions.filter((option) => 
        option.addressFrom.toLowerCase() === this.currentAccount
      )
      const orderValid = firstTime.length === 0
      ? !!this.currentMonth && this.currentValue > 0 && this.termsCheckbox
      : !!this.currentMonth && this.currentValue > 0
      this.$emit('orderValid', orderValid)
      return orderValid
    }
  },
}
</script>
<style scoped lang="scss">
.checkout-container {
  & .checkout-header {
    margin: 0 0 9px;
    text-align: left;
    font-family: "Patua One", cursive;
    color: #2e478d;
    font-size: 19px;
  }
  & .row {
    display: flex;
    justify-content: space-between;
    margin: 6px 0;
    font-family: "Roboto Mono", monospace;
    
    & h4 {
      margin: 0;
    }
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

  & .passed {
    color: #0bd50b;
    margin: 5px;
  }
}
</style>
