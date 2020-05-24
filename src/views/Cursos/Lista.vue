<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
      v-for="(curso, i) in cursos"
      :key="i"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">PROGRAMAÇÃO</div>
          <v-list-item-title class="headline mb-1">{{
            curso.nome
          }}</v-list-item-title>
          <span>
            <vue-plyr>
              <div class="plyr__video-embed">
                <iframe
                  :src="
                    `${curso.url}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`
                  "
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
                >
                </iframe>
              </div>
            </vue-plyr>
          </span>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import api from "../../services/api";
export default {
  data: () => ({
    cursos: {},
  }),
  created() {
    this.getCursos();
  },
  methods: {
    getCursos() {
      api.get("api", "cursos/categoria", ).then((result) => {
        this.cursos = result.data;
      });
    },
  },
};
</script>

<style></style>
