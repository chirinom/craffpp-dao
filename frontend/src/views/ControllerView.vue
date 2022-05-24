<template>
  <div>
    Controller view
    {{allTransactions}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
name: 'ControllerView',
computed: {
  ...mapGetters(['allTransactions'])
}
}
</script>

<style>

</style>