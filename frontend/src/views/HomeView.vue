<template>
  <div class="home-view">
    <div class="banner">
      <h1>{{STRINGS.homeHeader}}</h1>
      <h5>Help us sweap the plastic from our oceans and <strong>win some ETH</strong> doing it</h5>
    </div>
    <div class="picture-play">
      <img :src="require('../assets/images/banner.png')" >
      <router-link to="/play">
        <button v-if="!!currentAccount">{{STRINGS.play}}</button>
        <button v-else @click="connectWallet">{{STRINGS.connectWallet}}</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { STRINGS } from '../utils/strings'

export default {
  name: 'HomeView',
  data() {
    return {
      STRINGS: STRINGS
    }
  },
  methods: {
    ...mapActions(['checkIfWalletIsConnect', 'connectWallet']),
  },
  computed: {
    ...mapGetters(['currentAccount'])
  },
  mounted() {
    this.checkIfWalletIsConnect()
  }
}
</script>

<style scoped lang="scss">
.home-view {
  display: flex;
  justify-content: space-between;
  padding: 77px 222px;

  img {
    height: 444px;
    width: 422px;
  }
  .picture-play {
    padding: 55px 0 0 0;

    button {
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
      margin: 33px 0;
    }
  }
}
.banner {
  padding: 133px 133px 0 0;
  text-align: left;
  color: #2e478d;
  line-height: 66px;

  h1 {
    font-size: 66px;
    font-family: "Patua One", cursive;
    margin-bottom: 0;
  }
  h5 {
    font-size: 16px;
    font-family: "Patua One", cursive;
    color: rgba(60, 60, 67, 0.6);
    font-weight: 100;
    margin: 0;
  }
}

@media (max-width: 1650px) {
  .home-view {

    h5 {
      line-height: 33px;
      margin: 22px 0 0 0;
    }

    .banner {
      padding: 0;
      text-align: center;
    }

    .picture-play {
      flex-direction: column-reverse;
      width: 100%;
    }
  }
}
@media (max-width: 1333px) {}

@media (max-width: 1089px) {
    .home-view {
      padding: 33px 22px;
      display: inline-block;
      width: 100%;
      margin: 0 auto;

    button {
      max-width: 422px;
    }

    .banner {
      font-size: 44px;
    }
  }

}
@media (max-width: 777px) {
    .home-view {

    h1 {
      font-size: 44px;
      line-height: 49px;
    }

    img {
      max-width: 422px;
      width: 100%;
      height: 333px;
    }

  }
}
</style>
