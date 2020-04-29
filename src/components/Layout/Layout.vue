<template>
  <div>
    <Drawer />
    <Toolbar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Toolbar from "../Layout/Toolbar";
import Drawer from "../Layout/Drawer";

export default {
  name: "layout",
  components: {
    Toolbar,
    Drawer,
  },
};
</script>

<style></style>
