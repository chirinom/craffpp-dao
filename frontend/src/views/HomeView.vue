<template>
  <div>
    <div class="home-view">
      <div class="banner">
        <h1>{{STRINGS.homeHeader}}</h1>
        <h5>Help Us Sweep the Plastic from Our Oceans and <strong>Win ETH!</strong></h5>
      </div>
      <div class="picture-play">
        <img :src="require('../assets/images/bahia.jpg')" :alt="STRINGS.altBay">
        <router-link class="link" to="/donate">
          <button v-if="!!currentAccount">{{STRINGS.donate}}</button>
          <button v-else @click="connectWallet">
            <img class="metamask" :src="require('../assets/images/metamask.png')" alt="Metamask" >
            {{STRINGS.connectWallet}}
          </button>
        </router-link>
      </div>
    </div>
    <HomeSummaryboard />
    <ContributionText />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { STRINGS } from '../utils/strings'
import ContributionText from '@/components/atoms/ContributionText'
import HomeSummaryboard from '@/components/atoms/HomeSummaryBoard'

export default {
  name: 'HomeView',
  components: {
    ContributionText,
    HomeSummaryboard
  },
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

    .link {
      text-decoration: none;
    }

    button {
      @extend .BUTTON;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 33px auto;

      .metamask {
        width: 22px;
        height: 22px;
        margin-right: 11px;
      }

      &:hover {
        background-color: $secondary;
      }
    }
  }
}
.banner {
  padding: 133px 133px 0 0;
  text-align: left;
  color: $primary;
  line-height: 66px;

  h1 {
    font-size: 66px;
    font-family: "Patua One", cursive;
    margin-bottom: 0;
  }
  h5 {
    font-size: 16px;
    font-family: "Patua One", cursive;
    color: $primary-grey;
    font-weight: 100;
    margin: 0;
  }
}

@media (max-width: 1650px) {
  .home-view {
    padding: 33px 111px;

    h5 {
      line-height: 33px;
      margin: 22px 0 0 0;
    }

    .banner {
      padding: 44px;
      margin: auto;
      text-align: left;
    }

    .picture-play {
      width: 100%;
    }
  }
}
@media (max-width: 1333px) {
  .home-view {

    .banner {
        text-align: center;
    }
  }
}

@media (max-width: 1089px) {
    .home-view {
      display: inline-block;
      margin: 0 auto;

    button {
      max-width: 422px;
    }

    .banner {
      font-size: 44px;
      padding: 0;
    }
  }
}
@media (max-width: 777px) {
  .home-view {
    padding: 33px 22px;

    h1 {
      font-size: 44px;
      line-height: 49px;
    }

    img {
      width: 444px;
      max-width: 422px;
    }
  }
}
</style>
