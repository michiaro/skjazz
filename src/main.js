import 'normalize.css';
import 'hamburgers';
import '@/styles/main.scss';
import '@/components/globals';
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import '../static/fonts/stylesheet.css';
import App from './App';
import router from './router';
import store from './store';

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
