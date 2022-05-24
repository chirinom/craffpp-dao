<template>
  <div class="contribution">
    <div class="introduction">
      <p>
        Panamá, is a country full of biodiversity, it is in fact well known for
        hosting one of the most wide varieties of plants and animal species in
        both land and sea. Only in Panamá, 220 species of freshwater fish and
        1,157 species of marine fish have been identified. Panamá is also home
        to 3.4% of the world's amphibian species.
        <br />
        <br />
        The list could go on and on but. What is important here is, that all
        this coastline, and rivers are currently in danger because of the huge
        amount of trash comming from different rivers all around the country,
        specially the ones closer to the city.
        <br />
        <br />
        For every pool we create, 16% of the profits will go to the
        reenforcement of efforts to take out as much trash as possible outside
        of Panamá coastlines. This includes, donating to local ong's
        specialliced in the matter and also creating events to collect trash and
        transport it to recycling facilities.
        <br />
        <br />
        Every contribution made to our Mother Nature will be posted in this page
        with some pictures and relevant information.
      </p>
    </div>
    <div class="section">
      <img :src="require('@/assets/images/bahia_pty_1.jpeg')" alt="" />
      <img :src="require('@/assets/images/bahia_pty_2.jpeg')" alt="" />
      <img :src="require('@/assets/images/mineria_pty_1.jpeg')" alt="" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContributionView',
  components: {

  },
};
</script>
<style scoped lang="scss">
.contribution {
  justify-content: space-between;
  padding: 34px 333px;
}
.introduction {
  padding: 44px;
}
.section {
  display: flex;
  justify-content: space-around;
  margin: 33px;
  & img {
    width: 333px;
    height: 222px;
  }
}
@media (max-width: 1536px) {
}
@media (max-width: 1280px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .contribution {
    display: block;
  }
  .introduction {
    padding: 8px;
  }
  .section {
    display: block;
    margin: 0px;
    & img {
      width: 100%;
      height: 222px;
      margin: 4px 0;
    }
  }
}
@media (max-width: 640px) {
}
@media (max-width: 511px) {
  .contribution {
    padding: 11px 22px;
  }
}
</style>
