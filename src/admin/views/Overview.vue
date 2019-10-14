<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="info-box">
          <!-- Apply any bg-* class to to the icon to color it -->
          <span class="info-box-icon bg-red">
            <i class="glyphicon glyphicon-briefcase"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">Ofertas Publicadas</span>
            <span class="info-box-number">{{ofertas}}</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="info-box">
          <!-- Apply any bg-* class to to the icon to color it -->
          <span class="info-box-icon bg-green">
            <i class="glyphicon glyphicon-education"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">Solicitudes Recibidas</span>
            <span class="info-box-number">{{aplicaciones}}</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      aplicaciones: state => state.overview.aplicaciones,
      ofertas: state => state.overview.ofertas,
      token: state => state.login.token
    })
  },
  mounted() {
    this.$store.dispatch("fetchLoginToken").then(() => {
      let { access_token } = this.token;
      this.$store.dispatch("getOverview", access_token);
    });
  }
};
</script>