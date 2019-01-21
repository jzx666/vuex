import Vue from 'vue'
import App from './App.vue'


import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
// 饿了吗UI的导入 
Vue.use(Element);

// 导入全局样式
import './assets/base.css'
// 导入路由
import router from './lib/router'

// 导入仓库
import store from './lib/store'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载到Vue实例上 把仓库
  store,
  router
}).$mount('#app')