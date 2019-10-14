import Vue from 'vue'
import App from "./App"
import store from "./store"
import router from "./router"
import axios from "axios"
import VueAxios from "vue-axios"
import Vuelidate from "vuelidate"
import "./layouts"
import "./notifications"
import "./AuthProviders.js"




import { prepareRouteAuthGuard } from "@/common/helpers"
import { touchMixin } from "@/common/mixins"

Vue.config.productionTip = false

Vue.use(Vuelidate);
Vue.use(VueAxios, axios)


router.beforeEach(prepareRouteAuthGuard(router, store));


Vue.mixin(touchMixin);
const app = new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

