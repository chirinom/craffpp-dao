<template>
  <div class="primary-nav">
    <div class="brand">
      <i class="fa-solid fa-fire"></i>
      <h1>Craffpp</h1>
    </div>
    <nav>
      <router-link to="/controller">Controller</router-link>
      <router-link to="/">Play</router-link>
      <router-link to="/best-part">Contribution</router-link>
      <router-link to="/how">How does it work</router-link>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
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
    padding: 40px 0 0 77px;

  & .fa-fire {
    font-size: 54px;
    margin: 12px 30px;
  }
}
nav {
  padding: 72px 111px 0px;
  font-family: "Patua One", cursive;
  font-size: 22px;

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
@media (max-width: 768px) {
  nav {
    padding: 24px 0;
    a {
      font-weight: bold;
      margin: 0 6px;
    }
  }
}
</style>
