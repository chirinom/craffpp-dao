<template>
  <div>
    <button v-show="isExpanded" class="keyup-btn">
    <i
      @click="closeTicketList"
      @keyup="closeTicketList"
      class="fa-solid fa-chevron-up"
    />
  </button>
  <button v-show="!isExpanded" class="dropdown-btn">
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
.dropdown-btn  {
  border: none;
  text-decoration: none;
  & i {
    font-size: 15px;
    margin-top: 4px;
    cursor: pointer;
    color:#3e5badc7;
    &:hover {
      color: #2e478d;
    }
  }
}
.keyup-btn {
  border: none;
  text-decoration: none;
  position: absolute;
  bottom: 0;
  background-color: transparent;

    & i {
    font-size: 15px;
    margin-top: 4px;
    cursor: pointer;
    color:#3e5badc7;
    &:hover {
      color: #2e478d;
    }
  }
}

</style>