<template>
  <div class="col-12" data-aos="fade">
    <h1>Buscar trabajo</h1>
    <form action="#" @submit.prevent="search">
      <div class="row mb-3">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4 mb-3 mb-md-0">
              <input
                type="text"
                class="mr-3 form-control border-0 px-4"
                placeholder="Titulo "
                v-model="titulo"
              />
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="input-wrap">
                <span class="icon icon-room"></span>
                <input
                  type="text"
                  class="form-control form-control-block search-input border-0 px-4"
                  id="autocomplete"
                  placeholder="Estado"
                  v-model="estado"
                />
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <select
                class="mr-3 form-control border-0 px-4"
                placeholder="Categoria"
                v-model="categoria"
              >
                <option :value="null">Todas</option>
                <option
                  v-for="category in categories"
                  :value="category.id"
                  :key="category.id"
                >{{category.nombre}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <input type="submit" class="btn btn-search btn-primary btn-block" value="Buscar" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      titulo: "",
      estado: "",
      categoria: null
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    }
  },
  methods: {
    search() {
      let query = this.buildParams();
      this.$router.push({
        path: "/jobs",
        query: query
      });
    },
    buildParams() {
      let params = {};
      if (this.titulo.length > 0) {
        params["title"] = this.titulo;
      }
      if (this.estado.length > 0) {
        params["state"] = this.estado;
      }
      if (this.categoria !== null) {
        params["category"] = this.categoria;
      }
      return params;
    }
  }
};
</script>