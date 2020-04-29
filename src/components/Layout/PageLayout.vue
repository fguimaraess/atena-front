<template>
  <div class="page-layout">
    <div class="page-title">
      <slot name="title"></slot>
    </div>

    <div class="page-filter">
      <v-card tile>
        <v-card-title style="padding: 0 16px !important">
          <slot name="filter"></slot>
        </v-card-title>
      </v-card>
    </div>

    <div class="page-grid">
      <slot name="grid"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLayout",
  methods: {
    setGridHeight() {
      var pageHeight = window.innerHeight;
      var titleHeight = document.getElementById("page-title")[0]?.offsetHeight;
      var filterHeight = document.getElementById("page-filter")[0]
        ?.offsetHeight;
      var gridInfo = document.getElementById("grid-info")[0]?.offsetHeight;

      var offsetHeight = 110;
      if (gridInfo != null) offsetHeight += gridInfo.offsetHeight + 2;
      var gridDiv = document.getElementsByClassName("page-grid")[0];
      gridDiv.style.height =
        pageHeight - titleHeight - filterHeight - offsetHeight + "px";

      var grid = document.getElementById("dxGrid");
      if (grid != null) {
        grid.style.height = grid.style.height;
      }
    },
  },
  mounted() {
      this.setGridHeight();
  },
  created() {
      window.addEventListener("resize", this.setGridHeight);
  },
  destroyed() {
      window.addEventListener("resize", this.setGridHeight);
  }
};
</script>

<style>
.page-title {
    margin-bottom: 10px;
}

.page-filter {
    margin-bottom: 15px;
}
</style>
