<template>
  <div class="list">
    <div v-for="(ticket, index) in ticketData" :key="index" class="ticket">
      <div class="ticket-wrapper">
        <div>
          <div v-if="ticket.amount" class="text-container">
            <h4 class="label">{{STRINGS.ticketAmount}}</h4>
            <span class="text">{{ticket.amount}}{{STRINGS.eth}}</span>
          </div>
          <div v-if="ticket.timestamp" class="text-container">
            <h4 class="label">{{STRINGS.ticketEntryDate}}</h4>
            <span class="text">{{ticket.timestamp}}</span>  
          </div>
          <div v-if="ticket.ticketOwner" class="text-container">
            <h4 class="label">{{STRINGS.ticketWalletAddress}}</h4>
            <span class="text">{{ticket.ticketOwner}}</span>
          </div>
          <div v-if="ticket.address" class="text-container">
            <h4 class="label">{{STRINGS.ticketWalletAddress}}</h4>
            <span class="text">{{ticket.address}}</span>
          </div>
          <div v-if="ticket.pool_code" class="text-container">
            <h4 class="label">Pool Code</h4>
            <span class="text">{{ticket.pool_code}}</span>
          </div>
        </div>
        <img :src="require('../../assets/logo_lightgrey.png')" :alt="STRINGS.altLogo">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { STRINGS } from '../../utils/strings'

export default {
  name: 'TicketListBox',
  computed:{
    ...mapGetters(['ticketData']),
  },
  data() {
    return {
      STRINGS: STRINGS
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  font-family: "Roboto Mono", monospace;
  font-size: 12px;
  text-align: left;
  margin: 11px 7px;
  padding: 0;
  overflow: auto;
  min-height: 196px;
  max-height: 196px;
  height: fit-content;
  color: black;
  background-color: $primary-white;
  border: 1px solid lightgrey;
  cursor: auto;
  border-radius: 6px;

  & .ticket {
    margin: 0;
    padding: 4px;
    background-color: $primary-white;
  }
  & .label {
    font-weight: bolder;
    margin: 0;
    width: 66px;
  }
  & .text {
    font-weight: normal;
    margin: 0;
  }
}
.ticket-wrapper {
  padding: 4px 11px;
  border-bottom: 1px dashed lightgrey;
  border-left: 1px dashed lightgrey;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;

  .text-container {
    display: flex;
  }
  img {
    width: 48px
  }
}
@media (max-width: 511px) {
  .list {
    font-size: 9px;

    & .label {
      width: 55px;
    }

    & .ticket {
      width: 100%;
    }
  }
  .ticket-wrapper {
    padding: 2px;

    img {
      display: none;
    }
  }
}
</style>
