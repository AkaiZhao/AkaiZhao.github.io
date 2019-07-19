<template>
  <div class="setting">
    <h1>ADD NEW TASK</h1>
    <h4 class="setting-title">
      TASK TITLE
      <span v-if="err.title" class="alert">Incorrect Task Title</span>
    </h4>
    <input class="setting-input" type="text" v-model="taskData.title" @input="err.title = false" />
    <h4 class="setting-title">
      ESTIMATED TOMOTO
      <span v-if="err.estimated" class="alert">Incorrect Estimated Tomato</span>
    </h4>
    <div class="setting-esmitmated">
      <div
        class="setting-tomato"
        v-for="(t, i) in estimated"
        :key="i"
        @click="estimatedHandler(i + 1)"
        :class="{ 'setting-tomato-active': t === 1 }"
      ></div>
    </div>
    <button class="submit" @click="addTaskHandler">ADD TASK</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      estimated: new Array(10),
      estimatedCount: 0,
      err: {
        title: false,
        estimated: false
      },
      taskData: {
        title: "",
        estimated: [],
        showDetails: false
      }
    };
  },
  computed: {
    ...mapState({
      task: s => s.task
    })
  },
  methods: {
    addTaskHandler() {
      this.taskData = { ...this.taskData, id: this.task.id };
      let res = this.taskControl(this.taskData, this.estimatedCount, 1);
      if (res) this.err = res;
    },
    estimatedHandler(index) {
      this.err.estimated = false;
      this.estimated = this.calcEstimatedArray(index);
      this.estimatedCount = index;
    }
  }
};
</script>
<style lang="scss">
.esmitmated {
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
}
.tomato {
  width: 25px;
  height: 25px;
  background-image: url("~@/assets/icons/tomato_small_gray.svg");
  &-active {
    background-image: url("~@/assets/icons/tomato_small_color.svg");
  }
}
.submit {
  margin-top: 50px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  border-radius: 25px;
  letter-spacing: 1px;
  background-color: #ea5548;
  font-weight: 1000;
  color: #fcfcfc;
  border: none;
  outline: none;
}
</style>
