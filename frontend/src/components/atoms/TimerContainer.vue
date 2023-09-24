<template>
  <div class="wrapper">
    <div class="timer">
      <div
        v-for="(time, index) in times"
        :key="index"
        :time="times"
      >
        <div class="card-block">
          <h4 class="card-title">{{timerIsNegative(digitInCero(time.time)) }}</h4>
        <div class="card-footer">
          {{time.text}}
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimerContainer',
  props: {
    poolDateCode: {
      type: String,
    },
  },
  data() {
    return {
      times: [
        { id: 0, text: 'Days', time: 45 },
        { id: 1, text: 'Hours', time: 35 },
        { id: 2, text: 'Minutes', time: 25 },
        { id: 3, text: 'Seconds', time: 15 },
      ],
    }
  },
  computed: {
    endTime() {
      const month = this.poolDateCode.slice(0,3).charAt(0).toUpperCase() + this.poolDateCode.slice(0,3).substr(1)
      const year = this.poolDateCode.slice(3)
      return month + ' 28, ' + year + ' 11:00:00'
    }
  },
  methods: {
    digitInCero(time) {
      return time === 0? '00': time
    },
    timerIsNegative(time) {
      return Math.sign(time) === 1 ? time : '00'
    },
    updateTimer() {
      this.getTimeRemaining()
    },
    getTimeRemaining() {
      const time = Date.parse(new Date(this.endTime)) - Date.parse(new Date())
      this.times[0].time = Math.floor(time / (1000 * 60 * 60 * 24))
      this.times[1].time = Math.floor((time / (1000 * 60 * 60)) % 24)
      this.times[2].time = Math.floor(time / 1000 / 60 % 60)
      this.times[3].time = Math.floor(time / 1000 % 60)
    },
  },
  created() {
    this.updateTimer()
    setInterval(this.updateTimer, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');

.wrapper {
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.timer {
  display: flex;
  justify-content: left;
}
.card-title {
  font-family: 'Pacifico', cursive;
  font-size: 73px;
  margin: 0 27px;
  color: $primary;
  display: inline-block;
}
.card-block {
  position: relative;
}
.card-footer {
    font-family: "Roboto Mono", monospace;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}
@media (max-width: 511px) {
  .card-title {
    font-size: 55px;
    margin: 0 11px;
    height: 88px;
  }
  .wrapper {
    padding: 0 15px;
  }
  .card-footer {
    top: 88px;
  }
}
</style>
