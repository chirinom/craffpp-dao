<template>
  <div class="primary-nav">
    <router-link to="/" class="brand">
      <i class="fa-solid fa-fire"></i>
      <h1>{{STRINGS.craffpp}}</h1>
    </router-link>
    <nav>
      <router-link to="/">{{STRINGS.home}}</router-link>
      <router-link to="/donate">{{STRINGS.donate}}</router-link>
      <router-link v-if="this.isAdmin" to="/controller">{{STRINGS.controller}}</router-link>
      <router-link to="/how">{{STRINGS.howDoesItWork}}</router-link>
      <a href="https://discord.gg/drZfVMB2YW" target="_blank"><i class="fa-brands fa-discord"></i></a>
      <a href="https://www.instagram.com/craffpp/" target="_blank"><i class="fa-brands fa-instagram social-lg"></i></a>
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

<style lang="scss">
.primary-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.brand {
    font-family: "Patua One", cursive;
    color:#3e5badc7;
    display: flex;
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
    position:relative;

    &.router-link-exact-active {
      color:#3e5badc7;
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
  .brand {
    justify-content: center;
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
