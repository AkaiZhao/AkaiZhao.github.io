import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    playingTask: {},
    currentActive: 0
  },
  actions: {
    changeActive({ commit }, status) {
      commit("CHANGEACTIVE", status);
    },
    selectEstimated({ commit }, status) {
      commit("CHANGEACTIVE", status);
    },
    addNewTask({ commit }, status) {
      commit("ADDNEWTASK", status);
    }
  },
  mutations: {
    CHANGEACTIVE(state, status) {
      state.currentActive = status;
    },
    ADDNEWTASK(state, status) {
      state.tasks.push(status);
    }
  }
});
