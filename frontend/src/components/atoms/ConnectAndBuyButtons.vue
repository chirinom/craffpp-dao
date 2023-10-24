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
    <button v-else @click="connectWallet" class="buy-btn">
      <img class="metamask" :src="require('../../assets/images/metamask.png')" alt="Metamask" >
      {{STRINGS.connectWallet}}
    </button>
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
.buy-btn {
  @extend .BUTTON;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  .metamask {
    width: 18px;
    height: 18px;
    margin-right: 11px;
  }

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
  color: $primary-white;
}
</style>

<style lang="scss">
.vue-loaders.ball-spin-fade-loader {
  left: none;
  height: 0;
}
</style>
