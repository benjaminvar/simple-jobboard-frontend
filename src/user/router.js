import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Categories from './views/Categories.vue'
import JobSingle from './views/JobSingle.vue'
import Jobs from './views/Jobs.vue'
import JobApply from './views/JobApply.vue'
import Contact from './views/Contact.vue'
import Faqs from './views/Faqs.vue'
import NotFound from './views/NotFound.vue'



Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior(to,from,savedPosition) {
    return { x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ,
    {
      path: '/categories',
      name: 'categories',

      component: Categories
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/job/:id',
      name: 'job',

      component: JobSingle
    },
    {
      path: '/job/:id/apply',
      name: 'jobApply',

      component: JobApply
    },

    {
      path: '/jobs',
      name: 'jobs',

      component: Jobs
    },

    {
      path: '/faqs',
      name: 'faqs',

      component: Faqs
    },
    {
      path: "/404",
      name: "not-found",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    }

  ]
});

export default router;
