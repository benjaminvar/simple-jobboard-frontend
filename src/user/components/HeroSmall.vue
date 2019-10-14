<template>
  <div class="unit-5 overlay" style="background-image: url('images/hero_1.jpg');">
    <div class="container text-center">
      <h2 class="mb-0" v-html="title"></h2>
      <p class="mb-0 unit-6">
        <a href="index.html">Home</a>
        <span class="sep">></span>
        <span>Contact</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroSmall",
  props: {
    title: String
  }
};
</script>