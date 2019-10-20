<template>
    <div class="register-box">
    <div class="register-logo">
      <router-link to="/">
        <b>Job</b>board
      </router-link>
    </div>

    <div class="register-box-body">
      <div class="alert alert-danger" v-if="hasFailed">
          No pudimos procesar su solicitud debido a un error.
      </div>
      <p class="login-box-msg">Olvidaste tu contraseña</p>

      <form method="post" @submit.prevent="submit">
        <div class="form-group has-feedback">
          <input
            type="password"
            class="form-control"
            placeholder="Nueva Contraseña"
            v-model="password"
            @change="setTouch($v.password)"
            @input="setTouch($v.password)"
          />
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          <p
            class="text-danger"
            v-if="$v.password.$error && !$v.password.required"
          >Este campo es requerido.</p>
          <p
            class="text-danger"
            v-else-if="$v.password.$error && !$v.password.minLength"
          >Debe tener al menos 8 carácteres.</p>
        </div>
          <div class="form-group has-feedback">
          <input
            type="password"
            class="form-control"
            placeholder="Confirme su Nueva Contraseña"
            v-model="password_confirmation"
            @change="setTouch($v.password_confirmation)"
            @input="setTouch($v.password_confirmation)"
          />
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          <p
            class="text-danger"
            v-if="$v.password_confirmation.$error && !$v.password_confirmation.sameAs"
          >Las contraseñas no coinciden.</p>
        
        </div>

        <div class="row">
          <!-- /.col -->
          <div class="col-sm-12">
            <button
              :disabled="$v.$invalid"
              type="submit"
              class="btn btn-primary btn-block btn-flat"
            >Cambiar contraseña</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <router-link to="/login" class="text-center">Ya estoy registrado</router-link>
      <br>
      <router-link to="/register" class="text-center">Regístrate</router-link>
    </div>
    <!-- /.form-box -->
  </div>
</template>
<script>
import {required, minLength, sameAs} from "vuelidate/lib/validators"
import { mapActions } from 'vuex';
export default {
    data()
    {
        return {
            password: '',
            password_confirmation: '',
            isValidToken: false,
            hasFailed: false,
            hasSubmitted: false

        }
    },
    validations:{
        password:{
            required,
            minLength: minLength(8)
        },
        password_confirmation:{
            sameAs: sameAs("password")
        }
    },
    mounted()
    {
      let data = new FormData();
      data.append("email", this.$route.params.email);
      data.append("token",this.$route.params.token);
      this.checkPasswordToken(data)
      .then(() => {
        this.isValidToken = true;
        this.redirectOrStay();
      }).catch(() => this.redirectOrStay());
    },
    methods:{
      ...mapActions(["checkPasswordToken","resetPassword"]),
      redirectOrStay(){
        if(!this.isValidToken)
        {
          this.$router.push({path: "/"});
        }
      },
        submit()
        {
            if(!this.$v.$invalid)
            {
              this.hasSubmitted = true;
              this.hasFailed = false;
                let data = new FormData();
                let token = this.$route.params.token;
                let email = this.$route.params.email;
                data.append("token",token);
                data.append("email",email);
                data.append("password",this.password);
                data.append("password_confirmation",this.password_confirmation);
                this.resetPassword(data)
                .then(()=>{
                    this.$router.push({path:"/login",params:{message: "Su contraseña ha sido restablecida."}})
                    
                })
                .catch(() => {
                    this.hasFailed = true;

                });
            }
        }

    }
}

</script>