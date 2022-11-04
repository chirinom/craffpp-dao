<template>
  <div class="list">
    <div v-for="(ticket, index) in ticketData" :key="index" class="ticket">
      <div class="amount-date">
        <span class="label">- Amount <span class="text">{{ticket.amount}} eth, </span></span>
        <span class="label">- Entry date <span class="text">{{ticket.timestamp}}</span></span>
      </div>
      <span class="label">- Wallet <span class="text">{{ticket.ticketOwner}}</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketListBox',
  props: {
    currentAccount: {
      type: String
    },
    ticketData: {
      type: Array
    }
  },
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
