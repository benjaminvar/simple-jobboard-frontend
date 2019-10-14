import Vue from 'vue'
import Vuex from 'vuex'
import { API_BASE_URL } from "@/common/api";
import login from "@/common/store/modules/login.module"
import axios from "axios"
import { objectToQueryParams } from "@/common/helpers";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    offers: {},
    offer: {},
    applications: [],
    application: {},
    applicationLink: "",
    states: [],
    overview: {},
    currencies: [],
    categories: []
  },
  getters: {
    getOffers(state) {
      return state.offers.data;
    }
  },
  mutations: {
    SetCompany(state, data) {
      state.user = data;
    },
    SetOffers(state, data) {
      state.offers = data;
    },
    SetOffer(state, data) {
      state.offer = data;
    },
    SetApplications(state, data) {
      state.applications = data;
    },
    SetApplication(state, data) {
      state.application = data;
    },
    SetStates(state, data) {
      state.states = data;
    },
    SetCategories(state, data) {
      state.categories = data;
    },
    SetOverview(state, data) {
      state.overview = data;
    },
    SetCurrencies(state, data) {
      state.currencies = data;
    },
    SetApplicationLink(state, data) {
      state.applicationLink = data;
    }
  },
  actions: {
    loginSocial({ commit }, { provider, code }) {
      let url = `${API_BASE_URL}/auth/social/${provider}/login`;
      return axios({
        url: url,
        method: "post",
        data: {
          code
        }
      }).then(response => {
        console.log(response)
        commit("setLoginToken", response.data);
      });
    },
    registerSocial(context, { provider, code }) {
      let url = `${API_BASE_URL}/auth/social/${provider}/register`;
      return axios({
        url: url,
        method: "post",
        data: {
          code
        }
      });
    },
    emailAvailable(context, email) {
      let url = `${API_BASE_URL}/auth/email/available` + objectToQueryParams({ email });
      return axios({
        method: "get",
        url: url
      })
        .then((response) => {
          return response.data;
        });
    },
    getMe(context, token) {
      let url = `${API_BASE_URL}/company/me`
      return axios({
        url: url,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`
        },

      })
        .then((response) => {
          context.commit("SetCompany", response.data);
        });
    },
    getCurrencies({ commit }) {
      let url = `${API_BASE_URL}/currencies`
      return axios({
        url: url,
        method: "GET"
      }).then((response) => {
        commit("SetCurrencies", response.data)
      });
    },
    getCategories({ commit }) {
      let url = `${API_BASE_URL}/categories`
      return axios({
        url: url,
        method: "GET"
      }).then((response) => {
        commit("SetCategories", response.data)
      });
    },
    getStates({ commit }) {
      let url = `${API_BASE_URL}/states`
      return axios({
        url: url,
        method: "GET"
      }).then((response) => {
        commit("SetStates", response.data)
      });
    },
    getOverview({ commit }, token) {
      let url = `${API_BASE_URL}/company/overview`
      return axios({
        url: url,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        commit("SetOverview", response.data)
      });
    },
    getOffers({ commit }, { keyword, token }) {

      let url = `${API_BASE_URL}/company/offers/view?keyword=${keyword}`
      return axios({
        url: url,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`
        },

      })
        .then((response) => {
          commit("SetOffers", response.data);
        });
    },
    getOffer({ commit }, { id, token }) {
      let url = `${API_BASE_URL}/company/offer/${id}/view`
      return axios({
        url: url,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`
        },

      })
        .then((response) => {
          commit("SetOffer", response.data);
        });
    },
    getApplications({ commit }, token) {
      let url = `${API_BASE_URL}/company/applications/view`
      return axios({
        url: url,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`
        },

      })
        .then((response) => {
          commit("SetApplications", response.data);
        });
    },

    postOffer(context, { token, data }) {
      let url = `${API_BASE_URL}/company/offer/add`
      return axios({
        url: url,
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`
        },
        data
      })
    },
    updateOffer(context, { token, data, id }) {
      let url = `${API_BASE_URL}/company/offer/${id}/update`
      return axios({
        url: url,
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`
        },
        data
      })
    },
    removeOffer(context, { token, id }) {
      let url = `${API_BASE_URL}/company/offer/${id}/delete`
      return axios({
        url: url,
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
    },
    getApplication({ commit }, { token, id }) {
      let url = `${API_BASE_URL}/company/application/${id}/view`
      return axios({
        url: url,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`
        },
      }).then(response => {
        commit("SetApplication", response.data);
      })
    },
    getApplicationLink({ commit }, { id, token }) {
      let url = `${API_BASE_URL}/company/cv/${id}/view?token=${token}`
      return new Promise((resolve, reject) => {
        commit("SetApplicationLink", url);
        resolve();
      });
    },
    updateUserInfo(context, { token, data }) {
      let url = `${API_BASE_URL}/company/user/update`
      return axios({
        "url": url,
        "method": "post",
        "data": data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    },
    updateCompanyInfo(context, { token, data }) {
      let url = `${API_BASE_URL}/company/update`;
      return axios({
        "url": url,
        "method": "post",
        "data": data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    },
    updatePasswordInfo(context, { token, data }) {
      let url = `${API_BASE_URL}/company/password/update`;
      return axios({
        "url": url,
        "method": "post",
        "data": data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  },

  modules: {
    login: login
  }
})
