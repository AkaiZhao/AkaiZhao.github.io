<template>
  <div class="setting">
    <h1>ADD NEW TASK</h1>
    <h4 class="setting-title">
      TASK TITLE
      <span v-if="titleAlert" class="alert">Incorrect Task Title</span>
    </h4>
    <input class="setting-input" type="text" v-model="title" @input="titleAlert=false" />
    <h4 class="setting-title">
      ESTIMATED TOMOTO
      <span v-if="estimatedAlert" class="alert">Incorrect Estimated Tomato</span>
    </h4>
    <div class="setting-esmitmated">
      <div
        class="setting-tomato"
        v-for="(t,i) in tomato"
        :key="i"
        @click="selectTomato(i+1)"
        :class="{'setting-tomato-active':t===1}"
      ></div>
    </div>
    <button class="submit" @click="addTask">ADD TASK</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tomato: new Array(10),
      tomatoCount: 0,
      estimated: [],
      title: "",
      titleAlert: false,
      estimatedAlert: false
    };
  },
  methods: {
    selectTomato(index) {
      this.estimatedAlert = false;
      for (let i = 0; i < this.tomato.length; i++) {
        this.$set(this.tomato, i, 0);
      }
      for (let i = 0; i < index; i++) {
        this.$set(this.tomato, i, 1);
      }
      this.tomatoCount = index;
    },
    addTask() {
      if (!this.title || !this.tomatoCount) {
        if (!this.title) {
          this.titleAlert = true;
        }
        if (!this.tomatoCount) {
          this.estimatedAlert = true;
        }
        return;
      }
      this.estimated = [];
      for (let i = 0; i < this.tomatoCount; i++) {
        this.estimated[i] = 1;
      }

      this.$store.dispatch("addNewTask", {
        title: this.title,
        estimated: this.estimated,
        showDetails: false,
        isDone: false,
        time: Math.floor(new Date())
      });
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
