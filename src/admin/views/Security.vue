<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Contraseña</h3>
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="submit">
            <div class="box-body">
              <div class="form-group">
                <label for="oldPassword">Contraseña Actual</label>
                <input
                  id="oldPassword"
                  type="password"
                  class="form-control"
                  placeholder="Escriba su contraseña actual"
                  v-model="user.oldPassword"
                  @input="setTouch($v.user.oldPassword)"
                />
                <span
                  class="text-danger"
                  v-if="$v.user.oldPassword.$error && !$v.user.oldPassword.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="newPassword">Contraseña Nueva</label>
                <input
                  id="newPassword"
                  type="password"
                  class="form-control"
                  placeholder="Escriba su nueva contraseña"
                  v-model="user.password"
                  @input="setTouch($v.user.password)"
                />
                <span
                  class="text-danger"
                  v-if="$v.user.password.$error && !$v.user.password.required"
                >Este campo es requerido.</span>
                 <span
                  class="text-danger"
                  v-else-if="$v.user.password.$error && !$v.user.password.minLength"
                >Debe tener al menos 8 caracteres.</span>
              </div>
              <div class="form-group">
                <label for="newPassword_confirmation">Repita contraseña nueva</label>
                <input
                  id="newPassword_confirmation"
                  type="password"
                  class="form-control"
                  placeholder="Escriba su nueva contraseña"
                  v-model="user.password_confirmation"
                  @input="setTouch($v.user.password_confirmation)"
                />
                <span
                  class="text-danger"
                  v-if="$v.user.password_confirmation.$error && !$v.user.password_confirmation.required"
                >Este campo es requerido.</span>
                <span
                  class="text-danger"
                  v-else-if="$v.user.password_confirmation.$error && !$v.user.password_confirmation.sameAs"
                >Las contraseñas no coinciden.</span>
              </div>
            </div>
            <!-- /.box-body -->

            <div class="box-footer">
              <button type="submit" class="btn btn-primary" :disabled="$v.$invalid">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      user: {
        oldPassword: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  computed: {
    ...mapState({
      token: state => state.login.token
    })
  },
  validations: {
    user: {
      oldPassword: {
        required,
        minLength: minLength(8)
      },
      password: {
        required,
        minLength: minLength(8)
      },
      password_confirmation: {
        required,
        sameAs: sameAs("password")
      }
    }
  },
  mounted() {
    this.fetchLoginToken();
  },
  methods: {
    ...mapActions(["fetchLoginToken", "updatePasswordInfo"]),
    submit() {
      if (!this.$v.$invaild) {
        let { access_token: token } = this.token;
        let data = new FormData();
        let keys = Object.keys(this.user);
        keys.forEach(key => {
          data.append(key, this.user[key]);
        });
        this.updatePasswordInfo({ token, data })
          .then(() => {
            this.callNotification("successPasswordUpdate");
            keys.forEach(key => {
              this.user[key] = "";
            });
            this.$v.$reset();
          })
          .catch(() => {
            this.callNotification("failedPasswordUpdate");
          });
      }
    }
  },
  notifications: {
    successPasswordUpdate: {
      title: "Éxito",
      message: "Se cambio la contraseña",
      type: "success"
    },
    failedPasswordUpdate: {
      title: "Érror",
      message: "La contraseña proporcionada es incorrecta.",
      type: "error"
    }
  }
};
</script>