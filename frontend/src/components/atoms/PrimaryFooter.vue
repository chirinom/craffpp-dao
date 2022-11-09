<template>
  <div class="primary-footer">
    <router-link to="/" class="brand">
      <i class="fa-solid fa-fire"></i>
      <h1>{{STRINGS.craffpp}}</h1>
    </router-link>
    <h5>Help us sweap the plastic from our oceans and <strong>win some ETH</strong> doing it</h5>
    <div class="social">
        <i class="fa-brands fa-twitter social-lg"></i>
        <i class="fa-brands fa-instagram social-lg"></i>
    </div>
      <router-link to="/terms" target="_blank" class="terms">
        <span>{{STRINGS.termsAndConditions}}</span>
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

<style lang="scss">
.primary-footer {
  background: #2e478d14;
  padding:  44px 0;
  
  .brand {
    margin: 0 0 44px 0;
    display: block;
    padding: 0;
  }

  h5 {
    font-size: 16px;
  }

  .social {
    font-size: 22px;
    margin: 22px;

    i {
      margin: 0 11px;
    }
  }
}
</style>
