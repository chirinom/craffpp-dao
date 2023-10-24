<template>
  <div class="container">
    <div class="card">
      <div class="text-container">
        <h3>Standing</h3>
        <span>{{standing}}</span>
      </div>
      <div class="text-container">
        <h3>Address</h3>
        <span>{{address}}</span>
      </div>
      <div class="text-container">
        <h3>Amount</h3>
        <span>{{amount}}</span>
      </div>
      <div class="text-container">
        <h3>Pool Code</h3>
        <span>{{pool_code}}</span>
      </div>
      <button :disabled="address != address || amount != amount" class="buy-btn" @click="payWinner">Pay Winner</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ControllerWinnerCard',
  props: {
    standing: {
      type: String
    },
    address: {
      type: String
    },
    amount: {
      type: String
    },
    pool_code: {
      type: String
    }
  },
  methods: {
    ...mapActions(['withdrawFromContract']),
    payWinner() {
      const data = {}
      data.amount = this.amount
      data.address = this.address
      this.withdrawFromContract(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {

  .text-container {
    display: flex;
    justify-content: space-between;
    margin: 9px;
  
    h3 {
      margin: 0;
    }
  }
}
.buy-btn {
  @extend .BUTTON;
  width: 100%;

  &:hover {
    background-color: $secondary;
  }
  &:disabled {
    background-color: #7a85a3c7;
    cursor: not-allowed;
  }
}
</style>