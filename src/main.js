import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import SignUp from './components/SignUp';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faUser);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: SignUp },
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
