<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="col-md-12">
            <h3 class="footer-heading mb-4 text-white">Redes Sociales</h3>
          </div>
          <div class="col-md-12">
            <p>
              <a href="#" class="pb-2 pr-2 pl-0">
                <span class="icon-facebook"></span>
              </a>
              <a href="#" class="p-2">
                <span class="icon-twitter"></span>
              </a>
              <a href="#" class="p-2">
                <span class="icon-instagram"></span>
              </a>
              <a href="#" class="p-2">
                <span class="icon-vimeo"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
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