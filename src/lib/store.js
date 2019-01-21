// 导入Vue
import Vue from 'vue';
// 导入Vuex
import Vuex from 'vuex'
// 注册插件
Vue.use(Vuex)

// 实例化仓库
const store = new Vuex.Store({
  // 仓库(数据)
  state: {
    cartData:{

    }
  },
  // 对外暴露的修改方法
  mutations: {
    add2cart(state,fruit){
      if(state.cartData[fruit.name]){
        state.cartData[fruit.name].num++
      }else{
        state.cartData[fruit.name] = fruit;
        state.cartData[fruit.name].num = 1;
      }
    }
  }
})

// 暴露出去
export default store;