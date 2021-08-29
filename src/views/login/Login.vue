<template>
  <div>
    <div>这是登陆页面</div>
    <div @click="toMain"> 跳转到main的页面</div>
    <router-link :to="{path:'/?asdf'}">router-link跳转 </router-link>
  </div>

</template>

<script>
export default {
  name: "Login",
  mounted() {
    console.log(this.$route.params);
    console.log(this.$route.query);
  },
  methods:{
    toMain(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
