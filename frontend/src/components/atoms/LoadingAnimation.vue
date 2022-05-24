<template>
  <b-img
    v-if="active && button"
    id="logo"
    :src="require('@/assets/images/Logo_app_sombra.png')"
    fluid
    alt="Loading"
    width="20"
    height="20"
    blank-color="#777"
    class="button-loading"
  />
  <b-img
    v-else-if="active && !button"
    :src="require('@/assets/images/Logo_app_sombra.png')"
    fluid
    alt="Loading"
    width="50"
    height="50"
    blank-color="#777"
    class="loading"
  />
</template>

<script>
export default {
  name: 'LoadingAnimation',
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
    button: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@keyframes loading {
  0% {
    opacity: 0.2;
    width: 50px;
    height: 50px;
    transform: rotate(-360deg);
  }
  25% {
  }
  50% {
    opacity: 1;
    width: 55px;
    height: 55px;
    transform: rotate(360deg);
  }
  75% {
  }
  100% {
    opacity: 0.2;
    width: 50px;
    height: 50px;
    transform: rotate(-360deg);
  }
}

.loading {
  animation-name: loading;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes buttonloading {
  0% {
    opacity: 0.2;
    width: 20px;
    height: 20px;
    transform: rotate(-360deg);
  }
  25% {
  }
  50% {
    opacity: 1;
    width: 25px;
    height: 25px;
    transform: rotate(360deg);
  }
  75% {
  }
  100% {
    opacity: 0.2;
    width: 20px;
    height: 20px;
    transform: rotate(-360deg);
  }
}

.button-loading {
  animation-name: buttonloading;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
</style>
