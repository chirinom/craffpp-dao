<template>
  <div class="how-does-it-work">
    <div class="cards-container">
      <div class="card-steps">
        <img
          class="img2 how-image"
          :src="require('@/assets/connect.png')"
          alt=""
        />
        <p>
          Connect your Metamask wallet to Craffpp platform
        </p>
      </div>
      <img class="arrow1" :src="require('@/assets/arrow1.png')" />
      <div class="card-steps middle">
        <img
          class="how-image"
          :src="require('@/assets/select.png')"
          alt=""
        />
        <p>
          Select the buy-in and month of the raffle you want to participate. Each buy-in
          represent a set of winners (First, second and third place). You will be able to see
          the cumulative ETH total on every raffle per Buy-in amount.
          Then click Buy ticket and confirm transaction.
        </p>
      </div>
      <img class="arrow2" :src="require('@/assets/arrow2.png')" />
      <div class="card-steps middle">
        <img
          class="how-image"
          :src="require('@/assets/draw.png')"
          alt=""
        />
        <p>
          Raffles are decided the 28th of every month. The winner addresses
          are selected randomly. One address can win multiple prices in a sigle raffle. Meaning
          a single address can win all first, second and third position prices having bought at 
          least 3 tickets. The more tickets the more chances.
        </p>
      </div>
        <img class="arrow3" :src="require('@/assets/arrow3.png')" />
        <div class="card-steps">
        <img
          class="how-image"
          :src="require('@/assets/transfer.png')"
          alt=""
        />
        <p>
          Once a raffle is decided, the winning addresses will appear in the price pool board.
          Winner addresses receive their corresponding winning ETH amounts in no more than 24 hours.
        </p>
      </div>
    </div>
    <h3>Raffles Price Distirbution</h3>
    <p class="distribution">
      Ocean and coastline cleanup 16%,  First place 40%, Second place 25% and Third place 15%.
      Remaining 4% for development team and platform maintainance.
    </p>
  </div>
</template>

<script>

export default {
  name: 'HowDoesItWork',
}
</script>
<style scoped lang="scss">
.how-does-it-work {
  padding: 111px 222px 222px;
}
.how-image {
  object-fit: cover;
  width: 111px;
  height: 111px;
  opacity: 60%;
}
.cards-container {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.card-steps {
  margin: 33px;
}
.arrow1, .arrow2, .arrow3 {
  width: 444px;
  position: absolute;
  top: -88px;
  left: 18px;
  opacity: 33%;
}
.arrow2 {
  width: 444px;
  position: absolute;
  top: -22px;
  left: 397px;
  opacity: 33%;
}
.arrow3 {
  width: 444px;
  position: absolute;
  top: -82px;
  left: 777px;
  opacity: 33%;
}
.middle {
  margin-top: 111px;
}
h3 {
  margin: 77px 0 0;
}
</style>
