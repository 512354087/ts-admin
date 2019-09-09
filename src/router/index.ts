import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
/*Layout**/
import Layout from 'views/layout/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  ],
});
