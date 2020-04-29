import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navDrawer: false,
  },
  mutations: {
    toggleNavDrawer(state, data) {
      state.navDrawer = data;
    },
  },
  getters: {
    navDrawer: (state) => state.navDrawer,
  },
  actions: {},
  modules: {},
});
