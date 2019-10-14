<template>
  <div class="register-box">
    <div class="register-logo">
      <router-link to="/">
        <b>Job</b>board
      </router-link>
    </div>

    <div class="register-box-body">
      <div class="alert alert-danger" v-if="failed">
       No pudimos procesar su solicitud debido a un error.
      </div>
      <p class="login-box-msg">Llena los campos para registarte</p>

      <form  method="post" @submit.prevent="submit">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="Nombre" v-model="nombre" @input="setTouch($v.nombre)" @change="setTouch($v.nombre)"/>
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
          <span class="text-danger" v-if="$v.nombre.$error && !$v.nombre.required">Este campo es requerido.</span>
        </div>
        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="Apellido" v-model="apellido"  @input="setTouch($v.apellido)" @change="setTouch($v.apellido)"/>
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
          <span class="text-danger" v-if="$v.apellido.$error && !$v.apellido.required">Este campo es requerido.</span>
        </div>
        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="Teléfono" v-model="telefono"  @input="setTouch($v.telefono)" @change="setTouch($v.telefono)"/>
          <span class="glyphicon glyphicon-phone-alt form-control-feedback"></span>
          <span class="text-danger" v-if="$v.telefono.$error && !$v.telefono.required">Este campo es requerido.</span>
          <span class="text-danger" v-else-if="$v.telefono.$error && !$v.telefono.phoneNumber">Debe ser un número de teléfono válido.</span>
        </div>
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Correo Electrónico" v-model="email"  @input="setTouch($v.email)" @change="setTouch($v.email)"/>
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          <span class="text-danger" v-if="$v.email.$error && !$v.email.required">Este campo es requerido.</span>
          <span class="text-danger" v-else-if="$v.email.$error && !$v.email.email">Debe ser un correo electrónico válido.</span>
           <span class="text-danger" v-else-if="$v.email.$error && !$v.email.unique">Ya existe una cuenta con este correo</span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Contraseña" v-model="password"  @input="setTouch($v.password)" @change="setTouch($v.password)"/>
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          <span class="text-danger" v-if="$v.password.$error && !$v.password.required">Este campo es requerido.</span>
          <span class="text-danger" v-if="$v.password.$error && !$v.password.minLength">Debe tener una longitud minima de 8 caracteresters.</span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Confirma tu contraseña" v-model="password_confirmation"  @input="setTouch($v.password_confirmation)" @change="setTouch($v.password_confirmation)"/>
          <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
          <span class="text-danger" v-if="$v.password_confirmation.$error && !$v.password_confirmation.sameAs">Las contraseñas no coinciden.</span>

        </div>
        <div class="row">
          <div class="col-xs-8">
            <ICheck id="check" v-model="terminos">Acepto los <a>terminos</a>.</ICheck>
            
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" :disabled="$v.$invalid" class="btn btn-primary btn-block btn-flat">Regístrate</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center">
        <p>- O -</p>
        <a href="#" class="btn btn-block btn-social btn-facebook btn-flat" @click="AuthProvider('facebook')">
          <i class="fa fa-facebook"></i> Registrarse con Facebook
        </a>
        <a href="#" class="btn btn-block btn-social btn-google btn-flat" @click="AuthProvider('google')">
          <i class="fa fa-google-plus"></i> Registrarse con Google
        </a>
      </div>

      <router-link to="/login" class="text-center">Ya estoy registrado</router-link>
    </div>
    <!-- /.form-box -->
  </div>
  <!-- /.register-box -->
</template>
<script>
import { mapActions } from "vuex"
import { required, email, minLength, sameAs } from "vuelidate/lib/validators"
import { phoneNumber } from "@/common/validators"
import ICheck from "./../components/ICheck"
export default {
  data(){
    return {
     nombre: '',
     apellido: '',
     telefono: '',
     email: '',
     password: '',
     password_confirmation: '',
     terminos: false,
     hasFailed: false,
     hasSubmitted: false
    }
  },
  components:{
    ICheck
  },
  mounted() {
   
  },
  validations:{
    nombre:{
      required,
    },
    apellido:{
      required
    },
    telefono:{
      phoneNumber
    },
    email:{
      required,
      email,
      unique(value){
        return new Promise((resolve,reject) => {
          this.emailAvailable(value)
          .then((result) =>{
            resolve(result);
          })
          .catch(() => {
            resolve(false);
          });
        });
      }
    },
    password:{
      required,
      minLength: minLength(8)
    },
    password_confirmation:{
      sameAs: sameAs("password")
    },
    terminos:{
      terminos(value)
      {
        return value === true;
      }
    }

  },
  methods:{
    ...mapActions(["registerSocial","register","emailAvailable"]),
    submit()
    {
      if(!this.$v.$invalid)
      {
        this.hasFailed = false;
        this.hasSubmitted = true;
        let data = new FormData();
        data.append("nombre",this.nombre);
        data.append("apellido",this.apellido);
        data.append("telefono",this.telefono);
        data.append("email",this.email);
        data.append("password",this.password);
        data.append("password_confirmation",this.password_confirmation);
        this.register(data)
        .then(() => {
         this.$router.push({path:"/login",params:{message: "Registrado con éxito."}})
         
        })
        .catch(() => {
          this.hasSubmitted = false;
          this.hasFailed = true;
        });
      }
    },
     AuthProvider(provider) {
            
            let self = this;
              
              this.$auth.authenticate(provider).then(response =>{
             
                self.SocialLogin(provider,response)
 
                }).catch(err => {
                    console.log({err:err})
                })
 
            },
            
            SocialLogin(provider,{code}){
 
               this.registerSocial({provider,code}).then(() => {
                 alert("yes");
               }).catch(() => {
                 alert("no");
               })
            },
  }
};
</script>