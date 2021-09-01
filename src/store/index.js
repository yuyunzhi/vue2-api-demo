import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    isLogin: JSON.parse(localStorage.getItem('isLogin')) || false,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false },
      { id: 5, text: '...', done: true },
      { id: 6, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done).length
    }
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
    },
    addTodo(state,payLoad){
      state.todos.push(payLoad)
    }
  },
  actions: {
    increment (context,payLoad) {
      setTimeout(()=>{
        context.commit('increment',payLoad )
      },1000)
    },
    increment2 (context,payLoad) {
      return new Promise((resolve)=>{
        context.commit('increment',payLoad )
        resolve(100)
      })
    }
  }
})

export default store
