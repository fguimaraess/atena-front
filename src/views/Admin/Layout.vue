<template>
  <div>
    <Menu />
    <Toolbar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Toolbar from "../../components/Layout/Toolbar";
import Menu from "../Admin/Menu";

export default {
  name: "layout",
  components: {
    Toolbar,
    Menu,
  },
};
</script>

<style></style>
