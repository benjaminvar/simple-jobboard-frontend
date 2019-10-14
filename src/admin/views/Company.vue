<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Usuario</h3>
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="submitUser">
            <div class="box-body">
              <div class="form-group">
                <label for="nombre">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  class="form-control"
                  placeholder="Ej. Juan"
                  v-model="user.nombre"
                  @input="setTouch($v.user.nombre)"
                />
                <span
                  class="text-danger"
                  v-if="$v.user.nombre.$error && !$v.user.nombre.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="apellido">Apellido</label>
                <input
                  id="apellido"
                  type="text"
                  class="form-control"
                  placeholder="Ej. Perez"
                  v-model="user.apellido"
                  @input="setTouch($v.user.apellido)"
                />
                <span
                  class="text-danger"
                  v-if="$v.user.apellido.$error && !$v.user.apellido.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="telefono">Correo electr&oacute;nico</label>
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  placeholder="Ej. 809-000-000"
                  v-model="user.email"
                  @input="setTouch($v.user.email)"
                />
                <span
                  class="text-danger"
                  v-if="$v.user.email.$error && !$v.user.email.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="telefono">Teléfono</label>
                <input
                  id="telefono"
                  type="text"
                  class="form-control"
                  placeholder="Ej. 809-000-000"
                  v-model="user.telefono"
                  @input="setTouch($v.user.telefono)"
                />
                <span
                  class="text-danger"
                  v-if="$v.user.telefono.$error && !$v.user.telefono.required"
                >Este campo es requerido.</span>
              </div>
            </div>
            <!-- /.box-body -->

            <div class="box-footer">
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="$v.user.$invalid"
              >Actualizar</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Compañia</h3>
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="submitCompany">
            <div class="box-body">
              <div class="form-group">
                <label for="nombre_empresa">Nombre de la Empresa</label>
                <input
                  id="nombre_empresa"
                  type="text"
                  class="form-control"
                  placeholder="Ej. Ejemplo C.A"
                  v-model="company.nombre_empresa"
                  @input="setTouch($v.company.nombre_empresa)"
                />
                <span
                  class="text-danger"
                  v-if="$v.company.nombre_empresa.$error && !$v.company.nombre_empresa.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="nombre_user">Identificaci&oacute;n</label>
                <input
                  id="nombre_user"
                  type="text"
                  class="form-control"
                  placeholder="Ej. Ejemplo C.A"
                  v-model="company.identificacion"
                  @input="setTouch($v.company.identificacion)"
                />
                <span
                  class="text-danger"
                  v-if="$v.company.identificacion.$error && !$v.company.identificacion.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="estado">Estado/Provincia</label>
                <select
                  id="estado"
                  class="form-control"
                  placeholder="Seleccione el estado/provincia"
                  v-model="company.estado"
                  @input="setTouch($v.company.estado)"
                >
                  <option :value="null">Seleccione la estado</option>
                  <option :value="state.id" v-for="state in states" :key="state.id">{{state.nombre}}</option>
                </select>
                <span
                  class="text-danger"
                  v-if="$v.company.estado.$error && !$v.company.estado.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="ciudad">Ciudad</label>
                <input
                  id="ciudad"
                  type="text"
                  class="form-control"
                  placeholder="Ej. Santo Domingo"
                  v-model="company.ciudad"
                  @input="setTouch($v.company.ciudad)"
                />
                <span
                  class="text-danger"
                  v-if="$v.company.ciudad.$error && !$v.company.ciudad.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="ubicacion">Ubicación</label>
                <textarea
                  id="ubicacion"
                  class="form-control"
                  placeholder="Ej. "
                  v-model="company.ubicacion"
                  @input="setTouch($v.company.ubicacion)"
                ></textarea>
                <span
                  class="text-danger"
                  v-if="$v.company.ubicacion.$error && !$v.company.ubicacion.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="sitio_web">Sitio Web</label>
                <input
                  id="sitio_web"
                  type="text"
                  class="form-control"
                  placeholder="Ej. https://ejemplo.org/logo.jpg"
                  v-model="company.sitio_web"
                  @input="setTouch($v.company.sitio_web)"
                />
                <span
                  class="text-danger"
                  v-if="$v.company.sitio_web.$error && !$v.company.sitio_web.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="logo">Logo</label>
                <input id="logo" type="file" @change="setLogo($event)" />
                <span
                  class="text-danger"
                  v-if="$v.company.logo.$error && !$v.company.logo.required"
                >Este campo es requerido.</span>
              </div>
            </div>
            <!-- /.box-body -->

            <div class="box-footer">
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="$v.company.$invalid"
              >Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { phoneNumber } from "@/common/validators";
import { required, email } from "vuelidate/lib/validators";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        nombre: "",
        apellido: "",
        telefono: "",
        email: ""
      },
      company: {
        nombre_empresa: "",
        identificacion: "",
        estado: null,
        ciudad: "",
        ubicacion: "",
        sitio_web: "",
        logo: null
      }
    };
  },
  validations: {
    user: {
      nombre: {
        required
      },
      apellido: {
        required
      },
      email: {
        required,
        email
      },
      telefono: {
        required,
        phoneNumber
      }
    },
    company: {
      nombre_empresa: {
        required
      },
      identificacion: {
        required
      },
      estado: {
        required
      },
      ciudad: {
        required
      },
      ubicacion: {
        required
      },
      sitio_web: {
        required
      },
      logo: {
        required: val => val !== null
      }
    }
  },
  computed: {
    ...mapState({
      userData: state => state.user,
      token: state => state.login.token,
      states: state => state.states
    })
  },

  mounted() {
    this.fetchLoginToken().then(() => {
      this.getMe(this.token.access_token).then(() => {
        this.getStates().then(() => {
          this.setInitialData(this.userData);
        });
      });
    });
  },
  methods: {
    ...mapActions([
      "fetchLoginToken",
      "getStates",
      "getMe",
      "updateUserInfo",
      "updateCompanyInfo"
    ]),
    setInitialData(data) {
      this.user.nombre = data.nombre;
      this.user.apellido = data.apellido;
      this.user.email = data.email;
      this.user.telefono = data.telefono;
      this.company.nombre_empresa = data.nombre_empresa;
      this.company.identificacion = data.identificacion;
      this.company.estado = data.estado_id;
      this.company.ciudad = data.ciudad;
      this.company.ubicacion = data.ubicacion;
      this.company.sitio_web = data.sitio_web;
      this.company.logo = data.logo;
    },
    submitUser() {
      if (!this.$v.user.$invalid) {
        let { access_token: token } = this.token;
        let data = new FormData();
        let keys = Object.keys(this.user);
        keys.forEach(key => {
          data.append(key, this.user[key]);
        });
        this.updateUserInfo({ token, data })
          .then(() => {
            this.callNotification("successUserUpdate");
          })
          .catch(() => {
            this.callNotification("failedUserUpdate");
          });
      }
    },
    submitCompany() {
      if (!this.$v.company.$invalid) {
        let { access_token: token } = this.token;
        const keys = Object.keys(this.company);
        const data = new FormData();
        keys.forEach(key => {
          if(this.company[key] instanceof  File)
          {
             data.append(key, this.company[key], this.company[key].name);
          }else{
            data.append(key, this.company[key]);
          }
         
        });
        this.updateCompanyInfo({ token, data })
          .then(() => {
            this.callNotification("successCompanyUpdate");
          })
          .catch(() => {
            this.callNotification("failedCompanyUpdate");
          });
      }
    },
    setLogo($event) {
      this.company.logo = null;
      if ($event.target.files.length > 0) {
        this.company.logo = $event.target.files[0];
      }
    }
  },
  notifications: {
    successCompanyUpdate: {
      type: "success",
      title: "Éxito",
      message: "Sus datos fueron guardados."
    },
    failedCompanyUpdate: {
      type: "error",
      title: "Error",
      message: "Ha ocurrido un error."
    },
    successUserUpdate: {
      type: "success",
      title: "Éxito",
      message: "Sus datos fueron guardados."
    },
    failedUserUpdate: {
      type: "error",
      title: "Error",
      message: "Ha ocurrido un error."
    }
  }
};
</script>