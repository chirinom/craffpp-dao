<template>
  <ControllerBoard class="controllersView" />
</template>

<script>
import ControllerBoard from '@/components/molecules/ControllerBoard'

export default {
name: 'ControllerView',
components: {
  ControllerBoard
},
}
</script>

<style scoped lang="scss">
.controllersView {
  padding: 33px 222px;
}
</style>