<template>
  <ControllerBoard class="controllersView" />
</template>

<script>
import ControllerBoard from '@/components/molecules/ControllerBoard'

export default {
  name: 'ControllerView',
  components: {
    ControllerBoard
  }
}
</script>

<style scoped lang="scss">
.controllersView {
  padding: 44px 444px 222px;
}
@media (max-width: 1333px) {
  .controllersView {
    padding: 34px 222px;
  }
}
@media (max-width: 1089px) {
  .controllersView {
    padding: 34px 111px;
  }
}
@media (max-width: 777px) {
  .controllersView {
    padding: 11px 22px;
  }
}
</style>