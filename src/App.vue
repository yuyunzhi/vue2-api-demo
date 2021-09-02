<template>
  <div id="app">
    <h1>这是首页一级路由下</h1>
    是否登陆了？ {{$store.state.isLogin}}

    <el-button @click="login"> 登陆 </el-button>
    <el-button @click="logout"> 退出 </el-button>

    <div>
      eventBus : {{eventBus}}
    </div>
    <div>
      mapState - count:{{count}}
    </div>
    <div>
      mapState - isLogin:{{isLogin}}
    </div>
    <div>
      todoLength - isLogin:{{$store.getters.doneTodos}}
    </div>

    <div style="marginTop: 20px">

      <div style="marginBottom: 20px">
        <el-button @click="toRoot">跳转到根目录/</el-button>
        <el-button @click="toLogin">跳转到/login</el-button>
        <el-button @click="toMain" type="primary">跳转到/main</el-button>
        <el-button @click="toRouter" type="success">跳转到/main/child1</el-button>
      </div>

      <div style="marginBottom: 20px">
        测试 store api : <el-button @click="toStore" type="success">跳转到/store</el-button>
      </div>
      <div style="marginBottom: 20px">
        测试 生命周期 : <el-button @click="toLifeCircle" type="success">跳转到/lifeCircle</el-button>
      </div>
      <div style="marginBottom: 20px">
        测试 watch computed : <el-button @click="toApi" type="success">跳转到/api</el-button>
      </div>
      <div style="marginBottom: 20px">
        测试 render 函数 : <el-button  type="success">
        <router-link to="/render">跳转到/render</router-link>
      </el-button>
      </div>
    </div>
  <hr>
    <div style="border:1px solid red">
      <router-view></router-view>
    </div>
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
  data(){
    return {
      eventBus:0
    }
  },
  mounted() {
    this.$eventBus.$on('update',(data)=>{
        this.eventBus = data
    })
  },
  methods:{
    toApi(){
      this.$router.push('/api')
    },
    login(){
      this.$store.commit('login')
    },
    logout(){
      this.$store.commit('logout')
      this.$router.push('/login')
    },
    toLifeCircle(){
      this.$router.push('/lifeCircle')
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
