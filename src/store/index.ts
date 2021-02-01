import { createStore } from 'vuex'

const store = createStore({
  state: {
    count:0,
    user:{
      isLogin:false
    }
  },
  //变化
  mutations: {
    add(state){
      state.count++;
    },
    sub(state){
      state.count--;
    }
  },
  actions: {
  },
  modules: {
  }
})
console.log('store', store.state.count)
store.commit('add');
console.log('store', store.state.count)
export default store;