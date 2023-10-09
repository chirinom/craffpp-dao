<template>
  <div class="container">
    <div class="card">
      <div class="text-container">
        <h4>Standing</h4>
        <span>{{standing}}</span>
      </div>
      <div class="text-container">
        <h4>Address</h4>
        <span>{{address}}</span>
      </div>
      <div class="text-container">
        <h4>Amount</h4>
        <span>{{amount}}</span>
      </div>
      <div class="text-container">
        <h4>Pool Code</h4>
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
  padding: 11px;

  button {
    max-width: 222px;
  }
}
.card {
  display: flex;
}
.text-container {
  text-align: left;
  margin: 0 auto;

  h4 {
    margin: 0;
  }
}
.buy-btn {
  border: 1px solid lightgrey;
  padding: 8px;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  cursor: pointer;
  width: 100%;
  background-color: $primary;
  color: $primary-white;
  border-radius: 6px;
  max-height: 42px;

  &:hover {
    background-color: $secondary;
  }
  &:disabled {
    background-color: #7a85a3c7;
    cursor: not-allowed;
  }
}
</style>