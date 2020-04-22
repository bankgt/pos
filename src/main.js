import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SmoothScrollbar from "vue-smooth-scrollbar";
import numeral from "numeral";
import "./plugins/element.js";
import "./plugins/firebase.js";

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
