<template>
  <div>
    <Drawer />
    <Toolbar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
<Footer />
  </div>

</template>

<script>
import Toolbar from "../Layout/Toolbar";
import Drawer from "../Layout/Drawer";
import Footer from '../Layout/Footer'

export default {
  name: "layout",
  components: {
    Toolbar,
    Drawer,
    Footer
  },
};
</script>

<style></style>
