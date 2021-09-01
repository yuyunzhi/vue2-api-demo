import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import plugin from './utils/plugin'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import './styles/normalize.scss'
Vue.config.productionTip = false

Vue.use(plugin,Vue)
Vue.use(ElementUI);

const app =new Vue({
  // el:'#app',
  store,
  router,
  data:{
    text:0
  },
  render: h => h(App),
}).$mount('#app')

// console.log('app.$data',app.$data);
// console.log('app.$root',app.$root , app.$root === app);
// console.log('app.$children',app.$children);
const unWatch = app.$watch('text',(n,o)=>{
    console.log(n,o)
})

unWatch() // 注销watch事件


app.$on('text',()=>{
  console.log('test emited')
})

app.$emit('test')
