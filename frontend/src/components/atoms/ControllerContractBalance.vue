<template>
  <div class="balance-container">
    <h3>Contract Balance</h3>
    <table class="balanceTable">
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr>
        <td>Eth Balance</td>
        <td class="address eth">{{ethBalance}}</td>
        <td></td>
      </tr>
      <tr>
        <td>Withdraw Amount</td>
          <input type="text" class="address" v-model="withdrawAmount">
        <td></td>
      </tr>
      <tr>
        <td>Address to withdraw</td>
        <input type="text" class="address" v-model="ethAddress">
        <td>
          <button
              :disabled="!addressValid || !withrawValid"
              class="get-balance"
              @click="setWithdraw"
          >
            Withdraw from Contract
          </button>
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="address"></td>
      </tr>
    </table>
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
  margin: 33px auto;

  h3 {
    margin: 0 auto 22px;
  }
}
.balanceTable {
    text-align: center;
    width: 100%;
    border-radius: 6px;

    tr, td{
      margin: 0 auto;
      vertical-align: inherit;
    }
    .address {
      min-width: 222px;
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
