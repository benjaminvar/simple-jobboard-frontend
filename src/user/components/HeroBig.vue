<template>
  <div
    class="site-blocks-cover overlay"
    style="background-image: url('images/hero_1.jpg');"
    data-aos="fade"
    data-stellar-background-ratio="0.5"
  >
    <div class="container">
      <div class="row align-items-center">
        <SearchHero></SearchHero>
      </div>
    </div>
  </div>
</template>
<script>
import SearchHero from "./SearchHero.vue";
export default {
  name: "HeroBig",
  components: {
    SearchHero
  }
};
</script>