<template>
  <footer class="site-footer">
    <div class="container">
    
      <div class="row text-center">
        <div class="col-md-12">
          <p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy; {{CurrentYear}} Todos los derechos reservados
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterSection",
  computed: {
    CurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>