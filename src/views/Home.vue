<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(categoria, i) in categories" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
  
            <v-btn
              text
              x-large
              :loading="loading3"
              :disabled="loading3"
              color="white"
              class="ma-2 white--text"
              @click="loader = 'loading3'"
              :to="'/cursos/' + categoria.id"
            >
              <v-icon>fas fa-code</v-icon> Aprenda {{ categoria.categoria }} <v-icon>fas fa-code</v-icon>

            </v-btn>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import api from "../services/api";
export default {
  data() {
    return {
      colors: ["indigo", "indigo", "indigo", "indigo"],
      categories: {}
    };
  },
  created() {
    this.getCursos();
  },
  methods: {
    getCursos() {
      api.get("api", "categorias").then(result => {
        debugger;
        this.categories = result.data;
        console.log(this.categories);
      });
    },
  }
};
</script>