import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.filter('capitalize', (value) => {
  if (!value) return '';
  return value.toString().charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
