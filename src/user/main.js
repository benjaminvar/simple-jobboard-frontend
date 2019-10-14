import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import NavbarMenu from './components/NavbarMenu.vue'
import FooterSection from './components/Footer.vue'
import { touchMixin } from "@/common/mixins";
import Vuelidate from 'vuelidate'
import "@/common/filters"
import { prepareRouteAuthGuard } from "@/common/helpers"
Vue.use(Vuelidate)

Vue.config.productionTip = false
const components = {
  NavbarMenu,
  FooterSection
}
let componentsNames = Object.keys(components);
componentsNames.forEach(componentName => {
  Vue.component(componentName, components[componentName]);
});

Vue.mixin(touchMixin);

const app = new Vue({
  router,
  store,
  mixins: [

  ],
  render: function (h) { return h(App) }
}).$mount('#app')

router.beforeEach(prepareRouteAuthGuard(router, store));