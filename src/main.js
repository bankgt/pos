import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import SmoothScrollbar from "vue-smooth-scrollbar";
import numeral from "numeral";

Vue.use(SmoothScrollbar);

Vue.config.productionTip = false;

Vue.filter("price", value => {
  return numeral(value)
    .format("$0,0")
    .replace("$", "฿");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
