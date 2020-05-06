<template>
  <div>
    <v-tabs v-model="tab" background-color="dark" centered dark icons-and-text>
      <v-tab v-for="i in tabs" :key="i.id" :to="i.route">
        {{i.title}}
      </v-tab>
    </v-tabs>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      text: "",
      icons: false,
      centered: true,
      grow: false,
      tabs: [
        { id: "1", title: "Início", route: "/admin" },
        { id: "2", title: "Cadastrar Curso", route: "/admin/cadastrarcurso" },
        { id: "3", title: "Listar Cursos", route: "/admin/listarcursos" }
      ]
    };
  }
};
</script>

<style></style>
