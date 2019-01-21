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
        //普通数据
        // state.cartData[fruit.name] = fruit;
        //vue数据Vue.set(给谁设置,键,值);
        Vue.set(state.cartData,fruit.name,fruit);
        // state.cartData[fruit.name].num = 1;
        Vue.set(state.cartData[fruit.name],'num',1);
      }
    }
  },
  getters:{
    totalNum(state){//这里对购物车的总数进行统计,把商品总数返回
      let num = 0;
      for (const key in state.cartData) {
        num += state.cartData[key].num
      }
      return num;
    }
  }
})

// 暴露出去
export default store;