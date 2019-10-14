import Vue from "vue"
import VueSocialauth from "vue-social-auth"
console.log(VueSocialauth)
Vue.use(VueSocialauth, {
 
    providers: {
      facebook: {
        clientId: `${process.env.VUE_APP_FACEBOOK_CLIENT_ID}`,
        redirectUri: `${process.env.VUE_APP_FACEBOOK_CLIENT_REDIRECT_URI}` // Your client app URL
      },
      google: {
        clientId: `${process.env.VUE_APP_GOOGLE_CLIENT_ID}`,
        redirectUri: `${process.env.VUE_APP_GOOGLE_CLIENT_REDIRECT_URI}`, // Your client app URL
        scope: "profile"
      }
    }
  })
  