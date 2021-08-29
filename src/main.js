import Vue from 'vue'
import App from './App.vue'
import router from './router'
import plugin from './utils/plugin'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import './styles/normalize.scss'
Vue.config.productionTip = false

Vue.use(plugin,Vue)
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
