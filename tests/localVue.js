import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ElementUI from "element-ui";
import SmoothScrollbar from "vue-smooth-scrollbar";
import price from "@/filters/price";

const localVue = createLocalVue();
localVue.use(SmoothScrollbar);
localVue.use(ElementUI);
localVue.use(Vuex);
localVue.filter("price", price);

export default localVue;
