import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@morioh/v-msg/dist/msg.min.css';
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.min.js';
Vue.config.productionTip = false


import Notifications from 'vue-notification'
Vue.use(Notifications)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
