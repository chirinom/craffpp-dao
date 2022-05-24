<template>
<div class="totals">
  <div class="header">Price pool</div>
  <div class="title-price">
    <h2 class="ocean">Ocean cleanup</h2>
    <i class="fa-brands fa-ethereum"></i>
    <h2 class="eth-num">{{ motherNature }}</h2>
  </div>
   <div class="title-price">
    <h2 class="label">First place</h2>
    <i class="fa-brands fa-ethereum"></i>
    <h2 class="eth-num">{{ firstPlace }}</h2>
  </div>
  <span class="wallet">0xa9473506371DB24F26A826f380D780B233F8b799</span>
   <div class="title-price">
    <h2 class="label">Second place</h2>
    <i class="fa-brands fa-ethereum"></i>
    <h2 class="eth-num">{{ secondPlace }}</h2>
  </div>
  <span class="wallet">0xa9473506371DB24F26A826f380D780B233F8b799</span>
   <div class="title-price">
    <h2 class="label">Third place</h2>
    <i class="fa-brands fa-ethereum"></i>
    <h2 class="eth-num">{{ thirdPlace }}</h2>
  </div>
  <span class="wallet">0xa9473506371DB24F26A826f380D780B233F8b799</span>
</div>
</template>

<script>

export default {
  name: 'PoolTotals',
  props: {
    poolsData: {
      type: Array,
    },
  },
  computed: {
    calcTotal() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0);
      return total.toFixed(3);
    },
    motherNature() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 16 / 100 )
      return result.toFixed(3);
    },
    firstPlace() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 40 / 100 )
      return result.toFixed(3);
    },
    secondPlace() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 25 / 100 )
      return result.toFixed(3);
    },
    thirdPlace() {
      const total = this.poolsData.reduce((a, b) => a + (b['amount'] || 0), 0);
      const result = total * ( 15 / 100 )
      return result.toFixed(3);
    },

  },
  mounted() {
  },
  data() {
    return {
      totalEth: 0
    };
  },
};
</script>

<style lang="scss" scoped>
.totals {
  padding: 22px 55px 77px;
}
.fa-ethereum {
  margin: 33px 8px 0 20px;
  font-size: 15px;
  text-align: right;
}
.eth-num {
  font-family: 'Koulen', cursive;
  letter-spacing: 2px;
}
.header {
  font-family: "Pacifico", cursive;
  font-size: 34px;
  font-weight: bold;
  color:#2e478d;
  margin: 18px 0 11px;

}
.label {
  color: #2e478d;
  font-family: "Patua One", cursive;  
  margin: 25px 0 0 0;
}
.ocean {
  font-family: "Patua One", cursive;  
  margin: 25px 0 0 0;
   color:rgba(117, 117, 148, 0.6)
}
.title-price {
  display: flex;
    justify-content: center;
    height: 50px;
    margin: 0 0 10px 0;
}
.wallet {
  font-size: 12px;
  color: lightgrey;
  background-color: rgb(240, 239, 239);
  border-radius: 10px;
  padding: 3px;
  filter: blur(4px);
}
@media (max-width: 768px) {
  .totals {
  padding: 22px 22px 77px;
}
}

</style>
