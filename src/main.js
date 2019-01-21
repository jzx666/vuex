import Vue from 'vue'
import App from './App.vue'


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