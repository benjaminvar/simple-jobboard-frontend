<template>
  <div class="about">
    <HeroSmall title="Nosotros"></HeroSmall>
     <div class="site-section" data-aos="fade">
      <div class="container">
        <div class="row align-items-center">
         
          <div class="col-md-12 ml-auto">
            <div class="text-center mb-5 section-heading">
              <h2>¿Qu&eacute; es JobBoard?</h2>
            </div>
            <p class="text-center mb-4 h5 lineheight1-5">JobBoard es un sistema de portal para la b&uacute;squeda empleos, creado con fines de aprendizaje. JobBoard est&aacute; desarrollado con el Framework Laravel para el backend y Vue.js para el Frontend.</p>
          </div>
        </div>
      </div>
    </div>
    

    <div class="site-section bg-light">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <!-- <div class="col-md-7 text-center"> -->
            <div class="col-md-6 mx-auto text-center mb-5 section-heading">
              <h2 class="mb-5">Equipo</h2>
            </div>
            
          <!-- </div> -->
        </div>
        <div class="row team">
          <div class="col-lg-2 col-md-4 col-sm-6 col-12" data-aos="fade" data-aos-delay="100">
            <a href="#" class="person">
              <img src="images/person_1.jpg" alt="Image placeholder">
              <h2>Benjamin Vargas</h2>
              <p>Programador</p>
            </a>
          </div>
  
        </div>
      </div>
    </div>
    <!-- END section -->
  </div>
    
   

</template>
<script>
import HeroSmall from "./../components/HeroSmall.vue";
export default {
  components:{
    HeroSmall
  }
}
</script>
