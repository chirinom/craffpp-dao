<template>
  <div class="home-view">
    <div class="banner">
      <h1>Crypto raffle for the planet and the people</h1>
      <h5>Help us sweap the plastic from our oceans and <strong>win some ETH</strong> doing it</h5>
    </div>
    <div class="picture-play">
      <img :src="require('../assets/images/banner.png')" >
      <router-link to="/play">
        <button>Play</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
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

    button {
      border: 1px solid lightgrey;
      padding: 8px;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      cursor: pointer;
      width: 100%;
      background-color: #3e5badc7;
      color: #fff;
      border-radius: 6px;
      max-height: 42px;
      margin: 33px 0;
    }
  }
}
.banner {
  padding: 133px 133px 0 0;
  text-align: left;
  color: #2e478d;
  line-height: 66px;

  h1 {
    font-size: 66px;
    font-family: "Patua One", cursive;
    margin-bottom: 0;
  }
  h5 {
    font-size: 16px;
    font-family: "Patua One", cursive;
    color: rgba(60, 60, 67, 0.6);
    font-weight: 100;
    margin: 0;
  }
}
</style>
