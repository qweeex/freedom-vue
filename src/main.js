import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper';
window.$ = window.jQuery = require('jquery');
window.marquee = require('jquery.marquee');

Vue.use(VueAwesomeSwiper);
Vue.use({
  install: function(Vue, options){
    Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



