<template>
  <div class="unit-5 overlay" style="background-image: url('images/hero_1.jpg');">
    <div class="container text-center">
      <h2 class="mb-0" v-html="title"></h2>
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