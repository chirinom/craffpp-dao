<template>
  <div>
    <div class="checkout-container">
      <div class="header-container">
        <h1 class="checkout-header">Order summary</h1>
        <i v-if="orderValid" class="far fa-check-circle passed"></i>
      </div>
      <div class="row">
        <h4>Selected pool </h4><h4>{{poolDateCode? poolDateCode : '-'}}</h4>
      </div>
      <div class="row">
        <h4>Buy-in amount</h4><h4>{{currentValue}} eth</h4>
      </div>
      <div class="row">
        <h4>Ticket count</h4><h4>({{!!currentValue && !!poolDateCode? 1 : 0}})</h4>
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
    poolDateCode: {
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
    ...mapGetters(['allTickets']),
    firstTimeUser() {
      const result = this.allTickets.filter((option) => 
        option.ticketOwner.toLowerCase() === this.currentAccount
      )
      return result.length === 0
    },
    orderValid() {
      const firstTime = this.allTickets.filter((option) => 
        option.ticketOwner.toLowerCase() === this.currentAccount
      )
      const orderValid = firstTime.length === 0
        ? !!this.poolDateCode && this.currentValue > 0 && this.termsCheckbox
        : !!this.poolDateCode && this.currentValue > 0
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
    color: #3e5badc7;
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
    font-size:15px;
  }
}
</style>
