<template>
  <div>
    <div>这是 跟路由 {{ url }}</div>
    <div @click="toLogin">跳转到Login</div>
    <div @click="toMain">跳转到Main</div>
    <div @click="toRouter">跳转到Router</div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data(){
    return{
      url:window.location.href
    }
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

    }
  }
}
</script>

<style scoped>

</style>
