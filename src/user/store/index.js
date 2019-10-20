import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { objectToQueryParams } from '@/common/helpers'
import { API_BASE_URL } from "@/common/api"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: {
      data: [],
    },
    singleJob: {},
    categories: [],

  },
  mutations: {

    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    setSingleJob(state, job) {
      state.singleJob = job;
    },
    setCategories(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    searchJobs({ commit }, params) {
      let query = objectToQueryParams(params);
      let url = `${API_BASE_URL}/jobs/search${query}`;
      return axios.get(url).then((response) => {
        commit("setJobs", response.data);
        return response;
      });
    },
    loadJobs({ commit }) {
      let url = `${API_BASE_URL}/jobs`;
      return axios.get(url).then((response) => {
        commit("setJobs", response.data);
        return response;
      });
    },
    loadSingleJob({ commit }, id) {
      let url = `${API_BASE_URL}/job/${id}`;
      return axios.get(url).then((response) => {
        commit("setSingleJob", response.data);
        return response;
      });
    },
    loadCategories({ commit }) {
      let url = `${API_BASE_URL}/categories`;
      return axios.get(url).then((response) => {
        commit("setCategories", response.data);
        return response;
      });
    },
    postApplication({ commit }, params) {
      let id = params.id;
      let url = `${API_BASE_URL}/job/${id}/apply`;

      return axios.post(url, params.data);
    },
    postContactForm({ctx},data)
    {
      let url = `${API_BASE_URL}/contact`;
      return axios.post(url, data);
    }

  }
})
