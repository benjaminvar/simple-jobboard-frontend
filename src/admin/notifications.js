import Vue from "vue"
import VueNotifications from 'vue-notifications'
import swal from 'sweetalert'// https://github.com/t4t5/sweetalert
import { callNotificationMixin } from "@/common/mixins"
function toast ({title, message, type,buttons, dangerMode,timeout, cb}) {
    if (type === VueNotifications.types.warn) type = 'warning'
    cb( swal({title,text: message,icon: type,buttons,dangerMode}));
  
  }
  
  const options = {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
  }
  
  Vue.use(VueNotifications, options)
  Vue.mixin(callNotificationMixin)