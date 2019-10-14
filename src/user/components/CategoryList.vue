<template>
  <div class="row">
    <CategoryItem v-for="category in categories" :key="category.id" :category="category"></CategoryItem>
  </div>
</template>
<script>
import CategoryItem from "./CategoryItem.vue";
export default {
  name: "CategoryList",
  components: {
    CategoryItem
  },
  data() {
    return {};
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    }
  }
};
</script>
