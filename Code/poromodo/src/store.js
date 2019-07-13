import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    tasks: [],
    currentTask: {},
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
    },
    selectTask({ commit }, status) {
      commit("SELECTTASK", status);
    },
    showDetail({ commit }, status) {
      commit("SELECTTASK", status);
    }
  },
  mutations: {
    CHANGEACTIVE(state, status) {
      state.currentActive = status;
    },
    ADDNEWTASK(state, status) {
      state.tasks.push(status);
    },
    SELECTTASK(state, status) {
      state.currentTask = status;
    },
    SHOWDETAIL(state, status) {
      state.tasks = status;
    }
  }
});
