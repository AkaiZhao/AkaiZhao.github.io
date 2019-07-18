export default {
  namespaced: true,
  state: {
    list: [],
    current: "",
    done: [],
    id: 0
  },
  actions: {
    add({ state, commit }, newTask) {
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
      let arr = state.current.estimated;
      arr[status.index] = status.state;
      commit("changeEstimated", arr);
      commit("syncTask", arr);
    },
    showDetail({ commit, state }, index) {
      let currentDetail = state.list[index].showDetails;
      for (let j = 0; j < state.list.length; j++) {
        commit("changeDetail", { index: j, state: false });
      }

      commit("changeDetail", { index, state: currentDetail ? false : true });
    }
  },
  mutations: {
    set(state, task) {
      state.current = { ...task };
    },
    add(state, task) {
      state.list.push(task);
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
    syncTask(state, estimated) {
      state.list = [
        { ...state.current, estimated },
        ...state.list.splice(0, 1)
      ];
    },
    changeDetail(state, status) {
      state.list[status.index].showDetails = status.state;
    }
  }
};
