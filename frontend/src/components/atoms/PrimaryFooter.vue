<template>
  <div class="primary-footer">
    <router-link to="/" class="brand">
      <i class="fa-solid fa-fire"></i>
      <h1>Craffpp</h1>
    </router-link>
    <h2>Help us sweap the plastic from our oceans and <strong>win some ETH</strong> doing it</h2>
    <div class="social">
        <i class="fa-brands fa-twitter social-lg"></i>
        <i class="fa-brands fa-instagram social-lg"></i>
    </div>
      <router-link to="/terms" target="_blank" class="terms">
        <span>Terms and conditions</span>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'PrimaryFooter'
}
</script>

<style lang="scss">
.primary-footer {
  background: #2e478d14;
  // min-height: 333px;
  padding: 77px 0 77px 0;
  
  .brand {
    margin: 0 0 44px 0;
    display: block;
    padding: 0;
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
