<template>
  <v-app-bar app dense color="white" style="left: 0">
    <v-app-bar-nav-icon @click="navDrawer = !navDrawer" class="btn-drawer">
      <v-icon class="icon-drawer">fas fa-bars</v-icon>
    </v-app-bar-nav-icon>
    <!-- <img src=""/> -->
    <v-toolbar-title @click="$router.push('/Home')">
      Atena
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
    computed: {
        navDrawer: {
            get() {
                return this.$store.getters.navDrawer;
            },
            set(data) {
                return this.$store.commit("toggleNavDrawer", data);
            }
        }
    }
};
</script>

<style>
.btn-drawer {
    height: 36px !important;
    width: 36px !important;
}

.icon-drawer {
    font-size: 18px !important;
}

.v-toolbar__title {
    color: #5c88da;
    cursor: pointer;
    font-weight: 500;
    padding-left: 16px;
}
</style>
