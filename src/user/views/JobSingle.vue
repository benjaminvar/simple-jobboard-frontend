<template>
  <div class="job">
    <HeroSmall :title="job.titulo"></HeroSmall>
    <div class="site-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8 mb-5">
            <div class="p-5 bg-white">
              <div class="mb-4 mb-md-5 mr-5">
                <div class="job-post-item-header d-flex align-items-center">
                  <h2 class="mr-3 text-black h4">{{job.titulo}}</h2>
                  <div class="badge-wrap">
                    <p :class="[...classes,'border'  ,'py-2' ,'px-4' ,'rounded']">{{job.tipo}}</p>
                  </div>
                </div>
                <div class="job-post-item-body d-block d-md-flex">
                  <div class="mr-3">
                    <span class="fl-bigmug-line-portfolio23"></span>
                    <a href="#">{{job.estado}}</a>
                  </div>
                  <div>
                    <span class="fl-bigmug-line-big104"></span>
                    <span>{{job.ciudad}}</span>
                  </div>
                </div>
              </div>

             
              <div class="mb-3">
                <h5>Descripci&oacute;n</h5>
                <div v-html="job.descripcion"></div>
              </div>
              <div class="mb-3">
                <h5>Experiencia</h5>
                <div v-if="job.experiencia > 0">{{job.experiencia}} a&ntilde;o(s) o m&aacute;s</div>
                <div v-else>Sin experiencia</div>
              </div>
              <div class="mb-3">
                <h5>Rango Salarial</h5>
                <div>
                  {{job.salario_1 | currency}}
                  <span
                    v-if="job.salario_2 !== null"
                  >&mdash; {{job.salario_2 | currency}}</span>
                </div>
              </div>
              <div class="mb-3">
                <h5>Direcci&oacute;n</h5>
                <div>{{job.ubicacion}}</div>
              </div>
              <div class="mb-3">
                <h5>Contacto</h5>
                <div>{{job.contacto}}</div>
              </div>

              <p class="mt-5">
                <router-link :to="applyUrl" class="btn btn-primary py-2 px-4">Aplicar</router-link>
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="p-4 mb-3 bg-white">
              <h3 class="h5 text-black mb-3">More Info</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur</p>
              <p>
                <router-link :to="applyUrl" class="btn btn-primary py-2 px-4">Aplicar</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeroSmall from "./../components/HeroSmall.vue";
export default {
  components: {
    HeroSmall
  },
  computed: {
    classes() {
      let classes = ["border-warning", "text-warning"];
      if (this.job.tipo === "full-time") {
        classes = ["border-info", "text-info"];
      }
      return classes;
    },
    applyUrl() {
      return `/job/${this.id}/apply`;
    },
    id() {
      return this.$route.params.id;
    },
    job() {
      return this.$store.state.singleJob;
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.loadData(to)
      .then(response => {
        next();
      })
      .catch(response => {
        this.$router.push({ path: "/404" });
      });
  },
  mounted() {
    this.loadData().catch(err => {
      this.$router.push({ path: "/404" });
    });
  },
  methods: {
    loadData(to = null) {
      let route = to || this.$route;
      let currentId = route.params.id;
      return this.$store.dispatch("loadSingleJob", currentId);
    }
  }
};
</script>