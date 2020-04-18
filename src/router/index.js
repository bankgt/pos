import Vue from "vue";
import VueRouter from "vue-router";
import Cashier from "../views/Cashier.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Cashier",
    component: Cashier
  },
  {
    path: "/customer",
    name: "Customer",
    component: () => import("../views/Customer.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
