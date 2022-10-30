<template>
  <div class="how-does-it-work">
    <div class="cards-container">
      <div class="card-steps">
        <img
          class="how-image"
          :src="require('@/assets/images/no-avatar-legal.png')"
          alt=""
        />
        <p>
          Make sure you have already connected your wallet to our platform. Once
          connected you should be able to see your connection status green,
          otherwise you will see a red dot next to your connection status.h
        </p>
      </div>
      <div class="card-steps">
        <img
          class="how-image"
          :src="require('@/assets/images/no-avatar-legal.png')"
          alt=""
        />
        <p>
          Select the month and pool price amount you want to participate.
          Following This you just have to click on buy ticket and your wallet
          should receive a transaction request. Accept it, and you are good to
          go.
        </p>
      </div>
      <div class="card-steps">
        <img
          class="how-image"
          :src="require('@/assets/images/no-avatar-legal.png')"
          alt=""
        />
        <p>
          You will be able to see the cumulative total of ETH on your selected
          pool and any other. In case of winning, your wallet address will apear
          in podium list and when this happens you shall receive as well a
          transaction request on your wallet, but this time it will be a direct
          deposit :)
        </p>
      </div>
    </div>
    <h3>Price Distirbution</h3>
    <p class="distribution">
      The cumulative total of ETH will be distributed on each pool the following way. 16% its
      going to ocean and coastline cleanup. First place will get 40%, second
      place 25% and third place 15%. The last 4% goes to development team and platform maintainance.
    </p>
  </div>
</template>

<script>

export default {
  name: 'HowDoesItWork',
  methods: {},
  data() {
    return {
    }
  },
}
</script>
<style scoped lang="scss">
.how-does-it-work {
  padding: 44px 444px 222px;
}
.how-image {
  width: 100%;
  height: 177px;
  object-fit: cover;
}
.cards-container {
  display: flex;
  margin-top: 33px;
}
.card-steps {
  padding: 33px;
  max-width: 333px;
}
</style>
