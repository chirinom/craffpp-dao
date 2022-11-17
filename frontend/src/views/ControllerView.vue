<template>
  <ControllerBoard v-if="this.isAdmin" class="controllersView" />
</template>

<script>
import ControllerBoard from '@/components/molecules/ControllerBoard'
import { mapGetters } from 'vuex'

export default {
  name: 'ControllerView',
  components: {
    ControllerBoard
  },
  computed: {
    ...mapGetters(['isAdmin'])
  }
}
</script>

<style scoped lang="scss">
.controllersView {
  padding: 44px 222px;
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