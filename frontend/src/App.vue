<template>
  <div id="app">
    <notifications position="top center" width="444px" height="111" />
    <PrimaryNavbar/>
    <router-view />
    <PrimaryFooter />
  </div>
</template>

<script>
import PrimaryNavbar from '@/components/atoms/PrimaryNavbar'
import PrimaryFooter from '@/components/atoms/PrimaryFooter'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PrimaryNavbar,
    PrimaryFooter
  },
  methods: {
    ...mapActions(['getAllTickets', 'getAllWinners'])
  },
  created() {
    this.getAllWinners()
    this.getAllTickets()
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-black;
}

// Media Breaks
// @media (max-width: 1650px) {
// }
// @media (max-width: 1333px) {
// }
// @media (max-width: 1089px) {
// }
// @media (max-width: 777px) {
// }
// @media (max-width: 511px) {
// }
</style>
