<template>
  <div>
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
</style>