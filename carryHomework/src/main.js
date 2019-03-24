// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import App from './App.vue';
import Risk from './Risk.vue';
import Risk2 from './Risk2.vue';
import Team from './Team.vue';
import Test from './Test.vue';

import axios from 'axios' //引入axios
Vue.prototype.$axios = axios; //添加axios到Vue的原型对象上

Vue.use(ElementUI);

new Vue({
  el: '#risk',
  render: h => h(Risk)
});
