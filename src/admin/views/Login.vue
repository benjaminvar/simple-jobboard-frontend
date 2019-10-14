<template>
  <div class="login-box">
    <div class="login-logo">
      <router-link to="/">
        <b>Job</b>board
      </router-link>
    </div>
    <div class="login-box-body">
      <p class="login-box-msg">Inicia Sesión</p>

      <form @submit.prevent="submit">
        <div
          class="alert alert-danger"
          v-if="hasSubmitted && hasLoginFailed"
        >Usuario o contraseña incorrectos</div>
        <div class="alert alert-success" v-if="message !== ''">{{message}}</div>

        <div class="form-group has-feedback">
          <input
            type="email"
            class="form-control"
            placeholder="Correo Electrónico"
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

        <div class="form-group has-feedback">
          <input
            type="password"
            class="form-control"
            placeholder="Contraseña"
            v-model="password"
            @change="setTouch($v.password)"
            @input="setTouch($v.password)"
          />
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          <p
            class="text-danger"
            v-if="$v.password.$error && !$v.password.required"
          >Este campo es requerido.</p>
        </div>
        <div class="row">
          <!-- /.col -->
          <div class="col-xs-6">
            <button
              :disabled="$v.$invalid"
              type="submit"
              class="btn btn-primary btn-block btn-flat"
            >Iniciar Sesión</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center">
        <p>- O -</p>
        <a
          href="#"
          class="btn btn-block btn-social btn-facebook btn-flat"
          @click="AuthProvider('facebook')"
        >
          <i class="fa fa-facebook"></i> Iniciar Sesi&oacute;n con Facebook
        </a>
        <a
          href="#"
          class="btn btn-block btn-social btn-google btn-flat"
          @click="AuthProvider('google')"
        >
          <i class="fa fa-google-plus"></i> Iniciar Sesi&oacute;n con Google
        </a>
      </div>
      <!-- /.social-auth-links -->

      <router-link to="/forgot">Olvidé mi contraseña</router-link>
      <br />
      <router-link to="/register" class="text-center">Regístrate</router-link>
    </div>
    <!-- /.login-box-body -->
  </div>
  <!-- /.login-box -->
</template>
<script>
import { required } from "vuelidate/lib/validators";
import { email } from "vuelidate/lib/validators";
import { minLength } from "vuelidate/lib/validators";
import { phoneNumber } from "@/common/validators";
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      email: "",
      password: "",
      hasSubmitted: false,
      hasLoginFailed: false
    };
  },
  mounted() {},
  props: {
    intended: {
      type: Object,
      default: null
    },
    message: {
      type: String,
      default: ""
    }
  },
  validations: {
    email: {
      required: required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    ...mapActions(["loginSocial", "login"]),
    submit() {
      if (!this.$v.$invalid) {
        this.hasLoginFailed = false;
        this.hasSubmitted = true;
        let credentials = new FormData();
        credentials.append("email", this.email);
        credentials.append("password", this.password);
        this.login(credentials)
          .then(() => {
            let route = this.intended || { path: "/" };
            this.$router.push(route);
          })
          .catch(() => {
            this.hasLoginFailed = true;
          });
      }
    },
    AuthProvider(provider) {
       this.hasLoginFailed = false;
        this.hasSubmitted = true;
      this.$auth
        .authenticate(provider)
        .then(response => {
          this.loginSocial({ provider, code })
            .then(() => {
              let route = this.intended || { path: "/" };
              this.$router.push(route);
            })
            .catch(() => {
              this.hasLoginFailed = true;
            });
        })
        .catch(err => {
          
        });
    }
  }
};
</script>