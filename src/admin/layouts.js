import Vue from "vue"
import MainHeader from "./components/MainHeader.vue"
import SidebarMenu from "./components/SidebarMenu.vue"
import FooterBar from "./components/FooterBar.vue"

const components = {
    MainHeader,
    SidebarMenu,
    FooterBar
  }

const componentsNames = Object.keys(components);
componentsNames.forEach(componentName => {
  Vue.component(componentName, components[componentName]);
});
