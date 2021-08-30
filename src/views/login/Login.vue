<template>
  <div>
    <div>这是登陆页面</div>
    <router-link :to="{path:'/store'}">router-link跳转store</router-link>
  </div>

</template>

<script>
export default {
  name: "Login",
  mounted() {
    console.log(this.$route.params);
    console.log(this.$route.query);
  }
}
</script>

<style scoped lang="scss">

</style>
