<template>
  <div class="how-does-it-work">
    <div class="cards-container">
      <div class="card-steps">
        <img class="img2 how-image" :src="require('@/assets/connect.png')" />
        <h2>{{STRINGS.connectWallet}}</h2>
        <p>{{STRINGS.connectMetamask}}</p>
      </div>
      <img class="arrow1" :src="require('@/assets/arrow1.png')" />
      <div class="card-steps middle">
        <img class="how-image" :src="require('@/assets/select.png')" />
        <h2>{{STRINGS.chooseBuyin}}</h2>
        <p>{{STRINGS.selectBuyinMonth}}</p>
      </div>
      <img class="arrow2" :src="require('@/assets/arrow2.png')" />
      <div class="card-steps middle">
        <img class="how-image" :src="require('@/assets/draw.png')" />
        <h2>{{STRINGS.winnerSelected}}</h2>
        <p>{{STRINGS.raffles}}</p>
      </div>
      <img class="arrow3" :src="require('@/assets/arrow3.png')" />
      <div class="card-steps">
        <img class="how-image transfer" :src="require('@/assets/transfer.png')" />
        <h2>{{STRINGS.recievePrice}}</h2>
        <p>{{STRINGS.transfers}}</p>
      </div>
    </div>
    <h3>Raffles Price Distirbution</h3>
    <p class="distribution">{{STRINGS.priceDistribution}}</p>
  </div>
</template>

<script>
import { STRINGS } from '../utils/strings'

export default {
  name: 'HowDoesItWork',
  data() {
    return {
      STRINGS: STRINGS
    }
  }
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
.transfer {
  width: 155px;
}
.cards-container {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.card-steps {
  margin: 33px;
}
.arrow1 {
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

@media (max-width: 1650px) {
  .middle {
    margin-top: 0;
  }
  .how-does-it-work {
    padding: 111px;
  }
  .arrow1, .arrow2, .arrow3 { display: none}
  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 1333px) {}
@media (max-width: 1089px) {
  .how-does-it-work {
    padding: 44px;
  }
  .cards-container {
    display: grid;
    grid-template-columns: 1fr;
  }
  .card-steps {
    margin: 22px 0 0 0;
  }

}
@media (max-width: 777px) {
  .how-does-it-work {
    padding: 22px;
  }
}
</style>
