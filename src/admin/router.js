import Vue from 'vue'
import Router from 'vue-router'

import Login from "./views/Login"
import Register from "./views/Register"
import Logout from "./views/Logout"
import Forgot from "./views/Forgot"
import Reset from "./views/Reset"
import NotFound from "./views/NotFound"

import Dashboard from "./views/Dashboard"
import Overview from "./views/Overview"

import JobOfferList from "./views/OfferList"
import JobOfferAdd from "./views/OfferAdd"
import JobOfferEdit from "./views/OfferEdit"
import JobOfferView from "./views/OfferView"
import ApplicationList from "./views/ApplicationList"
import ApplicationView from "./views/ApplicationView"
import CompanyInfo from "./views/Company"
import Security from "./views/Security"
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: "/admin/",

  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",

      component: Dashboard,

      meta: {
        auth: true
      },
      children: [
        {
          path: "/",
          name: "home",
          component: Overview,
          meta: {
            auth: true
          }
        },
        {
          path: "/me",
          name: "CompanyInfo",
          component: CompanyInfo,
          meta: {
            auth: true
          }
        },
        {
          path: "/me/security",
          name: "Security",
          component: Security,
          meta: {
            auth: true
          }
        }
        ,
        {
          path: "/offers",
          name: "JobOfferList",
          component: JobOfferList,
          props: true,
          meta: {
            auth: true
          }
        },
        {
          path: "/offer/add",
          name: "JobOfferAdd",
          component: JobOfferAdd,
          meta: {
            auth: true
          },
        },
        {
          path: "/offer/:id/edit",
          name: "JobOfferEdit",
          component: JobOfferEdit,
          meta: {
            auth: true
          }
        },
        {
          path: "/offer/:id/view",
          name: "JobOfferView",
          component: JobOfferView,
          meta: {
            auth: true
          }
        },
        {
          path: "/applications",
          name: "ApplicationsList",
          component: ApplicationList,
          meta: {
            auth: true
          }
        },
        {
          path: "/application/:id/view",
          name: "ApplicationsView",
          component: ApplicationView,
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      path: '/auth/:provider/callback',
      component: {
        template: '<div class="auth-component"></div>'
      }
    },
    {
      path: "/login",
      name: "login",
      props: true,
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/forgot",
      name: "forgot",
      component: Forgot,
      meta: {
        guest: true
      }
    },
    {
      path: "/reset/token/:token/email/:email",
      name: "reset",
      component: Reset,
      meta: {
        guest: true
      }
    },
    /* {
      path: "/404",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    } */

  ]
});

export default router;
