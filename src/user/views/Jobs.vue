<template>
<div class="jobs">
    <HeroSmall title="Buscar Trabajos"></HeroSmall>
    <div class="site-section bg-light">
        <div class="container">
        <div class="row">
            <div class="col-md-4">
                <form action="" class="p-5 bg-white" @submit.prevent="submit">
                    <h5>Buscar Trabajos</h5>
                    <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="titulo">Titulo</label>
                  <input type="text" id="titulo" class="form-control" placeholder="Titulo" v-model="titulo">
                </div>
              </div>
               <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="estado">Estado</label>
                  <input type="text" id="estado" class="form-control" placeholder="Estado/Provincia" v-model="estado">
                </div>
              </div>
               <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="fullname">Categoria</label>
                  <select type="text" id="categoria" class="form-control" placeholder="Full Name" v-model="categoria">
                    <option :value="null">Todas</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{category.nombre}}</option>
                  </select>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" value="Buscar" class="btn btn-primary  py-2 px-5">
                </div>
              </div>
            </form>
            </div>
            <div class="col-md-8">
                <JobList></JobList>
            </div>
        </div>
    </div>
    </div>
    
    
</div>
</template>
<script>
import JobList from "./../components/JobList.vue"
import HeroSmall from "./../components/HeroSmall.vue"

export default {
   components: {
        JobList,
        HeroSmall
    },
    data:function()
    {
      return {
        titulo: '',
        estado: '',
        categoria: null,
        page: 1
      }
    },
    computed:{
      categories()
      {
        return this.$store.state.categories;
      }
    },
    mounted()
    {
       this.$store.dispatch("loadCategories").then(() =>{
            this.buildStateFromQuery();
            let params = this.buildParamsFromState();
            this.search(params);
       });
     
        
      
    },
    watch:{
      "$route": "changed",
    },
    methods:{
      changed:function(){
           this.buildStateFromQuery();
           let params = this.buildParamsFromState();
           this.search(params);
      },
      buildStateFromQuery()
      {

         let query = this.$route.query;
         if(query.title !== undefined)
         {
           this.titulo = query.title;
         }
         if(query.state !== undefined)
         {
           this.estado = query.state;
         }
         if(query.category !== undefined)
         {
           this.categoria = query.category;
         }
          if(query.page !== undefined)
         {
           this.page = query.page;
         }
      },
      buildQueryFromState()
      {
         let query = {};
         if(this.titulo.length > 0)
         {

           query["title"] = this.titulo;
         }
         if(this.estado.length > 0)
         {

           query["state"] = this.estado;
         }
         if(this.categoria !== null)
         {

           query["category"] = this.categoria;
         }
         

           query["page"] = this.page;
         
          return query;
      },
      buildParamsFromState()
      {
          let params = {};

         if(this.titulo.length > 0)
         {
           params["titulo"] = this.titulo;

         }
         if(this.estado.length > 0)
         {
           params["estado"] = this.estado;

         }
         if(this.categoria !== null)
         {
           params["categoria"] = this.categoria;
         }
         params["page"] = this.page;
          return params;
      },
      submit()
      {

         this.page = 1;
          let query = this.buildQueryFromState();
         this.$router.push({
           path: "/jobs",
           query: query
         });
      },
      search(params = {})
      {
        this.$store.dispatch("searchJobs",params);
      }
    }
  
  
}
</script>