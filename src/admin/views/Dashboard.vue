<template >
  <div class="wrapper">
    <MainHeader></MainHeader>
    <!-- Left side column. contains the logo and sidebar -->
    <SidebarMenu></SidebarMenu>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      
      <section class="content">
        <transition>
           <router-view></router-view>
        </transition>
       
      </section>
    </div>
    <!-- /.content-wrapper -->
    <FooterBar></FooterBar>
  </div>
</template>
<style>
.v-enter{
  opacity:0;
}
.v-enter-active{
  transition:all ease-in-out .8s;
}
</style>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      token: state => state.login.token
    })
  },
  mounted() {
    window.jQuery("body").layout("fix");
    this.fetchLoginToken().then(() => {
      let { access_token } = this.token;
      this.getMe( access_token);
    });
  },
  methods:{
    ...mapActions(["fetchLoginToken","getMe"])
  }
};
</script>