import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    tasks: [],
    currentTask: '',
    finishedTasks: [],
    currentActive: 0
  },
  actions: {
    changeActive({ commit }, state) {
      commit('CHANGEACTIVE', state);
    },
    setCurrentTask({ commit }, state) {
      commit('SETCURRENTTASK', state);
    },

    addNewTask({ commit }, state) {
      if (!this.state.currentTask) {
        commit('SETCURRENTTASK', state);
      }
      commit('ADDNEWTASK', state);
    },
    changeTaskEstimated({ commit }, state) {
      let arr = this.state.currentTask.estimated;
      arr[state.index] = state.state;
      commit('CHANGETASKESTIMATED', { arr });
    },
    doneTask({ commit }) {
      Vue.set(this.state.currentTask, 'date', new Date().toDateString());
      commit('DONETASK');
    },
    showDetail({ commit }, state) {
      commit('SELECTTASK', state);
    },
    countDown({ commit }) {
      commit('COUNTDOWN');
    }
  },
  mutations: {
    CHANGEACTIVE(state, page) {
      state.currentActive = page;
    },
    SETCURRENTTASK(state, task) {
      state.currentTask = task;
    },
    ADDNEWTASK(state, task) {
      state.tasks.push(task);
    },
    CHANGETASKESTIMATED(state, status) {
      Vue.set(state.currentTask, 'estimated', status.arr);
    },
    DONETASK(state) {
      state.finishedTasks.push(state.currentTask);
      state.tasks.splice(0, 1);
      state.currentTask = '';
    },
    SHOWDETAIL(state, isShow) {
      state.tasks = isShow;
    },
    COUNTDOWN(state) {
      state.currentTask.countdown--;
    }
  }
});
