<template>
  <div class="clock circle">
    <h1 class="clock-static circle" v-if="!isTimer">PODOMORO</h1>
    <svg class="clock-svg" v-else viewBox="0 0 100 100">
      <circle class="outer" cx="50" cy="50" r="42.5" />
      <circle class="fill" ref="circle" cx="50" cy="50" r="42.5" />
    </svg>
    <h1 class="clock-timer circle">{{ min }}:{{ sec }}</h1>
  </div>
</template>
<script>
export default {
  props: ["status"],
  data() {
    return {
      isTimer: true,
      currentTime: 0,
      time: 25 * 60,
      min: "25",
      sec: "00",
      state: ""
    };
  },
  mounted() {
    this.min = `${
      Math.floor(this.time / 60) < 10
        ? "0" + Math.floor(this.time / 60).toString()
        : Math.floor(this.time / 60)
    }`;
  },
  methods: {
    play() {
      if (this.currentTime == this.time) {
        return;
      }
      this.state = "play";
      this.timer = setInterval(() => {
        this.currentTime += 1;
        this.$refs.circle.style["stroke-dashoffset"] =
          42.5 * 2 * 3.14 - ((42.5 * 2 * 3.14) / this.time) * this.currentTime;
        if (this.$refs.circle.style["stroke-dashoffset"] < 0) {
          this.$refs.circle.style["stroke-dashoffset"] = 0;
        }
        if (this.currentTime === this.time) this.pause();
      }, 1000);
    },
    pause() {
      clearInterval(this.timer);
      this.state = "pause";
    }
  },
  watch: {
    status(val) {
      this[val]();
      // switch(event){
      //   case 'play':
      //     this.play()
      // }
    },
    currentTime(val) {
      let t = this.time - val;
      this.min = `${
        Math.floor(t / 60) < 10
          ? "0" + Math.floor(t / 60).toString()
          : Math.floor(t / 60)
      }`;
      this.sec = `${
        Math.floor(t % 60) < 10
          ? "0" + Math.floor(t % 60).toString()
          : Math.floor(t % 60)
      }`;
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
  stroke-dasharray: calc(42.5 * 2 * 3.14);
  stroke-dashoffset: calc(42.5 * 2 * 3.14);
}
$clock-size: 300px;
$primary: #ea5548;
.clock {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);

  width: 50vw;
  height: 50vw;
  max-width: $clock-size;
  max-height: $clock-size;
  position: relative;
  &-timer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    font-size: 40px;
    color: #333333;
  }
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
