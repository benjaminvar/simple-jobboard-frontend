<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
           <div class="has-feedback">
              <input type="text" class="form-control input-sm" placeholder="Buscar...">
              <span class="glyphicon glyphicon-search form-control-feedback"></span>
            </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Fecha</th>
                <th>Operaciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="application in applications" :key="application.id">
                <td>{{application.nombre}}</td>
                <td>{{application.apellido}}</td>
                <td>{{application.email}}</td>
                <td>{{application.telefono}}</td>
                <td>{{application.created_at}}</td>
                <td>
                  <router-link class="btn bg-purple btn-xs space-right" :to="`application/${application.id}/view`">
                    <i class="glyphicon glyphicon-eye-open"></i>
                  </router-link>
                 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="box-footer">
          <div class="container-fluid">
            <div class="row"></div>
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
      token: state => state.login.token,
      applications: state => state.applications.data,
      applicationData: state => state.applications
    })
  },
  mounted() {
    this.fetchLoginToken().then(() => {
      let { access_token } = this.token;
      this.getApplications(access_token);
    });
  },
  methods:{
    ...mapActions(["fetchLoginToken","getApplications"])
  }
};
</script>