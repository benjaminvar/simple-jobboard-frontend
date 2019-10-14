<template>
  <div class="col-sm-6 col-md-4 col-lg-3 mb-3" data-aos="fade-up" data-aos-delay="100">
    <router-link :to="'/jobs?category=' + category.id " class="h-100 feature-item">
      <h2>{{category.nombre}}</h2>
      <span class="counting">{{category.count}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CategoryItem",
  props: {
    category: Object
  }
};
</script>