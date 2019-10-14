<template>
  <div class="home">
     <HeroBig></HeroBig>
      

      <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto text-center mb-5 section-heading">
            <h2 class="mb-5">Todas las categorias</h2>
          </div>
        </div>
        <CategoryList></CategoryList>

      </div>
    </div>


      
<div class="site-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
            <h2 class="mb-5 h3">Ofertas de trabajo reciente</h2>
            <JobList></JobList>

            <div class="col-md-12 text-center mt-5">
              <router-link to="/jobs" class="btn btn-primary rounded py-3 px-5"><span class="icon-plus-circle"></span> Ver m&aacute;s ofertas</router-link>
            </div>
          </div>
          
        </div>
      </div>
    </div>



     
    
 
  </div>
</template>

<script>
import CategoryList from "./../components/CategoryList.vue";

import HeroBig from "./../components/HeroBig.vue";

import JobList from "./../components/JobList.vue";
export default {
  name: 'home',
  components:{
    JobList,
    HeroBig,
    CategoryList,
  },
  mounted()
  {
    this.$store.dispatch("loadJobs");
    this.$store.dispatch("loadCategories");
  }
}
</script>
