<template>
  <div class="contact">
    <HeroSmall title="Contacto"></HeroSmall>
    <div class="site-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8 mb-5">
            <form action="#" class="p-5 bg-white" @submit.prevent="submit">
              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="nombre_completo">Nombre Completo</label>
                  <input
                    type="text"
                    id="nombre_completo"
                    class="form-control"
                    placeholder="Nombre Completo"
                    v-model="nombre_completo"
                    @input="setTouch($v.nombre_completo)"
                    @change="setTouch($v.nombre_completo)"
                  />
                  <div
                    class="alert alert-danger mt-3"
                    v-if="$v.nombre_completo.$error && !$v.nombre_completo.required"
                  >Este campo es obligatorio.</div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="font-weight-bold" for="email">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Correo Electrónico"
                    v-model="email"
                    @input="setTouch($v.email)"
                    @change="setTouch($v.email)"
                  />
                  <div
                    class="alert alert-danger mt-3"
                    v-if="$v.email.$error && !$v.email.required"
                  >Este campo es obligatorio.</div>
                  <div
                    class="alert alert-danger mt-3"
                    v-else-if="$v.email.$error && !$v.email.email"
                  >Debe introducir un correo electrónico válido.</div>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="telefono">Teléfono</label>
                  <input
                    type="text"
                    id="telefono"
                    class="form-control"
                    placeholder="Número de Teléfono"
                    v-model="telefono"
                    @input="setTouch($v.telefono)"
                    @change="setTouch($v.telefono)"
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
                <div class="col-md-12">
                  <label class="font-weight-bold" for="mensaje">Mensaje</label>
                  <textarea
                    name="mensaje"
                    id="mensaje"
                    cols="30"
                    rows="5"
                    class="form-control"
                    placeholder="Escribe tu mensaje aquí."
                    v-model="mensaje"
                    @input="setTouch($v.mensaje)"
                    @change="setTouch($v.mensaje)"
                  ></textarea>
                  <div
                    class="alert alert-danger mt-3"
                    v-if="$v.mensaje.$error && !$v.mensaje.required"
                  >Este campo es obligatorio.</div>
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <GoogleRecaptcha :siteKey="process.env.VUE_APP_GOOGLE_CAPTCHA_CLIENT_ID" @success="captchaSuccess" @expired="captchaFailed" @error="captchaFailed"></GoogleRecaptcha>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input
                    type="submit"
                    value="Enviar  mensaje"
                    class="btn btn-primary pill px-4 py-2"
                    :disabled="$v.$invalid"
                  />
                </div>
              </div>
            </form>
          </div>

          <div class="col-lg-4">
            <div class="p-4 mb-3 bg-white">
              <h3 class="h5 text-black mb-3">Informaci&oacute;n de Contacto</h3>
              <p class="mb-0 font-weight-bold">Direcci&oacute;n</p>
              <p class="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

              <p class="mb-0 font-weight-bold">Tel&eacute;fono</p>
              <p class="mb-4">
                <a href="#">+1 232 3235 324</a>
              </p>

              <p class="mb-0 font-weight-bold">Correo Electr&oacute;nico</p>
              <p class="mb-0">
                <a href="#">youremail@domain.com</a>
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
import { phoneNumber } from "@/common/validators";
import { required, email } from "vuelidate/lib/validators";
import { GoogleRecaptcha } from "@/common/components";
export default {
  components: {
    HeroSmall,
    GoogleRecaptcha
  },
  data() {
    return {
      nombre_completo: "",
      email: "",
      telefono: "",
      mensaje: "",
      captchaToken: null
    };
  },
  computed:{
    process: () => process
  },
  mounted() {
  },
  validations: {
    nombre_completo: {
      required
    },
    email: {
      required,
      email
    },
    telefono: {
      required,
      phoneNumber
    },
    mensaje: {
      required
    },
    captchaToken:{
      required
    }
  },
  methods: {
    captchaSuccess(token)
    {
        this.captchaToken = token;
    },
    captchaFailed(token)
    {
        this.captchaToken = token;
    },
    submit() {
      if (this.$v.$invalid) return;
    }
  }
};
</script>