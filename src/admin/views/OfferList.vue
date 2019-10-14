<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <div class="alert alert-success" v-if="message">
            {{message}}
          </div>
          <div class="has-feedback">
              <input type="text" class="form-control input-sm" placeholder="Buscar..." @input="search" v-model="keyword">
              <span class="glyphicon glyphicon-search form-control-feedback"></span>
            </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Fecha de publicación</th>
                <th>Acción</th>
              </tr>
            </thead>
            <thead>
              <tr v-for="offer in offers" :key="offer.id">
                <td>{{offer.titulo}}</td>
                <td>{{offer.created_at}}</td>
                <td>
                  <router-link class="btn bg-purple btn-xs space-right" :to="`offer/${offer.id}/view`">
                    <i class="glyphicon glyphicon-eye-open"></i>
                  </router-link>
                  <router-link :to="`offer/${offer.id}/edit`" class="btn bg-purple btn-xs space-right">
                    <i class="glyphicon glyphicon-edit"></i>
                  </router-link>
                  <span class="btn bg-purple btn-xs space-right"  @click="remove(offer.id)">
                    <i class="glyphicon glyphicon-trash"></i>
                  </span>  
                </td>
              </tr>
            </thead>
          </table>
        </div>
        {{$store.offers}}
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
import VueNotifications from 'vue-notifications'
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data(){
    return {
      keyword: ""
      };
  },
  computed: {
    ...mapState({
      token: state => state.login.token
    }),
    ...mapGetters({
      offers: "getOffers"
    }),
    access_token: function()
    {
      return this.token.access_token;
    }
  },
  props:{
    message:{
      type: String,
      default: null
    }
  },
  
  mounted() {
    this.fetchLoginToken().then(() => {
      let params = { token: this.access_token, keyword: ""};
      this.getOffers( params);
    });
  },
  methods:{
    ...mapActions(["fetchLoginToken","getOffers","removeOffer"]),
    search()
    {
       let params = { token: this.access_token, keyword: this.keyword};
      this.getOffers(params);
    },
    remove(id)
    {
      this.callNotification("removeNotification").then((value) =>{
        if(value)
        {
            let params = { token: this.access_token, id};
            this.removeOffer(params)
            .then(() => {
              this.search();
            });
            
        }
      });
    }
  },
  notifications:{
    removeNotification:{
      title: "Confirmación",
      type: VueNotifications.types.warn,
      message: "¿Estás seguro que deseas eliminar esta oferta de trabajo?",
      buttons: ["Cancelar","Aceptar"],
      dangerMode: true,
      
    }
  }
};
</script>