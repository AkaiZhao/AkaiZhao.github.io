export default {
  namespaced: true,
  state: {
    time: 5,
    countdown: 0
  },
  actions: {
    setCountdown({ commit }) {
      commit("set");
    },
    countdown({ commit }) {
      commit("countdown");
    }
  },
  mutations: {
    set(state) {
      state.countdown = state.time;
    },
    countdown(state) {
      state.countdown -= 1;
    }
  }
};