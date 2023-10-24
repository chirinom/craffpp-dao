<template>
  <div class="balance-container">
    <h2>Contract Balance</h2>
    <div class="row">
      <h3>Eth Balance</h3>
      <span class="address eth">{{ethBalance}}</span>
    </div>
    <div class="row">
      <h3>Withdraw Amount</h3>
      <input type="text" class="address" v-model="withdrawAmount">
    </div>
    <div class="row">
      <h3>Address to Withdraw</h3>
      <input type="text" class="address" v-model="ethAddress">
    </div>
    <div class="row">
      <button :disabled="!addressValid || !withrawValid" class="get-balance" @click="setWithdraw">
        Withdraw from Contract
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { ethers } from 'ethers'

export default {
  name: 'ControllerContractBalance',
  data() {
    return {
      ethAddress: '',
      addressValid: false,
      withdrawAmount: 0
    }
  },
  watch: {
    ethAddress: function (val) {
      this.addressValid = ethers.utils.isAddress(val)
    }
  },
  computed: {
    ...mapGetters(['ethBalance']),
    withrawValid() {
      const result = this.ethBalance >= this.withdrawAmount
      return result
    }
  },
  methods: {
    ...mapActions(['withdrawFromContract','getBalance']),
    async setWithdraw() {
      const data = {amount: this.withdrawAmount, address: this.ethAddress}
      await this.withdrawFromContract(data)
      this.ethAddress = ''
      this.withdrawAmount = 0
    }
  },
  mounted () {
    this.getBalance()
  }
}
</script>

<style scoped lang="scss">
.balance-container {
  padding: 22px;
  text-align: left;

  .row {
    display: flex;
    justify-content: space-between;

    h3 {
      width: fit-content;
    }

    .address {
      width: 100%;
      max-width: 444px;
      height: 19px;
    }
  }
}
.eth {
  font-size: 16px;
  font-weight: bold;
}
.get-balance {
  @extend .BUTTON;
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
