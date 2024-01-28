<template>
  <div class="primary-nav">
    <router-link to="/" class="brand">
      <img :src="require('../../assets/logo2.png')" :alt="STRINGS.altLogo">
      <h1>{{STRINGS.craffpp}}</h1>
    </router-link>
    <nav>
      <router-link to="/">{{STRINGS.home}}</router-link>
      <router-link to="/play">{{STRINGS.buyTicket}}</router-link>
      <router-link v-if="this.isAdmin" to="/controller">{{STRINGS.controller}}</router-link>
      <router-link to="/how">{{STRINGS.howDoesItWork}}</router-link>
      <a class="social" href="https://discord.gg/uUjvswW3Ua" :aria-label="STRINGS.ariaDiscord" target="_blank"><i class="fa-brands fa-discord"></i></a>
      <a class="social" href="https://www.instagram.com/craffpp/" :aria-label="STRINGS.ariaIg" target="_blank"><i class="fa-brands fa-instagram"></i></a>
    </nav>
  </div>
</template>

<script>
import { STRINGS } from '../../utils/strings'
import { mapGetters } from 'vuex'

export default {
  name: 'PrimaryNavbar',
  data(){
    return {
      STRINGS: STRINGS
    }
  },
  computed: {
    ...mapGetters(['isAdmin'])
  }
}
</script>

<style lang="scss" scoped>
.primary-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.brand {
    font-family: "Patua One", cursive;
    color: $primary;
    display: flex;
    padding: 50px 0 0 77px;
    font-size: 22px;
    text-decoration: none;

    h1 {
      margin: 0 0 0  77px;
    }
    img {
      width: 77px;
      position: absolute;
      top: 40px;
    }
}
nav {
  padding: 72px 111px 0px;
  font-family: "Patua One", cursive;
  font-size: 22px;
  word-wrap: break-word;


  a {
    font-weight: bold;
    color: $primary-black;
    margin: 0 33px;
    text-decoration: none;
    position:relative;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}
@media (max-width: 1400px) {
  nav {
    font-size: 16px;
  }
}
@media (max-width: 1288px) {
  .primary-nav {
    display: initial;
    padding: 54px 0 0;
  }
  .brand {
    padding: 111px 0 0 0;
    justify-content: center;
    display: block;

    h1 {
      margin: 0;
    }

    img {
      position: inherit;
    }
  }
}
@media (max-width: 1000px) {
  nav {
    font-size: 14px;
  }
  .social {
    display: none;
  }
  .brand {
    justify-content: center;
    padding: 44px 22px 0;

  }
}
@media (max-width: 768px) {
  .brand {
    font-size: 33px;

  }
  nav {
    padding: 55px 22px 0;
    font-size: 18px;

    a {
      font-weight: bold;
      margin: 0 11px;
    }
  }
}
</style>
