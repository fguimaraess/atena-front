<template>
  <div>
      <v-tabs fixed-tabs background-color="black">
          <v-tab
        v-for="i in tabs"
        :key="i.id"
        :to="i.route"
      >
    <v-tab-item :to="i.router">{{i.title}}</v-tab-item>
    </v-tab>
  </v-tabs>
</div>
</template>

<script>
export default {
  data () {
      return {
        tab: null,
        text: '',
        icons: false,
        centered: true,
        grow: false,
         tabs: [
            {'id': '1', 'title' : 'Início', 'route':'/admin'},
            {'id': '2', 'title' : 'Cadastrar Curso', 'route':'/admin/cadastrarcurso'},
            {'id': '3', 'title' : 'Listar Cursos', 'route':'/admin/listarcursos'}
            ],
      }
    },
};
</script>

<style></style>
