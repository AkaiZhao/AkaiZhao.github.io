<template>
  <div id="app">
    <div class="left">
      <h1 class="left-title" v-if="currentTask">{{currentTask.title}}</h1>
      <div class="list-info-estimated left-estimated" v-if="currentTask">
        <div
          class="list-info-estimated-icon"
          v-for="(e,i) in currentTask.estimated"
          :key="i"
          v-show="e"
          :class="{ unstarted: e == 1, done: e == 2, undone: e == 3 }"
        ></div>
      </div>
      <clock-cmp :status="playStatus"></clock-cmp>
      <div class="action" v-if="currentTask">
        <a
          href="#"
          class="action-botton action-botton-play"
          @click.prevent="changeStatus('play')"
          :class="{ active: playStatus == 'play' }"
        ></a>
        <a
          href="#"
          class="action-botton action-botton-pause"
          @click.prevent="changeStatus('pause')"
          :class="{ active: playStatus == 'pause' }"
        ></a>
        <a
          href="#"
          class="action-botton action-botton-reset"
          @click.prevent="changeStatus('reset')"
          :class="{ active: playStatus == 'reset' }"
        ></a>
      </div>
      <p class="task task-complete" v-if="!currentTask">
        You don’t have any task now,
        <br />please add task first!
      </p>
      <footer>
        <p>PODOMORO</p>
      </footer>
    </div>
    <div class="right" :class="{'right-abs':currentActive >= 0}">
      <tool-bar></tool-bar>
      <transition name="slide">
        <div class="settings" v-show="currentActive >= 0">
          <keep-alive>
            <add-new-task v-if="currentActive === 0"></add-new-task>
            <task-list v-if="currentActive === 1"></task-list>
            <anyalytics-report v-if="currentActive === 2"></anyalytics-report>
          </keep-alive>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ClockCmp from "./components/Clock.vue";
import ToolBar from "./components/ToolBar.vue";
import AddNewTask from "./components/AddNewTask.vue";
import TaskList from "./components/TaskList.vue";
import AnyalyticsReport from "./components/AnyalyticsReport.vue";
export default {
  components: {
    ClockCmp,
    ToolBar,
    AddNewTask,
    TaskList,
    AnyalyticsReport
  },
  computed: mapState(["currentActive", "tasks", "currentTask", "playStatus"]),
  created() {
    this.checkVersion();
  },
  mounted() {
    if (this.tasks.length && !this.currentTask) this.setCurrentTask();
  },
  methods: {
    checkVersion() {
      if (localStorage.getItem("version") === "1.1") return;
      localStorage.clear();
      localStorage.setItem("version", "1.1");
    },
    changeStatus(status) {
      if (this.currentTask.countdown <= 0) return;
      this.$store.dispatch("changePlayState", status);
    },
    setCurrentTask() {
      this.$store.dispatch("setCurrentTask", this.tasks[0]);
    }
  },
  watch: {
    currentTask(val) {
      if (val) return;
      this.setCurrentTask();
      this.changeStatus("pause");
    }
  }
};
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
}

::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
:root {
  --clock-time: 1s;
}
@import url("https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap");
$primary: #ea5548;
body,
html {
  background-color: $primary;
  height: 100%;
  margin: 0;
}
body {
  display: flex;
  font-family: "Lato", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}
#app {
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 1240px;
  max-height: 840px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  @media (max-width: 800px) {
    padding: 0;
  }
}
.circle {
  border-radius: 50%;
}
.left {
  background: #eaeaea;
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-title {
    margin-top: 100px;
    text-align: center;
    margin-bottom: 10px;
  }
  &-estimated {
    margin: 0 auto;
    margin-bottom: 50px;
  }
}
.action {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  width: 100%;
  max-width: 375px;
  &-botton {
    display: block;
    width: 50px;
    height: 50px;
    background: #fcfcfc;
    border-radius: 50%;
    margin: 0 37.5px;
    background-size: cover;
    @media (max-width: 800px) {
      margin: 0 20px;
    }
    &-play {
      background-image: url("~@/assets/icons/start_gray.svg");
      &.active {
        background-image: url("~@/assets/icons/start_red.svg");
      }
    }
    &-pause {
      background-image: url("~@/assets/icons/pause_gray.svg");
      &.active {
        background-image: url("~@/assets/icons/pause_red.svg");
      }
    }
    &-reset {
      background-image: url("~@/assets/icons/reset_gray.svg");
      &.active {
        background-image: url("~@/assets/icons/reset_red.svg");
      }
    }
  }
}
.right {
  background-color: #333333;
  position: relative;
  display: flex;
  @media (max-width: 800px) {
    &-abs {
      position: absolute;
      left: 0;
      height: 100%;
      top: 0;
    }
  }
}
.task {
  text-align: center;
  position: absolute;
  bottom: 150px;
  left: 50%;
  transform: translate(-50%, 0);
}
footer {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  > p {
    font-size: 10px;
    text-align: center;
    margin-top: 10%;
    color: #333333;
  }
}

.settings {
  width: 512px;
  height: 100%;
  background-color: #333333;
  overflow: hidden;
}
.setting {
  width: 512px;
  height: 100%;
  box-sizing: border-box;
  padding: 0 33px;
  box-sizing: border-box;
  @media (max-width: 800px) {
    width: 90vw;
  }
  h1 {
    font-size: 20px;
    letter-spacing: 1px;
    height: 80px;
    line-height: 80px;
    color: #fcfcfc;
    font-weight: 1000;
    border-bottom: 1px solid #414141;
  }

  &-title {
    margin-top: 25px;
    margin-bottom: 10px;
    color: #acacac;
    font-size: 14px;
    letter-spacing: 1px;
    span {
      font-size: 10px;
      color: #eaeaea;
      letter-spacing: 0.5px;
      &.alert {
        color: $primary;
      }
    }
  }
  &-input {
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    font-size: 16px;
    border-radius: 5px;
    color: #333333;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  &-esmitmated {
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  &-tomato {
    width: 25px;
    height: 25px;
    background-image: url("~@/assets/icons/tomato_small_gray.svg");
    &-active {
      background-image: url("~@/assets/icons/tomato_small_color.svg");
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
.slide-enter,
.slide-leave-to {
  width: 0;
}
</style>
