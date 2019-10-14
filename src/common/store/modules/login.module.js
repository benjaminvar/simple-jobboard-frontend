import axos from "axios"
import { API_BASE_URL } from "@/common/api"
const axios = axos.create({});
export default {
    state: {
        token: null
    },
    mutations: {
        syncLoginToken(state) {
            state.token = null;
            let token = null;
            try {
                token = JSON.parse(localStorage.getItem("token"));
            } catch (e) {

            }
            if (token !== undefined && token !== null) {
                state.token = token;
            }

        },
        setLoginToken(state, token) {
            let tokenString = JSON.stringify(token);
            localStorage.setItem("token", tokenString);
        },
        clearLoginToken(state) {
            localStorage.removeItem("token");
        },

    },
    actions: {

        login(ctx, credentials) {
            let url = `${API_BASE_URL}/auth/login`;
            return axios({
                method: "post",
                url: url,
                data: credentials
            }).then((response) => {
                this.commit("setLoginToken", response.data);
            });
        },
        register(ctx,data)
        {
            let url = `${API_BASE_URL}/auth/register`;
            return axios({
                method: "post",
                url: url,
                data: data
            });
        },
        checkPasswordToken(ctx,data)
        {
            let url = `${API_BASE_URL}/auth/password/token`;
            return axios({
                method: "post",
                url: url,
                data: data,

            });
        },
        resetPassword(ctx,data)
        {
            let url = `${API_BASE_URL}/auth/reset/password`;
            return axios({
                method: "post",
                url: url,
                data: data
            });
        },
        resetLink(ctx,data)
        {
            let url = `${API_BASE_URL}/auth/reset/email`;
            return axios({
                method: "post",
                url: url,
                data: data
            });
        },
        logout() {
            return new Promise((resolve, reject) => {
                this.commit("clearLoginToken");
                resolve();
            })
        },
        checkLoginToken(ctx, token) {
            let url = `${API_BASE_URL}/auth/token/verify`;
            return axios({
                method: "post",
                url: url,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        },
        fetchLoginToken(ctx) {
            return new Promise((resolve, reject) => {
                this.commit("syncLoginToken");
                resolve();
            })
        },
    }
}