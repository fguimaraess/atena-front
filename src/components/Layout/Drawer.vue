<template>
  <v-navigation-drawer app v-model="navDrawer" proeminent temporary>
    <Menu />
  </v-navigation-drawer>
</template>

<script>
import Menu from "../Layout/Menu";
export default {
  data: () => ({
    drawer: null,
  }),
  components: {
    Menu,
  },
  computed: {
    navDrawer: {
      get() {
        return this.$store.getters.navDrawer;
      },
      set() {
        return this.$store.commit("toggleNavDrawer", data);
      },
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style></style>
