<template>
  <div class="clock circle" @click="state==='play'?pause():run()">
    <h1 class="clock-static circle" v-if="!isTimer">PODOMORO</h1>
    <svg class="clock-svg" v-else viewBox="0 0 100 100">
      <circle class="outer" cx="50" cy="50" r="42.5" />
      <circle class="fill" ref="circle" cx="50" cy="50" r="42.5" />
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isTimer: false,
      currentTime: 0,
      time: 10,
      timer: "",
      state: ""
    };
  },
  mounted() {
    // this.run();
  },
  methods: {
    run() {
      this.state = "play";
      this.timer = setInterval(() => {
        this.currentTime += 1;
        this.$refs.circle.style["stroke-dashoffset"] =
          270 - (270 / this.time) * this.currentTime;
        if (this.currentTime === this.time) this.pause();
      }, 1000);
    },
    pause() {
      clearInterval(this.timer);
      this.state = "pause";
    }
  }
};
</script>
<style lang="scss">
.outer {
  fill: none;
  stroke: #acacac;
  stroke-width: 15px;
}
.fill {
  fill: none;
  stroke: #ea5548;
  stroke-width: 15px;
  stroke-dasharray: 270;
  stroke-dashoffset: 270;
  // animation: circle-draw 2s linear infinite;
}
// @keyframes circle-draw {
//   100% {
//     stroke-dashoffset: 0;
//   }
// }

$clock-size: 300px;
$primary: #ea5548;
.clock {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // margin: auto;
  // margin-top: 22%;
  width: $clock-size;
  height: $clock-size;
  &-static {
    width: 100%;
    height: 100%;
    background-color: $primary;
    line-height: $clock-size;
    text-align: center;
    font-size: 24px;
    color: #fcfcfc;
    font-weight: lighter;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      right: 30px;
      top: -2px;
      width: 56.25px;
      height: 75px;
      border-radius: 50px;
      background-color: #316901;
      transform: rotate(45deg);
    }
  }
  &-svg {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
  }
}
</style>
