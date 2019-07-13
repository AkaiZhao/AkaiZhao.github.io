export default {
  methods: {
    /**
     * @param {Object} data
     * - task所需資料。
     * title{string} estimated{array}
     * showDetails{boolean} isDone{number}
     * @param {number} count - 預設estimated的數量
     * @param {number} action - 1-add task 2-modify task
     */
    taskControl(data, count, action = 2) {
      let err = {};
      console.log(data, count);

      if (!data.title || !count) {
        if (!data.title) err.title = true;
        if (!count) err.estimated = true;
        return err;
      }
      data.estimated = new Array(10);
      if (count) for (let i = 0; i < count; i++) data.estimated[i] = 1;
      if (action == 1) this.$store.dispatch("addNewTask", { ...data });
      else if (action == 2) this.$store.dispatch("modifyTask", { ...data });
    },
    calcEstimatedArray(index) {
      let arr = new Array(10);
      for (let i = 0; i < arr.length; i++) arr[i] = 0;
      for (let i = 0; i < index; i++) arr[i] = 1;
      return arr;
    }
  }
};
