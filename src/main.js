import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import comm from './comm'
import { Dialog  } from 'vant';
import jq from 'jquery';

Vue.config.productionTip = false
import './assets/css/comm.css'
import 'swiper/css/swiper.css';
import 'font-awesome/css/font-awesome.min.css'

window.$ = jq;

Vue.use(Dialog );
Vue.use(comm)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
