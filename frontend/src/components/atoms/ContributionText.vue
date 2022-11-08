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
        of Panamá coastlines. This includes, donating to local ONG's
        specialliced in the matter and the collection and
        recycling of the plastic.
      </p>
      <img :src="require('@/assets/images/bahia_pty_1.jpeg')" alt="" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContributionText',
  components: {

  },
}
</script>
<style scoped lang="scss">
.introduction {
  display: flex;
  justify-content: space-around;
  background: #000000e0;
  color: white;
  padding: 77px;

  p {
    font-size: 19px;
    max-width: 1111px;
  }

  img {
    width: 444px;
    height: auto;
  }
}

@media (max-width: 768px) {
  .contribution {
    display: block;
  }
  .introduction {
    padding: 8px;
  }
  img {
    width: 100%;
    height: 222px;
    margin: 4px 0;
  }
  
}
@media (max-width: 511px) {
  .contribution {
    padding: 11px 22px;
  }
}
</style>
