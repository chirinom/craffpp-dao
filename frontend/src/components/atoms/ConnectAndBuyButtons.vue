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
        color="#0091fb"
        scale="0.35"
      />
      <span v-else>Buy ticket</span>
    </button>
    <button v-else @click="connectWallet" class="buy-btn">{{STRINGS.connectWallet}}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { STRINGS } from '../../utils/strings'

export default {
  name: 'ConnectAndBuyButtons',
  props: {
    orderValid: {
      type: Boolean,
    },
  },
  data() {
    return {
      STRINGS: STRINGS
    }
  },
  computed: {
    ...mapGetters(['isLoading', 'currentAccount']),
  },
  methods: {
    ...mapActions(['sendTransaction', 'connectWallet']),
  },
}
</script>

<style lang="scss" scoped>
.btn-wrapper {
  max-height: 42px;
}
// TODO: This css is repeated
.buy-btn {
  border: 1px solid lightgrey;
  padding: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  width: 100%;
  background-color: $primary;
  color: #fff;
  border-radius: 6px;
  height: 44px;
  // margin: 8px 0;

  &:hover {
    background-color: $secondary;
  }
  &:disabled {
    background-color: $primary-light;
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
