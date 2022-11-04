<template>
  <div>
    <h3>Contract Balance</h3>
    <table class="balanceTable">
      <tr>
        <th></th>
        <th></th>
        <th>Actions</th>
      </tr>
      <tr>
        <td>Eth Balance</td>
        <td class="address">{{ethBalance}}</td>
        <td><button class="get-balance" @click="getBalance">Get balance</button></td>
      </tr>
      <tr>
        <td>Address to withdraw</td>
        <input type="text" class="address" v-model="ethAddress">
        <td>
          <button
              :disabled="!addressValid"
              class="get-balance"
              @click="withdrawFromContract"
          >
            Withdraw balance
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
import { mapGetters, mapActions, mapMutations} from 'vuex'
import { ethers } from 'ethers'

export default {
  name: 'ControllerContractBalance',
  data() {
    return {
      ethAddress: '',
      addressValid: false
    }
  },
  watch : {
    ethAddress : function (val) {
      this.addressValid = ethers.utils.isAddress(val)
      this.setWithdrawAddress(val)
    }
  },
  computed: {
    ...mapGetters(['ethBalance']),
  },
  methods: {
    ...mapActions(['withdrawFromContract','getBalance']),
    ...mapMutations(['setWithdrawAddress']),
    setTransferEth() {
      this.transferEthFromContract()
    }
  },
  mountted () {
    this.getBalance()
  }
}
</script>

<style scoped lang="scss">
.balanceTable {
    margin: 33px auto;
    text-align: center;
    background-color: #2e478d14;
    padding: 22px;
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
// TODO: This css is repeated
.get-balance {
  border: 1px solid lightgrey;
  padding: 8px;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  cursor: pointer;
  width: 100%;
  background-color: #3e5badc7;
  color: #fff;
  border-radius: 6px;
  max-height: 42px;

  &:hover {
    background-color: #2e478d;
  }
  &:disabled {
    background-color: #7a85a3c7;
    cursor: not-allowed;
  }
}
</style>
