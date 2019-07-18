<template>
  <div class="clock circle" :class="{'clock-abs':!currentTask}">
    <h1 class="clock-static circle" v-if="!currentTask">PODOMORO</h1>
    <svg class="clock-svg" v-if="currentTask" viewBox="0 0 100 100">
      <circle class="outer" cx="50" cy="50" r="42.5" />
      <circle class="fill" ref="circle" cx="50" cy="50" r="42.5" />
    </svg>
    <h1 class="clock-timer circle" v-if="currentTask">{{ min }}:{{ sec }}</h1>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["status"],
  data() {
    return {
      isTimer: true,
      min: "25",
      sec: "00",
      perimeter: 42.5 * 6.3,
      totalTime: 2,
      breakTime: 2,
      breakCountdown: 0
    };
  },
  computed: mapState(["currentTask"]),
  mounted() {
    this.setViewTime(this.currentTask.countdown);
  },
  methods: {
    setViewTime(time, totalTime = 5) {
      if (time == undefined) return;
      let m = Math.floor(time / 60).toString(),
        s = Math.floor(time % 60).toString();
      this.min = m < 10 ? "0" + m : m;
      this.sec = s < 10 ? "0" + s : s;
      this.$refs.circle.style["stroke-dashoffset"] =
        (time * this.perimeter) / totalTime;
    },
    play() {
      this.startTask();
      this.timer = setInterval(() => {
        this.$store.dispatch("countDown");
        if (this.currentTask.countdown) return;
        this.pause();
        this.$refs.circle.style["stroke-dashoffset"] = 0;
      }, 1000);
    },
    pause(isBreak) {
      if (!isBreak) this.$store.dispatch("changePlayState", "pause");
      clearInterval(this.timer);
    },
    startTask() {
      this.$refs.circle.style.stroke = null;
      for (let index = 0; index < this.currentTask.estimated.length; index++) {
        if (this.currentTask.estimated[index] == 3) return; //if running return
        if (this.currentTask.estimated[index] == 1)
          return this.$store.dispatch("changeTaskEstimated", {
            index,
            state: 3
          });
      }
    },
    finishStep() {
      this.pause();
      for (let index = 0; index < this.currentTask.estimated.length; index++) {
        if (this.currentTask.estimated[index] == 3) {
          this.$store.dispatch("changeTaskEstimated", {
            index,
            state: 2
          });
          break;
        }
      }
      setTimeout(() => {
        this.startBreak();
      }, 1000);
    },
    startBreak() {
      this.$refs.circle.style["stroke-dashoffset"] = this.perimeter;
      this.$refs.circle.style.stroke = "#B5E254";
      this.breakCountdown = this.breakTime;
      this.timer = setInterval(() => {
        this.breakCountdown--;
        this.$store.dispatch("countDown");
        if (this.breakCountdown) return;
        this.pause();
        this.nextTask();
        this.$refs.circle.style["stroke-dashoffset"] = 0;
      }, 1000);
      console.log(this.currentTask);
    },
    nextTask() {
      for (let i = 0; i < this.currentTask.length; i++) {
        if (this.currentTask[i] == 1 || this.currentTask[i] == 3) {
        }
      }
    },
    finishBreak() {
      this.pause(true);
    }
  },
  watch: {
    status(val) {
      this[val]();
    },
    currentTask(val) {
      if (val && this.$refs.circle)
        this.$refs.circle.style["stroke-dashoffset"] = this.perimeter;
    },
    breakCountdown(val) {
      this.$nextTick(() => this.setViewTime(val, this.breakTime));
      if (val !== 0) return;
      this.finishBreak();
    },
    "currentTask.countdown"(val) {
      this.$nextTick(() => this.setViewTime(val, this.totalTime));
      if (val !== 0) return;
      this.finishStep();
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
  stroke-dasharray: calc(42.5 * 2 * 3.15);
  stroke-dashoffset: calc(42.5 * 2 * 3.15);
  transition: stroke-dashoffset 0.6s linear;
}
$clock-size: 300px;
$primary: #ea5548;
.clock {
  width: 50vw;
  height: 50vw;
  max-width: $clock-size;
  max-height: $clock-size;
  position: relative;
  &-abs {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
