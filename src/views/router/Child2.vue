<template>
  <div>
    <div @click="gotoChild1">child2</div>
    <div @click="gotoLogin">跳转到登陆页</div>
  </div>
</template>

<script>
export default {
name: "Child1",
  methods:{
    gotoChild1(){
      this.$router.push('/main/child1')
    },
    gotoLogin(){
      this.$router.push('/login')
    },
  }
}
</script>

<style scoped>

</style>
