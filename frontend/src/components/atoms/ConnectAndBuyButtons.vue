<template>
  <div class="btn-wrapper">
    <button
      v-if="!!currentAccount"
      @click="sendTransaction"
      :class="['buy-btn', isLoading ? 'loading' : null]"
      :disabled="isLoading || !orderValid"
    >
    <vue-loaders
      v-if="isLoading"
      class="loader"
      name="ball-spin-fade-loader"
      color="#fff"
      scale="0.35"
    />
      <span v-else>Buy ticket</span>
    </button>
    <button v-else @click="connectWallet" class="buy-btn">Connect your wallet</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ConnectAndBuyButtons",
  props: {
    currentAccount: {
      type: String,
    },
    orderValid: {
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
  methods: {
    ...mapActions(["sendTransaction", "connectWallet"]),
  },
};
</script>

<style lang="scss" scoped>
.btn-wrapper {
  max-height: 42px;
}
.buy-btn {
  border: 1px solid lightgrey;
  padding: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
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
.loading {
  padding: 0.5px;
  line-height: 0;
}
.loader {
  color: #fff;
}
</style>

<style lang="scss">
.vue-loaders.ball-spin-fade-loader {
  top: -14px !important;
  left: none;
  height: 0;
}
</style>
