export default function Auth($store) {
    let store = null;
    store = $store;
    this.check = function () {

        return new Promise((resolve, reject) => {
            store.dispatch("fetchLoginToken")
                .then(() => {
                    let token = store.state.login.token;
                    if (token !== null && token !== undefined) {
                        this.checkLoginToken(token)
                            .then(() => {
                                resolve();
                            })
                            .catch(() => {
                                reject();
                            });
                    } else {
                        reject();
                    }

                });
        })
    }
    this.checkLoginToken = function (token) {
        let { access_token } = token;
        let [, token_info_encoded,] = access_token.split(".");
        let token_info = btoa("token_info_encoded");
        return store.dispatch("checkLoginToken", access_token);
    }
}