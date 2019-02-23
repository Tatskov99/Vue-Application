import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import HomePage from './pages/HomePage';

library.add(faHome, faUser);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);
Vue.prototype.$http = axios;

const routes = [
  { path: '/', component: HomePage },
  // { path: '/bar', component: Bar }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
