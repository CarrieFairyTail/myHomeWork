import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js' // 自定义el
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false;
// 引入echarts
import myCharts from './echarts/myCharts.js'
Vue.use(myCharts)
// 引入echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
