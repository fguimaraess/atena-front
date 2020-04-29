import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#5C88DA",
        secondary: "#0A18EC",
        accent: "#0A46DC",
        error: "#F0642D",
        info: "#6919B9",
        success: "#00965E",
        warning: "#FFC845",
      },
    },
  },
  icons: {
    iconfont: "fa",
  },
});
