<template>
  <div class="JobApply">
    <HeroSmall title="Env&iacute;a tu solicitud"></HeroSmall>
    <div class="site-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 mb-5 px-5">
            <form action="#" class="p-5 bg-white" @submit.prevent="submit" v-if="!hasSubmitted">
              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    class="form-control"
                    placeholder="Ej. John"
                    v-model="nombre"
                    @change="setTouch($v.nombre)"
                    @input="setTouch($v.nombre)"
                  />
                  <div
                    class="alert alert-danger mt-3"
                    v-if="$v.nombre.$error && !$v.nombre.required"
                  >Este campo es obligatorio.</div>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="apellido">Apellido</label>
                  <input
                    type="text"
                    id="apellido"
                    class="form-control"
                    placeholder="Ej. Doe"
                    v-model="apellido"
                    @change="setTouch($v.apellido)"
                    @input="setTouch($v.apellido)"
                  />
                  <div
                    class="alert alert-danger mt-3"
                    v-if="$v.apellido.$error && !$v.apellido.required"
                  >Este campo es obligatorio.</div>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="profesion">Profesi&oacute;n</label>
                  <input
                    type="text"
                    id="profesion"
                    class="form-control"
                    placeholder="Ej. Licenciado/a en Informática"
                    v-model="profesion"
                    @change="setTouch($v.profesion)"
                    @input="setTouch($v.profesion)"
                  />
                  <div
                    class="alert alert-danger mt-3"
                    v-if="$v.profesion.$error && !$v.profesion.required"
                  >Este campo es obligatorio.</div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="descripcion">Descripci&oacute;n</label>
                  <textarea
                    type="text"
                    id="descripcion"
                    class="form-control"
                    rows="5"
                    placeholder="Ej. Soy John Doe, graduado con más de 20 años de experiencia en mercado..."
                    v-model="descripcion"
                    @change="setTouch($v.descripcion)"
                    @input="setTouch($v.descripcion)"
                  ></textarea>
                  <div
                    class="alert alert-danger mt-3"
                    v-if="$v.descripcion.$error && !$v.descripcion.required"
                  >Este campo es obligatorio.</div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="telefono">Tel&eacute;fono</label>
                  <input
                    type="text"
                    id="telefono"
                    class="form-control"
                    placeholder="Ej. 809-000-0000"
                    v-model="telefono"
                    @change="setTouch($v.telefono)"
                    @input="setTouch($v.telefono)"
                  />
                  <div
                    class="alert alert-danger mt-3"
                    v-if="$v.telefono.$error && !$v.telefono.required"
                  >Este campo es obligatorio.</div>
                  <div
                    class="alert alert-danger mt-3"
                    v-else-if="$v.telefono.$error && !$v.telefono.phoneNumber"
                  >Debe introducir un número telefónico válido.</div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="direccion">Direcci&oacute;n</label>
                  <input
                    type="text"
                    id="direccion"
                    class="form-control"
                    placeholder="Ej. John"
                    v-model="direccion"
                    @change="setTouch($v.direccion)"
                    @input="setTouch($v.direccion)"
                  />
                  <div
                    class="alert alert-danger mt-3"
                    v-if="$v.direccion.$error && !$v.direccion.required"
                  >Este campo es obligatorio.</div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="hoja_vida">Hoja de Vida (PDF o Word)</label>
                  <input
                    type="file"
                    id="hoja_vida"
                    class="form-control"
                    @change="handleFile($event)"
                  />
                  <div
                    class="alert alert-danger mt-3"
                    v-if="$v.hoja_vida.$error && !$v.hoja_vida.required"
                  >Este campo es obligatorio.</div>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input
                    type="submit"
                    value="Aplicar Ahora"
                    class="btn btn-primary py-2 px-5"
                    :disabled="$v.$invalid"
                  />
                </div>
              </div>
            </form>
            <div v-if="hasSubmitted && !hasSubmittedEnd">
              <div class="alert alert-info">Enviando solictud...</div>
            </div>
            <div v-if="hasSubmitted && hasSubmittedEnd && success">
              <div class="alert alert-success">Solicitud enviada correctamente.</div>
            </div>
            <div v-if="hasSubmitted && hasSubmittedEnd && !success">
              <div
                class="alert alert-danger"
              >Un error ha ocurrido al enviar la solicitud por favor intente nuevamente.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeroSmall from "./../components/HeroSmall.vue";
import { required } from "vuelidate/lib/validators";
import { phoneNumber } from "@/common/validators";

export default {
  components: {
    HeroSmall
  },
  data: function() {
    return {
      hasSubmitted: false,
      hasSubmittedEnd: false,
      success: false,
      nombre: "",
      apellido: "",
      profesion: "",
      descripcion: "",
      telefono: "",
      direccion: "",
      hoja_vida: null
    };
  },

  validations: {
    nombre: {
      required
    },
    apellido: {
      required
    },
    profesion: {
      required
    },
    descripcion: {
      required
    },
    telefono: {
      required,
      phoneNumber
    },
    direccion: {
      required
    },
    hoja_vida: {
      required
    }
  },
  methods: {
    submit() {
      if (this.$v.$invalid) return;
      let params = {};
      params.id = this.$route.params.id;
      params.data = this.getFormData();
      this.$store
        .dispatch("postApplication", params)
        .then(response => {
          this.success = true;
          this.hasSubmittedEnd = true;
        })
        .catch(err => {
          this.hasSubmittedEnd = true;
        });
      this.hasSubmitted = true;
    },
    getFormData() {
      let hoja_vida = document.querySelector("#hoja_vida");
      let formData = new FormData();
      formData.append("nombre", this.nombre);
      formData.append("apellido", this.apellido);
      formData.append("profesion", this.profesion);
      formData.append("descripcion", this.descripcion);
      formData.append("telefono", this.telefono);
      formData.append("direccion", this.direccion);
      formData.append("hoja_vida", hoja_vida.files[0], hoja_vida.files[0].name);
      return formData;
    },
    handleFile($e) {
      this.hoja_vida = $e.target.files[0];
      this.setTouch(this.$v.hoja_vida);
    }
  }
};
</script>