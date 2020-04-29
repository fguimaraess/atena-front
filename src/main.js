import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import api from "./services/api";
import vuetify from "./plugins/vuetify";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.material.blue.light.compact.css";

Vue.config.productionTip = false
Vue.prototype.$pi = api;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
