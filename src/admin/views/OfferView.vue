<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">Información sobre la solicitud.</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th>Nombre</th>
                <td>{{application.nombre}}</td>
              </tr>
              <tr>
                <th>Apellido</th>
                <td>{{application.apellido}}</td>
              </tr>
              <tr>
                <th>Teléfono</th>
                <td>{{application.telefono}}</td>
              </tr>
              <tr>
                <th>Profesión</th>
                <td>{{application.profesion}}</td>
              </tr>
              <tr>
                <th>Descripción</th>
                <td>{{application.descripcion}}</td>
              </tr>
              <tr>
                <th>Dirección</th>
                <td>{{application.direccion}}</td>
              </tr>
              <tr>
                <th>Hoja de vida</th>
                <td><a :href="link" target="_blank">Ver archivo</a></td>
                
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-footer">
          <div class="container-fluid">
            <div>
              <router-link
                to="/applications"
                class="btn btn-primary"
              >Volver a la lista de solicitudes.</router-link>
            </div>
          </div>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      offer: state => state.offer,
      token: state => state.login.token,
    }),
    access_token() {
      return this.token.access_token;
    }
  },
  mounted() {
    this.fetchLoginToken().then(() => {
      let id = this.$route.params.id;
      this.loadData(id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    let id = this.to.params.id;
    this.fetchLoginToken().then(() => {
      this.loadData(id);
      next();
    });
  },
  methods: {
    ...mapActions(["fetchLoginToken", "getOffer"]),
    loadData(id) {
      let params = { token: this.access_token, id };
      this.getOffer(params);
    }
  }
};
</script>