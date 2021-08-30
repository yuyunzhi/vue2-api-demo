import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    isLogin: JSON.parse(localStorage.getItem('isLogin')) || false
  },
  mutations: {
    increment (state,payload) {
      state.count= state.count +  payload
    },
    minus(state,payload){
      state.count= state.count - payload
    },
    login(state){
      localStorage.setItem('isLogin',JSON.stringify(true))
      state.isLogin = true
    },
    logout(state){
      localStorage.removeItem('isLogin')
      state.isLogin = false
    }
  }
})

export default store
