import Vue from "vue";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale";
import lang from "element-ui/lib/locale/lang/en";
import "../assets/scss/_variables.scss";
import "element-ui/packages/theme-chalk/src/index.scss";

locale.use(lang);

Vue.use(ElementUI);
