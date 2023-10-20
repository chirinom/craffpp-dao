<template>
  <div class="terms">
    <h3>{{STRINGS.termsHeader}}</h3>
    <ol>
      <li>Introduction</li>
      <p>{{STRINGS.termsIntroduction}}</p>
      <p>{{STRINGS.termsIntroductionSecond}}</p>
      <li>Raffle Description</li>
      <p>{{STRINGS.termsDescription}}</p>
      <li>Price Distribution</li>
      <p>{{STRINGS.termsPriceDistribution}}</p>
      <ul>
        <p>{{STRINGS.termsPriceDistribution40}}</p>
        <p>{{STRINGS.termsPriceDistribution25}}</p>
        <p>{{STRINGS.termsPriceDistribution16}}</p>
      </ul>
      <li>Ticket Purchase and Participation</li>
      <p>{{STRINGS.termsPurchase}}</p>
      <p>{{STRINGS.termsPurchaseSecond}}</p>
      <li>Selection of Winners</li>
      <p>{{STRINGS.termsWinners}}</p>
      <li>Claiming of Prizes</li>
      <p>{{STRINGS.termsClaiming}}</p>
      <li>Taxes</li>
      <p>{{STRINGS.termsTaxes}}</p>
      <li>Limitation of Liability</li>
      <p>{{STRINGS.termsLiability}}</p>
      <li>Changes to the Terms and Conditions</li>
      <p>{{STRINGS.termsChangeTerms}}</p>
      <li>Governing Law</li>
      <p>{{STRINGS.termsLaw}}</p>
      <p>{{STRINGS.termsLawSecond}}</p>
    </ol>
  </div>
</template>

<script>
import { STRINGS } from '../utils/strings'
export default {
  name: 'TermsView',
  data() {
    return {
      STRINGS: STRINGS
    }
  },
  metaInfo: {
    name: 'Terms and Conditions',
    meta: [
      {
        name: 'description',
        content: 'Terms and conditions of Craffpp'
      },
      {
        name: 'keywords',
        content: 'crypto, win, winner, ethereum, raffle, enviroment, metamask, prize, prizes, wallet, winning'
      },
    ]
  }
}
</script>

<style scoped lang="scss">
.terms {
  padding: 34px 353px;
  text-align: justify;

  h3 {
    text-align: center;
  }
  li {
    font-weight: bold;
  }
}
@media (max-width: 1333px) {
  .terms {
    padding: 34px 222px;
  }
}
@media (max-width: 1089px) {
  .terms {
    padding: 34px 111px;
  }
}
@media (max-width: 777px) {
  .terms {
    padding: 11px 22px;
  }
}
</style>