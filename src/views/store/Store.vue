<template>
  <div>
    <div>这是store页面</div>

    <div>{{$store.state.isLogin}}</div>

    <hr/>
    <div>{{$store.state.count}}</div>
    <el-button @click="increment"> +10 </el-button>
    <el-button @click="minus"> -10</el-button>
<!--    <el-button @click="login"> 输入密码登陆 </el-button>-->
<!--    <el-button @click="logout"> 退出登陆 </el-button>-->

  </div>
</template>

<script>
export default {
  name: "Store",
  methods:{
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
