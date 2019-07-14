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
export default {
  props: ["status"],
  data() {
    return {
      isTimer: true,
      min: "25",
      sec: "00"
    };
  },
  computed: {
    currentTask() {
      return this.$store.state.currentTask;
    }
  },
  mounted() {
    this.setViewTime(this.currentTask.countdown);
  },
  methods: {
    setViewTime(time) {
      if (!time || !this.$refs.circle) return;
      this.min = `${
        Math.floor(time / 60) < 10
          ? "0" + Math.floor(time / 60).toString()
          : Math.floor(time / 60)
      }`;
      this.sec = `${
        Math.floor(time % 60) < 10
          ? "0" + Math.floor(time % 60).toString()
          : Math.floor(time % 60)
      }`;

      this.$refs.circle.style["stroke-dashoffset"] =
        42.5 * 2 * 3.15 - ((42.5 * 2 * 3.15) / 1500) * (1500 - time);
    },
    play() {
      if (!this.currentTask.countdown) return;
      this.startTask();
      this.timer = setInterval(() => {
        this.$store.dispatch("countDown");
        if (!this.currentTask.countdown) {
          this.pause();
          this.$refs.circle.style["stroke-dashoffset"] = 0;
        }
      }, 1000);
    },
    pause() {
      clearInterval(this.timer);
    },
    startTask() {
      for (let index = 0; index < this.currentTask.estimated.length; index++) {
        if (this.currentTask.estimated[index] == 3) return;
        if (this.currentTask.estimated[index] == 1) {
          this.$store.dispatch("changeTaskEstimated", {
            index,
            state: 3
          });
          return;
        }
      }
    }
  },
  watch: {
    status(val) {
      this[val]();
    },
    currentTask(val) {
      if (val && this.$refs.circle)
        this.$refs.circle.style["stroke-dashoffset"] = 42.5 * 2 * 3.15;
    },
    "currentTask.countdown"(val) {
      this.setViewTime(val);
      if (val == 0) {
        this.pause();
        for (
          let index = 0;
          index < this.currentTask.estimated.length;
          index++
        ) {
          if (this.currentTask.estimated[index] == 3) {
            this.$store.dispatch("changeTaskEstimated", {
              index,
              state: 2
            });
            let count = 0;
            for (let j = 0; j < this.currentTask.estimated.length; j++)
              if (this.currentTask.estimated == 2) count++;
            console.log(this.currentTask.estimated, count, index);

            if (index == count) this.$store.dispatch("doneTask");
            return;
          }
        }
      }
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
