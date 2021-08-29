<template>
  <div>
    <div class="main">这是main</div>
    <div @click="toLogin">跳转到Login</div>
    <router-link :to="{path:'/login/'}">router-link跳转 到登陆页 </router-link>
    <div style="border:1px solid blue">
      <h2>这是二级路由下的窗口</h2>
      <router-view></router-view>
    </div>


  </div>

</template>

<script>
import mixinx from '@/mixin'

export default {
  name: "Main",
  mixins: [mixinx],
  mounted() {
    this.log()
  },
  methods:{
    toLogin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/style';


//@import '../../styles/style';


</style>
