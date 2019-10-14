<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Editar Oferta de Trabajo</h3>
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="submit">
            <div class="box-body">
              <div class="form-group">
                <label for="titulo">Titulo</label>
                <input
                  id="titulo"
                  type="text"
                  class="form-control"
                  placeholder="Ej. Ingeniero en Sistemas Jr"
                  v-model="titulo"
                  @input="setTouch($v.titulo)"
                />
                <span
                  class="text-danger"
                  v-if="$v.titulo.$error && !$v.titulo.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="tipo">Tipo</label>
                <select
                  id="tipo"
                  type="text"
                  class="form-control"
                  v-model="tipo"
                  @change="setTouch($v.tipo)"
                >
                  <option value>Seleccione el tipo</option>
                  <option :value="type.value" v-for="type in types" :key="type.value">{{type.label}}</option>
                </select>
                <span
                  class="text-danger"
                  v-if="$v.tipo.$error && !$v.tipo.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="categoria">Categoria</label>
                <select
                  id="categoria"
                  type="text"
                  class="form-control"
                  v-model="categoria"
                  @change="setTouch($v.categoria)"
                >
                  <option :value="null">Seleccione la categoría</option>
                  <option
                    :value="category.id"
                    v-for="category in categories"
                    :key="category.id"
                  >{{category.nombre}}</option>
                </select>
                <span
                  class="text-danger"
                  v-if="$v.categoria.$error && !$v.categoria.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="experiencia">Experiencia</label>
                <select
                  type="experiencia"
                  class="form-control"
                  placeholder="Ej. Perez"
                  v-model="experiencia"
                  @change="setTouch($v.experiencia)"
                >
                  <option  :value="null">Seleccione la experiencia requerida</option>
                 
                  <option
                    :value="experience"
                    v-for="experience in experiences"
                    :key="experience">
                    <template v-if="experience === 0">
                      Sin experiencia
                    </template>
                     <template v-else>
                       {{experience}} o más años
                    </template>
                 
                  </option>
                </select>
                <span
                  class="text-danger"
                  v-if="$v.experiencia.$error && !$v.experiencia.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="descripcion">Descripción</label>
                <textarea
                  id="descripcion"
                  class="form-control"
                  placeholder="Ej. Perez"
                  v-model="descripcion"
                  @input="setTouch($v.descripcion)"
                ></textarea>
                <span
                  class="text-danger"
                  v-if="$v.descripcion.$error && !$v.descripcion.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="experiencia">Rango Salarial</label>
              </div>
              <div class="form-group">
                <label for="salario_1">Desde</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="salario_1"
                  @input="setTouch($v.salario_1)"
                />
                <span
                  class="text-danger"
                  v-if="$v.salario_1.$error && !$v.salario_1.required"
                >Este campo es requerido.</span>
                <span
                  class="text-danger"
                  v-if="$v.salario_1.$error && !$v.salario_1.numeric"
                >Este campo debe ser númerico.</span>
              </div>
              <div class="form-group">
                <label for="salario_2">Hasta(Opcional)</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="salario_2"
                  @input="setTouch($v.salario_2)"
                />
             <span
                  class="text-danger"
                  v-if="$v.salario_2.required && !$v.salario_2.numeric"
                >Este debe ser numerico.</span>
              </div>
              <div class="form-group">
                <label for="moneda">Moneda</label>
                <select
                  id="moneda"
                  class="form-control"
                  v-model="moneda"
                  @input="setTouch($v.moneda)"
                >
                  <option :value="null">Seleccione el tipo de moneda</option>
                  <option
                    :value="currency.id"
                    v-for="currency in currencies"
                    :key="currency.id"
                  >{{currency.descripcion}} ({{currency.codigo}})</option>
                </select>
                <span
                  class="text-danger"
                  v-if="$v.moneda.$error && !$v.moneda.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="estado">Estado/Provincia</label>
                <select
                  id="estado"
                  type="text"
                  class="form-control"
                  placeholder="Seleccione el estado/provincia"
                  v-model="estado"
                  @input="setTouch($v.estado)"
                >
                  <option :value="null">Seleccione el estado o provincia</option>
                  <option :value="state.id" v-for="state in states" :key="state.id">{{state.nombre}}</option>
                </select>
                <span
                  class="text-danger"
                  v-if="$v.estado.$error && !$v.estado.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="ciudad">Ciudad</label>
                <input
                  id="ciudad"
                  type="text"
                  class="form-control"
                  placeholder="Ej. Santo Domingo"
                  v-model="ciudad"
                  @input="setTouch($v.ciudad)"
                />
                <span
                  class="text-danger"
                  v-if="$v.ciudad.$error && !$v.ciudad.required"
                >Este campo es requerido.</span>
              </div>

              <div class="form-group">
                <label for="ubicacion">Ubicación</label>
                <textarea
                  id="ubicacion"
                  type="text"
                  class="form-control"
                  placeholder="Ej. "
                  v-model="ubicacion"
                  @input="setTouch($v.ubicacion)"
                ></textarea>
                <span
                  class="text-danger"
                  v-if="$v.ubicacion.$error && !$v.ubicacion.required"
                >Este campo es requerido.</span>
              </div>
              <div class="form-group">
                <label for="contacto">Contacto</label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Ej. Tel: 809-000-0000\r\nEmail: usuario@ejemplo.org"
                  v-model="contacto"
                  @input="setTouch($v.contacto)"
                ></textarea>
                <span
                  class="text-danger"
                  v-if="$v.contacto.$error && !$v.contacto.required"
                >Este campo es requerido.</span>
              </div>
            </div>
            <!-- /.box-body -->

            <div class="box-footer">
              <button type="submit" class="btn btn-primary" :disabled="$v.$invalid || !hasChanged || hasSubmitted">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import {
  required,
  minValue,
  requiredIf,
  numeric
} from "vuelidate/lib/validators";
import { includes } from "@/common/validators";
const experiences = [0,1, 2, 5, 10];
const types = [
  {
    label: "Part-Time",
    value: "part-time"
  },
  {
    label: "Full-Time",
    value: "full-time"
  }
];
const initialState = {
      titulo: "",
      tipo: "",
      categoria: null,
      experiencia: null,
      descripcion: "",
      salario_1: "",
      salario_2: "",
      moneda: null,
      estado: null,
      ciudad: "",
      ubicacion: "",
      contacto: "",
      hasChanged: false,
      hasSubmitted: false,
      types,
      experiences
    };
export default {
  data() {
    return initialState;
  },
  computed: {
    ...mapState({
      token: state => state.login.token,
      currencies: state => state.currencies,
      categories: state => state.categories,
      states: state => state.states,
      offer: state => state.offer
    })
  },
  validations: {
    titulo: {
      required
    },
    tipo: {
      required,
      includes: includes(types.map(type => type.value))
    },
    categoria: {
      required
    },
    experiencia: {
      required,
      includes: includes(experiences)
    },
    descripcion: {
      required
    },
    salario_1: {
      required,
      numeric
    },
    salario_2: {
      required: requiredIf(function() {
        return this.salario_2 !==null && this.salario_2.length  > 0;
      }),
      numeric
    },
    moneda: {
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
    contacto: {
      required
    }
  },
  mounted() {
    this.fetchLoginToken().then(() => {
      let id = this.$route.params.id;
      let {access_token} = this.token;
      console.log(id);
      let promises = [this.getCategories(), this.getCurrencies(), this.getStates(), this.getOffer({ token: access_token, id})];
      Promise.all(promises).then(() => {
       this.setInitialState();
      });
    });
  },
  methods: {
    ...mapActions(["fetchLoginToken","getOffer","getCurrencies", "getStates", "getCategories","updateOffer"]),
    setTouch($v)
    {
        $v.$touch();
        this.hasChanged = true;
    },
    setInitialState()
    {
        
      this.titulo = this.offer.titulo ;
      this.tipo =  this.offer.tipo;
      this.categoria = this.offer.categoria_id ;
      this.experiencia =  this.offer.experiencia;
      this.descripcion = this.offer.descripcion;
      this.salario_1 =  this.offer.salario_1;
      this.salario_2 =  this.offer.salario_2 || "";
      this.moneda =  this.offer.moneda_id ;
      this.estado =  this.offer.estado_id;
      this.ciudad =  this.offer.ciudad ;
      this.ubicacion =  this.offer.ubicacion;
      this.contacto =  this.offer.contacto;
   

    },
    submit()
    {
      if(!this.$v.$invalid)
      {
        this.hasSubmitted = true;
        this.hasFailed = false;
        let { access_token } = this.token;
        let data = new FormData();
        let id = this.$route.params.id;
        data.append("titulo",this.titulo)
        data.append("tipo",this.tipo)
        data.append("categoria",this.categoria)
        data.append("experiencia",this.experiencia);
        data.append("descripcion",this.descripcion);
        data.append("salario_1",this.salario_1);
        if(this.$v.salario_2.required)
        {
          data.append("salario_2",this.salario_2);
        }
        data.append("moneda",this.moneda);
        data.append("estado",this.estado);
        data.append("ciudad",this.ciudad);
        data.append("ubicacion",this.ubicacion);
        data.append("contacto",this.contacto);
        this.updateOffer({token: access_token, data ,id})
        .then(() =>{
          this.$router.push({path:"/offers",params:{"message": "Actualizado correctamente."}});
        })
        .catch(() => {
          this.hasSubmitted = false;
          this.hasFailed = true;
        });
      }
    }

  }
};
</script>