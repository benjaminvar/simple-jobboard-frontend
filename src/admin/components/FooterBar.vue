<template>
  <footer class="main-footer">
    <strong>
      Copyright &copy; {{ year() }}
    </strong> All rights
    reserved.
  </footer>
</template>
<script>
export default {
  name: "footer-bar",
  methods: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>