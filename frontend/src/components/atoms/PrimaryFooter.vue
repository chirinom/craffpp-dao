<template>
  <div class="primary-footer">
    <router-link to="/" class="brand">
      <img :src="require('../../assets/logo2.png')" :alt="STRINGS.altLogo" >
      <h1>{{STRINGS.craffpp}}</h1>
    </router-link>
    <h5>Help us sweap the plastic from our oceans and <strong>win some ETH</strong> doing it</h5>
    <div class="social">
      <a href="https://discord.gg/drZfVMB2YW" :aria-label="STRINGS.ariaDiscord" target="_blank"><i class="fa-brands fa-discord"></i></a>
      <a href="https://www.instagram.com/craffpp/" :aria-label="STRINGS.ariaIg" target="_blank"><i class="fa-brands fa-instagram social-lg"></i></a>
    </div>
      <router-link to="/terms" target="_blank" class="terms">
        {{STRINGS.termsAndConditions}}
      </router-link>
  </div>
</template>

<script>
import { STRINGS } from '../../utils/strings'

export default {
  name: 'PrimaryFooter',
  data() {
    return {
      STRINGS: STRINGS
    }
  }
}
</script>

<style lang="scss" scoped>
.primary-footer {
  background: #2e478d14;
  padding:  44px 22px;
  
  .brand {
    font-family: "Patua One", cursive;
    color: $primary;
    padding: 0;
    font-size: 22px;
    text-decoration: none;

    img {
      width: 77px;
    }


    h1 {
      margin: 0;
    }
  }

  h5 {
    font-size: 16px;
    color: $primary-grey;
  }

  .terms {
    color: $primary-black;
    text-decoration: none;
  } 

  .social {
    font-size: 22px;
    margin: 22px;
    font-weight: bold;
    color: $primary-black;
 

    a {
      color: $primary-black;
    } 

    i {
      margin: 0 11px;
      color: $primary-black;
    }
  }
}
</style>
