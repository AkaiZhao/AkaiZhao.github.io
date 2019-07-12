<template>
  <div class="setting">
    <h1>TASK LISTS</h1>
    <div class="table">
      <ul class="tags">
        <li class="tag">
          <a href="#" class="active">TO DO</a>
        </li>
        <li class="tag">
          <a href="#">DONE</a>
        </li>
      </ul>
      <div class="lists" v-if="tasks.length">
        <div
          class="list"
          :class="{'list-show':t.showDetails}"
          v-show="!t.isDone"
          v-for="(t,ti) in tasks"
          :key="ti"
        >
          <div class="list-top">
            <div class="list-mark" :class="{'list-done':t==currentTask}"></div>
            <div class="list-info">
              <h5 class="list-info-title">{{t.title}}</h5>
              <div class="list-info-estimated">
                <div
                  class="list-info-estimated-icon list-info-estimated-icon"
                  v-for="(e,ei) in t.estimated"
                  :key="ei"
                  :class="{unstarted:e==1,done:e==2,undone:e==3}"
                ></div>
              </div>
            </div>
            <a href="#" class="list-active" @click.prevent="showDetail(ti)">
              <div class="list-active-dot"></div>
            </a>
          </div>
          <div class="list-detail" v-if="t.showDetails">
            <h4 class="list-detail-title">TASK TITLE</h4>
            <input class="list-detail-input" type="text" />
            <h4 class="list-detail-title">ESTIMATED TOMOTO</h4>
            <div class="list-detail-esmitmated">
              <div
                class="list-detail-tomato list-detail-tomato-active"
                v-for="a in new Array(10)"
                :key="a"
              ></div>
            </div>
            <div class="list-detail-buttons">
              <a href="#" class="list-detail-button list-detail-button-archive">ARCHIVE</a>
              <a href="#" class="list-detail-button list-detail-button-save">SAVE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    selectTask(task) {
      this.$store.dispatch("selectTask", task);
    },
    showDetail(index) {
      let res = this.tasks;
      let detailState = res[index].showDetails;
      for (let j = 0; j < res.length; j++) {
        res[j].showDetails = false;
      }
      res[index].showDetails = detailState ? false : true;
      this.$store.dispatch("showDetail", res);
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    currentTask() {
      return this.$store.state.currentTask;
    }
  }
};
</script>

<style lang="scss">
.table {
  padding-top: 25px;
}
.tags {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1px;
}
.tag {
  a {
    display: block;
    padding: 5px 20px;
    color: #acacac;
    background-color: #606060;
    margin-right: 5px;
    border-radius: 5px 5px 0 0;
    font-size: 12px;
    font-weight: 1000;
    text-decoration: none;
    &.active {
      color: #fcfcfc;
      background-color: #ea5548;
    }
  }
}
.lists {
  height: 650px;
  overflow-y: auto;
}
.list {
  background-color: #414141;
  margin-bottom: 1px;
  position: relative;
  transition: 0.3s;
  height: 50px;
  overflow: hidden;
  &-show {
    height: 245px;
  }
  &:not(.list-show) {
    &:hover {
      z-index: 1;
      box-shadow: 0 0 5px rgba(#ffffff, 0.5);
    }
  }
  &-top {
    display: flex;
  }
  &-mark {
    padding: 18.5px 13px;
    width: 13px;
    height: 13px;
  }
  &-done {
    background: url("~@/assets/icons/tomato_small_color.svg") center no-repeat;
    background-size: 13px;
  }
  &-info {
    padding: 9px 0;
    &-title {
      font-size: 16px;
      color: #fcfcfc;
      font-weight: normal;
    }
    &-estimated {
      padding-top: 5px;
      display: flex;
      padding-left: 1px;
      &-icon {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1px solid #ea5548;
        box-sizing: border-box;
        margin-right: 6px;
        &.done {
          background-color: #ea5548;
        }
        &.undone {
          overflow: hidden;
          position: relative;
          &::before,
          &::after {
            content: "";
            position: absolute;
            right: 0;
            width: 50%;
            height: 100%;
            background-color: #ea5548;
          }
          &::after {
            transform-origin: 0 50%;
            transform: rotate(90deg);
          }
        }
      }
    }
  }
  &-active {
    position: absolute;
    right: 0;
    height: 50px;
    width: 40px;
    &-dot {
      margin: 23.5px 18.5px;
      width: 3px;
      height: 3px;
      background: #acacac;
      border-radius: 1.5px;
      position: relative;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 3px;
        height: 3px;
        background: #acacac;
        border-radius: 1.5px;
      }
      &::before {
        right: -6px;
      }
      &::after {
        left: -6px;
      }
    }
  }
  &-detail {
    margin: 0 40px;
    box-sizing: border-box;
    border-top: 1px solid #333333;
    padding-bottom: 20px;
    &-title {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 1px;
      color: #acacac;
    }
    &-input {
      padding: 11.5px 15px;
      width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      border-radius: 5px;
      color: #333333;
      letter-spacing: 0.5px;
      outline: none;
      border: none;
    }
    &-esmitmated {
      display: flex;
      justify-content: space-between;
      padding-bottom: 15px;
    }
    &-tomato {
      width: 20px;
      height: 20px;
      background-image: url("~@/assets/icons/tomato_small_gray.svg");
      background-size: contain;
      &-active {
        background-image: url("~@/assets/icons/tomato_small_color.svg");
      }
    }
    &-buttons {
      display: flex;
      justify-content: space-between;
    }
    &-button {
      font-size: 14px;
      font-weight: 1000;
      color: #fcfcfc;
      letter-spacing: 1px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: block;
      border-radius: 20px;
      text-decoration: none;
      transition: 0.3s;
      &:hover {
        filter: brightness(0.9);
      }
      &-archive {
        width: 100px;
        background: #606060;
      }
      &-save {
        width: 250px;
        background: #ea5548;
      }
    }
  }
}
</style>
