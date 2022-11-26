<template>
  <div class="list">
    <div v-for="(ticket, index) in ticketData" :key="index" class="ticket">
      <div class="ticket-wrapper">
        <div class="text-container">
          <h4 class="label">{{STRINGS.ticketAmount}}</h4>
          <span class="text">{{ticket.amount}}{{STRINGS.eth}}</span>
        </div>
        <div class="text-container">
          <h4 class="label">{{STRINGS.ticketEntryDate}}</h4>
          <span class="text">{{ticket.timestamp}}</span>  
        </div>
        <div class="text-container">
          <h4 class="label">{{STRINGS.ticketWalletAddress}}</h4>
          <span class="text">{{ticket.ticketOwner}}</span>
        </div>
      </div>
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
  font-size: 12px;
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
    background-color: #fff;
  }
  & .label {
    font-weight: bolder;
    margin: 0;
    width: 111px;
  }
  & .text {
    font-weight: normal;
    margin: 0;
  }
}
.ticket-wrapper {
  padding: 4px;
  border-bottom: 1px dashed lightgrey;
  border-left: 1px dashed lightgrey;
  background-color: #f5f5f5;

  .text-container {
    display: flex;
  }
}
</style>
