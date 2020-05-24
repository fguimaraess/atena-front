<template>
  <DxDataGrid :data-source="cursos" :columns="columns" :show-borders="true">
  <DxColumn caption="Titulo" data-field="nome" data-type="string" />
  <DxColumn caption="Descrição" data-field="description" data-type="string" />
  <DxColumn data-field="Criado em" data-type="date" />
  <DxColumn data-field="Url" data-type="string" />
  </DxDataGrid>
</template>
<script>
import api from "../../services/api";
import {DxDataGrid, DxColumn} from "devextreme-vue/data-grid";
export default {
  components: {
        DxColumn,
    DxDataGrid
  },
  created() {
    this.getCursos();
  },
  methods: {
    getCursos() {
      api.get("api", "cursos").then(result => {
        debugger;
        this.cursos = result.data;
      });
    }
  },
  data() {
    return {
      cursos: {},
      columns: ["nome", "description", "created_at", "url"]
    };
  }
};
</script>
