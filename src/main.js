import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SmoothScrollbar from "vue-smooth-scrollbar";
import price from "@/filters/price";
import "./plugins/element.js";
import "./plugins/firebase.js";

Vue.use(SmoothScrollbar);

Vue.config.productionTip = false;

Vue.filter("price", price);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
