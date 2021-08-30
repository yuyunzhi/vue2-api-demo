<template>
  <div id="app">
    <h1>这是首页一级路由下</h1>
    是否登陆了？ {{$store.state.isLogin}}

    <el-button @click="login"> 输入密码登陆 </el-button>
    <el-button @click="logout"> 退出登陆 </el-button>

    <div>
      mapState - count:{{count}}
    </div>
    <div>
      mapState - isLogin:{{isLogin}}
    </div>
    <hr>
    <div>
      <el-button @click="toRoot">跳转到根目录/</el-button>
      <el-button @click="toLogin">跳转到/login</el-button>
      <el-button @click="toMain" type="primary">跳转到/main</el-button>
      <el-button @click="toRouter" type="success">跳转到/main/child1</el-button>
      <el-button @click="toStore" type="success">跳转到/store</el-button>
    </div>
  <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed:{
    ...mapState([
      'count',
      'isLogin'
    ]),
  },
  methods:{

    login(){
      this.$store.commit('login')
    },
    logout(){
      this.$store.commit('logout')
      this.$router.push('/login')
    },
    toMain(){
      if(!this.isLogin){
        this.$message.error('请先登录');
        return
      }
      this.$router.push('/main')
    },
    toLogin(){
      if(!this.isLogin){
        this.$message.error('请先登录');
        return
      }
      this.$router.push('/login')
    },
    toRouter(){
      if(!this.isLogin){
        this.$message.error('请先登录');
        return
      }
      this.$router.push('/main/child1')
    },
    toStore(){
      if(!this.isLogin){
        this.$message.error('请先登录');
        return
      }
      this.$router.push('/store')
    },
    toRoot(){
      if(!this.isLogin){
        this.$message.error('请先登录');
        return
      }
      this.$router.push('/')

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
