import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import mixin from "./mixin";
Vue.config.productionTip = false;
Vue.mixin(mixin);
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
