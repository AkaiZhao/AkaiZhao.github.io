<template>
  <div id="app">
    <div class="left">
      <clock-cmp></clock-cmp>
      <p class="task">
        You don’t have any task now,
        <br />please add task first!
      </p>
      <footer>
        <p>PODOMORO</p>
      </footer>
    </div>
    <div class="right">
      <tool-bar></tool-bar>
      <transition name="slide">
        <div class="settings" v-show="currentActive>=0">
          <keep-alive>
            <add-new-task v-if="currentActive===0"></add-new-task>
            <task-list v-if="currentActive===1"></task-list>
            <anyalytics-report v-if="currentActive===2"></anyalytics-report>
          </keep-alive>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ClockCmp from "./components/Clock.vue";
import ToolBar from "./components/ToolBar.vue";
import AddNewTask from "./components/AddNewTask.vue";
import TaskList from "./components/TaskList.vue";
import AnyalyticsReport from "./components/AnyalyticsReport.vue";
export default {
  name: "app",
  components: { ClockCmp, ToolBar, AddNewTask, TaskList, AnyalyticsReport },
  methods: {},
  computed: {
    currentActive() {
      return this.$store.state.currentActive;
    }
  }
};
</script>

<style lang="scss">
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
}
.circle {
  border-radius: 50%;
}
.left {
  background: #eaeaea;
  flex-grow: 1;
  position: relative;
}
.right {
  background-color: #333333;
  position: relative;
  display: flex;
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
.close {
  width: 90px;
  height: 50px;
  position: absolute;
  bottom: 40px;
  left: -30px;
  border-radius: 25px 5px 5px 25px;
  background-color: #fcfcfc;
  display: flex;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgb(212, 212, 212);
  }
  &::after {
    content: "";

    width: 20px;
    height: 14px;
    margin-top: 18px;
    margin-left: 13px;
    display: block;
    background-image: url("~@/assets/icons/arrow.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }
  &::before {
    content: "";
    width: 25px;
    height: 25px;
    margin-top: 12.5px;
    margin-left: 12px;
    display: block;
    background-image: url("~@/assets/icons/tomato_small_color.svg");
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
