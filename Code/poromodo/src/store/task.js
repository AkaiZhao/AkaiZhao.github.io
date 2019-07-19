export default {
  namespaced: true,
  state: {
    list: [],
    current: "",
    done: [],
    id: 0,
    countdownBase: 5
  },
  actions: {
    add({ state, commit }, newTask) {
      newTask.countdown = state.countdownBase;
      if (!state.current) commit("set", newTask);
      commit("add", newTask);
      commit("count");
    },
    set({ commit }, task) {
      commit("set", task);
    },
    countdown({ commit }) {
      commit("countdown");
    },
    changeEstimated({ commit, state }, status) {
      let arr = [...state.current.estimated];
      arr[status.index] = status.state;
      commit("changeEstimated", arr);
      commit("syncTask");
    },
    showDetail({ commit, state }, index) {
      let currentDetail = state.list[index].showDetails;
      for (let j = 0; j < state.list.length; j++) {
        commit("changeDetail", { index: j, state: false });
      }
      commit("changeDetail", { index, state: currentDetail ? false : true });
    },
    reset({ commit }) {
      commit("reset");
      commit("syncTask");
    }
  },
  mutations: {
    set(state, task) {
      state.current = { ...task };
    },
    add(state, task) {
      state.list.push(task);
    },
    reset(state) {
      state.current = { ...state.current, countdown: state.countdownBase };
    },
    count(state) {
      state.id += 1;
    },
    countdown(state) {
      state.current.countdown--;
    },
    done(state) {
      state.done.push(state.current);
      state.list.slice(0, 1);
    },
    changeEstimated(state, estimated) {
      state.current = { ...state.current, estimated };
    },
    syncTask(state) {
      state.list[0] = state.current;
    },
    changeDetail(state, status) {
      state.list[status.index].showDetails = status.state;
    }
  }
};
