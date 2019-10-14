<template>
  <div ref="container">
    <div ref="placeholder"></div>
  </div>
</template>
<script>
export default {
  name: "GoogleRecaptcha",
  data() {
    return {
      scriptUrl: `https://www.google.com/recaptcha/api.js?onload=captchaCallback&render=explicit`
    };
  },

  computed: {
    container() {
      return this.$refs.container;
    }
  },
  props: {
    siteKey: {
      type: String
    }
  },
  mounted() {
    window.captchaCallback = this.handle;
    let script = document.createElement("script");
    script.async = "async";
    script.defer="defer";
    script.src = this.scriptUrl;
    let container = this.container;
    container.appendChild(script);
  },
  methods: {
    handle() {
      grecaptcha.render(this.$refs.placeholder, {
          'sitekey' : this.siteKey,
          "callback": (response) => {
            this.$emit("success",response);
          },
          "expired-callback": () =>{
            this.$emit("expired");
          },
          "error-callback": () => {
              this.$emit("error");
          }
        });
      
    }
  }
};
</script>