<template>
  <div id="app">
    <PrimaryNavbar/>
    <router-view />
  </div>
</template>

<script>
import PrimaryNavbar from '@/components/atoms/PrimaryNavbar'

export default {
  name: 'App',
  components: {
    PrimaryNavbar
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0 0 30px 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
