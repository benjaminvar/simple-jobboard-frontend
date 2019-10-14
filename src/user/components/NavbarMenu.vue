<template>
  <nav>
    <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <div class="site-navbar-wrap js-site-navbar bg-white">
      <div class="container">
        <div class="site-navbar bg-light">
          <div class="py-1">
            <div class="row align-items-center">
              <div class="col-2">
                <h2 class="mb-0 site-logo">
                  <router-link to="/">
                    Job
                    <strong class="font-weight-bold">Board</strong>
                  </router-link>
                </h2>
              </div>
              <div class="col-10">
                <nav class="site-navigation text-right" role="navigation">
                  <div class="container">
                    <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                      <a href="#" class="site-menu-toggle js-menu-toggle text-black">
                        <span class="icon-menu h3"></span>
                      </a>
                    </div>

                    <ul class="site-menu js-clone-nav d-none d-lg-block">
                      <li>
                        <router-link to="/">Inicio</router-link>
                      </li>
                      <li>
                        <router-link to="/categories">Categorias</router-link>
                      </li>
                      <li>
                        <router-link to="/jobs">Trabajos</router-link>
                      </li>
                      <li class="has-children">
                        <a href="#">Empresas</a>
                        <ul class="dropdown arrow-top">
                          <li>
                            <a href="/admin/login">Iniciar Sesi&oacute;n</a>
                          </li>
                          <li>
                            <a href="/admin/register">Registro</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <router-link to="/about">Nosotros</router-link>
                      </li>
                      <li>
                        <router-link to="/contact">Contacto</router-link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 113px;"></div>
  </nav>
</template>
<script>
export default {
  name: "NavbarMenu"
};
</script>