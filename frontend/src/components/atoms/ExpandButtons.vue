<template>
  <div class="btn-container">
    <button v-show="isExpanded" class="keyup-btn">
    <i
      @click="closeTicketList"
      @keyup="closeTicketList"
      class="fa-solid fa-chevron-up"
    />
  </button>
  <button v-show="!isExpanded" class="keydown-btn">
    <i
      @click="extendTicketList"
      @keyup="extendTicketList"
      class="fa-solid fa-chevron-down" 
    />
  </button>
  </div>
</template>

<script>
export default {
  name: 'ExpandButtons',
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    extendTicketList () {
      this.isExpanded = true
      this.$emit('open', true)
    },
    closeTicketList() {
      this.isExpanded = false
      this.$emit('close', false)
    },
  }
}
</script>

<style lang="scss" scoped>
.btn-container {
  width: 20px;
  margin: 0 auto;
}
.keydown-btn  {
  border: none;
  text-decoration: none;
  background: none;
  position: relative;

  & i {
    font-size: 18px;
    margin-top: 4px;
    cursor: pointer;
    color:#3e5badc7;

    &:hover {
      color: #2e478d;
      font-size: 19px;
    }
  }
}
.keyup-btn {
  border: none;
  text-decoration: none;
  bottom: 0;
  background-color: transparent;
  position: relative;

    & i {
    font-size: 18px;
    margin-top: 4px;
    cursor: pointer;
    color:#3e5badc7;

    &:hover {
      color: #2e478d;
      font-size: 19px;
    }
  }
}

</style>