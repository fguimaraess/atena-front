<template>
  <v-app style="background: #f9f9f9">
    <router-view />
  </v-app>
</template>

<script>
import { loadMessages } from "devextreme/localization";

export default {
  name: "App",
  data: () => ({
    //
  }),
  created() {
    loadMessages({
      en: {
        "dxDataGrid-filterRowOperationEquals": "Igual",
        "dxDataGrid-filterRowOperationNotEquals": "Diferente",
        "dxDataGrid-filterRowOperationLess": "Menor que",
        "dxDataGrid-filterRowOperationLessOrEquals": "Menor ou igual a",
        "dxDataGrid-filterRowOperationGreater": "Maior que",
        "dxDataGrid-filterRowOperationGreaterOrEquals": "Maior ou igual a",
        "dxDataGrid-filterRowOperationStartsWith": "Começa com",
        "dxDataGrid-filterRowOperationContains": "Contém",
        "dxDataGrid-filterRowOperationNotContains": "Não contém",
        "dxDataGrid-filterRowOperationEndsWith": "Termina com",
        "dxDataGrid-filterRowOperationBetween": "Entre",
        "dxDataGrid-filterRowOperationBetweenStartText": "Início",
        "dxDataGrid-filterRowOperationBetweenEndText": "Fim",
        "dxDataGrid-applyFilterText": "Aplicar filtro",
        "dxDataGrid-filterRowResetOperationText": "Redefinir",
        "dxDataGrid-sortingAscendingText": "Ordenação Crescente",
        "dxDataGrid-sortingDescendingText": "Ordenação Decrescente",
        "dxDataGrid-sortingClearText": "Limpar Ordenação",
      },
    });
  },
};
</script>

<style>
.v-application {
  font-family: Arial, sans-serif !important;
  height: 100% !important;
}
</style>
