import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

// Vue plugins
import store from "./store";

// Vue app
import MainApp from "./Main.vue";

// Styles
import "./styles/main.scss";

// Moment locale configuration
import moment from "moment";
moment.locale("es-AR");

// Vue instance will be globally accessible as `vm`
declare global {
  interface Window {
    vm: Vue;
  }
}

const vm = new Vue({
  el: "#app",
  template: "<main-app></main-app>",
  store,
  components: {
    MainApp,
  },
});

window.vm = vm;

export default vm;
