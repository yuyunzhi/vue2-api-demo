<template>
  <div id="app">
    <h1>这是首页一级路由下</h1>
    是否登陆了？ {{$store.state.isLogin}}

    <el-button @click="login"> 输入密码登陆 </el-button>
    <el-button @click="logout"> 退出登陆 </el-button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    login(){
      this.$store.commit('login')
    },
    logout(){
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
