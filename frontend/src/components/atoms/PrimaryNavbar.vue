<template>
  <div class="primary-nav">
    <router-link to="/" class="brand">
      <i class="fa-solid fa-fire"></i>
      <h1>Craffpp</h1>
    </router-link>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/play">Play</router-link>
      <!-- <router-link to="/controller">Controller</router-link>
      <router-link to="/best-part">Contribution</router-link> -->
      <router-link to="/how">How does it work</router-link>
      <i class="fa-brands fa-twitter social-lg"></i>
      <i class="fa-brands fa-instagram social-lg"></i>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PrimaryNavbar'
}
</script>

<style lang="scss">
.primary-nav {
  display: flex;
  justify-content: space-between;
}
.brand {
    font-family: "Patua One", cursive;
    display: flex;
    color:#3e5badc7;
    padding: 50px 0 0 77px;
    font-size: 22px;
    text-decoration: none;

    h1 {
      margin: 0;
    }

  & .fa-fire {
    font-size: 66px;
    margin: -15px 7px;
  }
}
nav {
  padding: 72px 111px 0px;
  font-family: "Patua One", cursive;
  font-size: 22px;
  word-wrap: break-word;

  i {
    margin: 0 11px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 33px;
    text-decoration: none;

    &.router-link-exact-active {
      color:#3e5badc7;
      text-decoration: underline;
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
    display: block;
  }
  .brand {
    padding: 55px 0 0 0;
    justify-content: center;
  }
}
@media (max-width: 1000px) {
  nav {
    font-size: 14px;
  }
  .social-lg {
    display: none;
  }
}
@media (max-width: 768px) {
.primary-nav {
  display: block;
}
  nav {
    padding: 24px 0;
    a {
      font-weight: bold;
      margin: 0 6px;
    }
  }
}
</style>
