// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App'
import Main from "./components/Main"
import Two from "./components/Two"

Vue.config.productionTip = false;
Vue.use(VueRouter);

var router = new VueRouter({

  mode: 'history',
  routes: [

    {path: "/", component: Main},
    {path: "/two", component: Two},

  ]

});

/* eslint-disable no-new */
new Vue({

  el: '#app',
  components: {

    App,
    Main,
    Two

   },
  template: '<App/>',
  router

})
