<template>
  <div>
    <div v-log="url">这是 根路由 </div>

    <br>
    <el-button @click="toLogin">跳转到Login</el-button>
    <el-button @click="toMain" type="primary">跳转到Main</el-button>
    <el-button @click="toRouter" type="success">跳转到Router</el-button>
    <el-button @click="toStore" type="success">跳转到Store</el-button>

  </div>
</template>

<script>
// import Api from '@/api/index'
export default {
  name: "Index",
  data(){
    return{
      url:window.location.href
    }
  },
  mounted() {
    // this.$api.Main.getList().then(res=>{
    //   console.log('发送请求了',res);
    // })
    this.$log()
    console.log('router meta',this.$route.matched)
    console.log('环境变量',process.env.NODE_ENV);
  },
  methods:{
    toMain(){
      this.$router.push('/main')
    },
    toLogin(){
      this.$router.push('/login')
    },
    toRouter(){
      this.$router.push('/main/child1')
    },
    toStore(){
      this.$router.push('/store')
    }
  }
}
</script>

<style scoped>

</style>
