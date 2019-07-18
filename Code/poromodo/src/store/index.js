import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";
import Task from "./task";
import Break from "./break";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    task: Task,
    break: Break
  },
  state: {
    page: 0,
    isPlaying: false
  },
  actions: {
    changePage({ commit }, index) {
      commit("changePage", index);
    },
    changePlayStatus({ commit }, status) {
      commit("playStatus", status);
    }
  },
  mutations: {
    changePage(state, index) {
      state.page = index;
    },
    playStatus(state, staus) {
      state.isPlaying = staus;
    }
  }
});
