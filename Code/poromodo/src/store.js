import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    tasks: [],
    currentTask: "",
    doneTasks: [],
    currentActive: 0,
    currentState: "",
    taskCount: 1,
    playStatus: "pause"
  },

  actions: {
    setCurrentTask({ commit }, state) {
      commit("SETCURRENTTASK", state);
    },
    addNewTask({ commit }, state) {
      if (!this.state.currentTask) commit("SETCURRENTTASK", state);
      commit("ADDNEWTASK", state);
      commit("TASKCOUNTER");
    },
    changeTaskEstimated({ commit }, state) {
      let arr = this.state.currentTask.estimated;
      arr[state.index] = state.state;
      commit("CHANGETASKESTIMATED", arr);
      commit("SYNCTASK", arr);
    },
    doneTask({ commit }) {
      commit("DONETASK");
    },
    showDetail({ commit }, state) {
      commit("SELECTTASK", state);
    },
    countDown({ commit }) {
      commit("COUNTDOWN");
    },
    changePlayState({ commit }, state) {
      commit("CHANGEPLAYSTATE", state);
    }
  },
  mutations: {
    TASKCOUNTER(state) {
      state.taskCount++;
    },
    CHANGEACTIVE(state, page) {
      state.currentActive = page;
    },
    SETCURRENTTASK(state, task) {
      state.currentTask = task;
    },
    SYNCTASK(state, estimated) {
      Vue.set(state.tasks[0], "estimated", estimated);
    },
    ADDNEWTASK(state, task) {
      state.tasks.push(task);
    },
    CHANGETASKESTIMATED(state, status) {
      state.currentTask = { ...state.currentTask, estimated: status };
    },
    DONETASK(state) {
      state.currentTask = {
        ...state.currentTask,
        date: new Date().toDateString()
      };
      state.doneTasks.push(state.currentTask);
      state.tasks.splice(0, 1);
      state.currentTask = "";
    },
    SHOWDETAIL(state, isShow) {
      state.tasks = isShow;
    },
    COUNTDOWN(state) {
      state.currentTask.countdown--;
    },
    CHANGEPLAYSTATE(state, status) {
      state.playStatus = status;
    }
  }
});
