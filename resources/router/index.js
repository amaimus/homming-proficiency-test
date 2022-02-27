import Vue from 'vue';
import VueRouter from 'vue-router';
import Properties from '../views/Properties.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Properties',
    component: Properties,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
