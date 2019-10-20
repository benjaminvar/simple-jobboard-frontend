<template>
  <div class="register-box">
    <div class="register-logo">
      <router-link to="/">
        <b>Job</b>board
      </router-link>
    </div>

    <div class="register-box-body">
      <div
        class="alert alert-success text-center"
        v-if="hasSucceed"
      >Te hemos enviado un correo con un enlace de verficación valido durante una hora.</div>
      <div
        class="alert alert-danger text-center"
        v-if="hasFailed"
      >No se pudo enviar el correo de reestablecimiento debido a que un error ha ocurrido.</div>
      <template v-if="!hasSubmitted">
        <p class="login-box-msg">Olvidaste tu contraseña</p>

        <form method="post" @submit.prevent="submit">
          <div class="form-group has-feedback">
            <input
              type="text"
              class="form-control"
              placeholder="Correo electrónico"
              v-model="email"
              @change="setTouch($v.email)"
              @input="setTouch($v.email)"
            />
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            <p
              class="text-danger"
              v-if="$v.email.$error && !$v.email.required"
            >Este campo es requerido.</p>
            <p
              class="text-danger"
              v-else-if="$v.email.$error && !$v.email.email"
            >Debe ser un email válido.</p>
          </div>

          <div class="row">
            <!-- /.col -->
            <div class="col-sm-12">
              <button
                :disabled="$v.$invalid"
                type="submit"
                class="btn btn-primary btn-block btn-flat"
              >Enviar enlace reestablecimiento.</button>
            </div>
            <!-- /.col -->
          </div>
        </form>
      </template>
      <router-link to="/login" class="text-center">Ya estoy registrado</router-link>
      <br />
      <router-link to="/register" class="text-center">Regístrate</router-link>
    </div>
    <!-- /.form-box -->
  </div>
  <!-- /.register-box -->
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      hasSubmitted: false,
      hasFailed: false,
      hasSucceed: false
    };
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    ...mapActions(["resetLink"]),
    submit() {
      if (!this.$v.$invalid) {
        this.hasSubmitted = true;
        this.hasFailed = false;
        let data = new FormData();
        data.append("email", this.email);
        this.resetLink(data)
          .then(() => {
            this.hasSucceed = true;
          })
          .catch(() => {
            this.hasFailed = true;
          });
      }
    }
  }
};
</script>