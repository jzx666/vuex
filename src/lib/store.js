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
    cartData:JSON.parse(window.localStorage.getItem('cartData')) || {}//获取本地的购物车商品,没有就为空
  }, 
   //计算属性
  getters:{
    totalNum(state){//这里对购物车的总数进行统计,把商品总数返回
      let num = 0;
      for (const key in state.cartData) {
        num += state.cartData[key].num
      }
      return num;
    }
  },
  // 对外暴露的修改方法
  mutations: {
    add2cart(state,fruit){//这里是添加到购物车的事件
      if(state.cartData[fruit.name]){
        state.cartData[fruit.name].num++;
      }else{
        //普通数据
        // state.cartData[fruit.name] = fruit;
        //vue数据  Vue.set(给谁设置,键,值);
        Vue.set(state.cartData,fruit.name,fruit);
        // state.cartData[fruit.name].num = 1;
        Vue.set(state.cartData[fruit.name],'num',1);

      }
    },
        // 删除数据
        removeFruit(state, fruit) {    
          // Vue也提供了一个 delete方法用来移除 对象中的属性 让Vue放弃监听
          Vue.delete(state.cartData,fruit.name);
        }
  },

})


//浏览器关闭的时候保存数据
window.onbeforeunload = function(){
  window.localStorage.setItem('cartData',JSON.stringify(store.state.cartData))//购物车商品数据存到本地
}



// 暴露出去
export default store;