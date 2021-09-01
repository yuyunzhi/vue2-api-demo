<template>
  <div>
    <div>这是store页面</div>

    <div> {{$store.state.isLogin}}</div>

    <hr/>
    <div>从COMPUTED获得{{storeCount}}</div>
    <div>直接从store拿 :{{$store.state.count}}</div>
    <el-button @click="increment"> mutation +10 </el-button>
    <el-button @click="minus">mutation -10</el-button>
    <el-button @click="incrementAction">action +10</el-button>
    <el-button @click="incrementAction2">action.then +10</el-button>
    <el-button @click="addTodo"> add To do</el-button>
    <el-button @click="eventBush"> 使用eventBus 来触发事件</el-button>
<!--    <el-button @click="login"> 输入密码登陆 </el-button>-->
<!--    <el-button @click="logout"> 退出登陆 </el-button>-->

  </div>
</template>

<script>
export default {
  name: "Store",
  computed:{
    storeCount(){
      return this.$store.state.count
    }
  },
  methods:{
    eventBush(){
      this.$eventBus.$emit('update',Math.random())
    },
    addTodo(){
      this.$store.commit('addTodo',  { id: Math.random()*100, text: '...', done: true })
    },
    incrementAction2(){
      this.$store.dispatch('increment2',10).then(res=>{
        console.log('dispatch后的结果',res);
      })

    },
    incrementAction(){
      this.$store.dispatch('increment',10)

    },
    increment() {
      this.$store.commit('increment',Math.random()*100)
      console.log(this.$store.state.count)
    },
    minus(){
      this.$store.commit('minus',Math.random()*100)
      console.log(this.$store.state.count)
    },
    login(){
      this.$store.commit('login')
    },
    logout(){
      this.$router.push('/')

      this.$store.commit('logout')

    }
  }
}
</script>

<style scoped>

</style>
