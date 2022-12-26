<template>
  <div class="contribution">
    <div class="introduction">
      <img :src="require('@/assets/images/turtle.png')" alt="" />
      <p>{{STRINGS.panamaBio}}<br><br>{{STRINGS.panamaCrisis}}<br><br>{{STRINGS.panamaContribution}}</p>
    </div>
  </div>
</template>

<script>
import { STRINGS } from '../../utils/strings'
export default {
  name: 'ContributionText',
  data() {
    return {
      STRINGS: STRINGS
    }
  }
  
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
    font-size: 18px;
    max-width: 1111px;
    margin: 0 0 0 44px;
    text-align: justify;
  }

  img {
    max-width: 444px;
    height: auto;
    object-fit:  cover;
  }
}

@media (max-width: 768px) {
  .contribution {
    display: block;
  }
  .introduction {
    padding: 22px;
    display: block;

    p {
      font-size: 14px;
      text-align: justify;
      margin: 22px 0;
    }

    img {
      width: 100%;
      height: 222px;
      margin: 4px 0;
    }
  }
  
}
</style>
