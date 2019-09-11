import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
/*Layout**/
import Layout from 'views/layout/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
    meta: { hidden: true },
  }, {
    path: '*',
    redirect: '/',
    meta: { hidden: true },
  }, {
    path: '/',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
    meta: { hidden: true },
  }],
});
