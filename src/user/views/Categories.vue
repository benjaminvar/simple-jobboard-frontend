<template>
<div class="category">
    <HeroSmall title="Categorias"></HeroSmall>
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

</div>
 </template>
<script>
import CategoryList from "./../components/CategoryList.vue";
import HeroSmall from "./../components/HeroSmall.vue";
export default {
    components:{
        CategoryList,
        HeroSmall
    },
    mounted()
    {
          this.$store.dispatch("loadCategories");
    }
}
</script>
