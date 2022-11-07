<template>
  <div class="list">
    <div v-for="(ticket, index) in ticketData" :key="index" class="ticket">
      <div class="amount-date">
        <span class="label">{{STRINGS.ticketAmount}}<span class="text">{{ticket.amount}}{{STRINGS.eth}}</span></span>
        <span class="label">{{STRINGS.ticketEntryDate}}<span class="text">{{ticket.timestamp}}</span></span>
      </div>
      <span class="label">{{STRINGS.ticketWalletAddress}}<span class="text">{{ticket.ticketOwner}}</span></span>
    </div>
  </div>
</template>

<script>
import { STRINGS } from '../../utils/strings'
export default {
  name: 'TicketListBox',
  props: {
    ticketData: {
      type: Array
    }
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
  font-size: 10px;
  text-align: left;
  margin: 11px 7px;
  padding: 0;
  overflow: auto;
  height: 194px;
  color: black;
  background-color: #fff;
  border: 1px solid lightgrey;
  cursor: auto;
  border-radius: 6px;

  & .ticket {
    margin: 0;
    padding: 4px;
    border-bottom: 1px solid lightgrey;
    background-color: #f5f5f5;
  }
  & .label {
    font-weight: bold;
  }
  & .text {
    font-weight: normal;
  }
}
</style>
