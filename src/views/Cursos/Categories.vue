<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar color="white" class="mb-1" max-width="800px" style="margin-left:370px">
          <v-text-field v-model="search" flat solo-inverted hide-details label="Procurar por"></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              label="Filtrar por"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn depressed :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn depressed :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row >
          <v-col v-for="item in props.items" :key="item.name" >
            <v-card class="teste" width="360px" max-height="90px">
              <v-img
                class="rapaziada"
                src="https://static.vakinha.com.br/uploads/vakinha/image/534532/ETS-TOEFL.jpg?ims=700x410"
              ></v-img>
              <div class="descricao">
                <h6>{{item.nome}}</h6>

                <h6>Duração do curso: 16horas</h6>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon></v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Itens por pagina</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn dark text color="primary" class="ml-2" v-on="on">
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">Pagina {{ page }} de {{ numberOfPages }}</span>
          <v-btn fab dark color="indigo" class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="indigo" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import api from '../../services/api'
export default {
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "name",
      keys: [],
      items: []
    };
  },
  created() {
    this.getCursos();
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    getCategories() {
      api.get("api", "categorias").then(result => {
        this.keys = result.data.map(categoria => categoria.categoria);
        return this.keys.filter(key => key !== `nome`);
      });
    },
    getCursos() {
      api.get("api", "curso").then(result => {
        debugger;
        this.items = result.data;
      });
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    }
  }
};
</script>

<style>
.teste {
  margin: 2px 1px 2px 2px;
  }
.rapaziada {
  height: 90px;
  width: 180px;
}
.descricao {
  margin-left: 218px;
  margin-top: -60px;
}
.testado {
  font-size: 3px;
}
</style>