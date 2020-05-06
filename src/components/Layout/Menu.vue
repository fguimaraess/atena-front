<template>
  <v-list>
    <v-list-item to="/">
      <v-list-item-content>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item-group color="#5C88DA">
      <v-list-item to="/cursos">
        <v-list-item-content>
          <v-list-item-title>Cursos</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>

    <v-list-item-group color="#5C88DA" v-if="isAdmin">
      <v-list-item to="/admin">
        <v-list-item-content>
          <v-list-item-title>Área do Administrador</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    isAdmin: true,
  }),
};
</script>

<style></style>
