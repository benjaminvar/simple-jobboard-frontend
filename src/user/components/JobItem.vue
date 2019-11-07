<template>
  <router-link :to="'/job/' +job.id" class="job-item d-block d-md-flex align-items-center fulltime">
  <!--
    <div class="company-logo blank-logo text-center text-md-left pl-3">
      
      <img src="images/logo_1.png" alt="Image" class="img-fluid mx-auto" />
      
    </div>
    -->
    <div class="job-details h-100">
      <div class="p-3 align-self-center">
        <h3>{{job.titulo}}</h3>
        <div class="d-block d-lg-flex">
          <div class="mr-3">
            <span class="icon-suitcase mr-1"></span>
            {{job.empresa_nombre}}
          </div>
          <div class="mr-3">
            <span class="icon-room mr-1"></span>
            {{job.estado}}
          </div>
          <div>
            <span class="icon-money mr-1"></span>
            {{job.salario_1 | currency}}
            <span v-if="job.salario_2 !== null">&mdash; {{job.salario_2 | currency}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="job-category align-self-center">
      <div class="p-3">
        <p class="text-info p-2 rounded border border-info">{{job.tipo}}</p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    job: Object
  }
};
</script>