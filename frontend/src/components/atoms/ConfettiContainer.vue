<template>
  <div class="confetti-container">
    <!-- <button @click="start">Start</button> -->
    <!-- <button @click="stop">Stop</button> -->
  </div>
</template>

<script>
export default {
  name: 'ConfettiContainer',
  methods: {
    start() {
      this.$emit('start', this.$confetti.start())
    },
    stop() {
      this.$emit('stop', this.$confetti.stop())
    }
  }
}
</script>

<style lang="scss" scoped>
.confetti-container {
    // position: absolute;
    z-index: 10000;

    button {
        position: absolute;
    }
}
</style>