<template>
  <div class="NotFound">
    <HeroSmall title="No encontrado"></HeroSmall>
    <div class="site-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="px-md-5 px-xs-0">
              <div class="px-md-5 px-xs-0">
                <div class="bg-white p-5 text-center rounded">
                  <h2 class="big-title">404</h2>
                  <p>¡Ups!, Parece que no hemos podido hallar lo que buscabas. Lo Sentimos.</p>
                  <p><router-link to="/">Volver a la página principal</router-link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.big-title {
  font: {
    size: 6em !important;
    weight: bold;
  }

  color: #2da94a;
}
</style>
<script>
import HeroSmall from "./../components/HeroSmall.vue";
export default {
  components: {
    HeroSmall
  }
};
</script>