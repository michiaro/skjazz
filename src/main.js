import 'normalize.css';
import 'hamburgers';
import '@/styles/main.scss';
import '../static/fonts/stylesheet.css'
import Vue from 'vue';
import '@/components/globals';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
