<template>
  <div>
    <div @click="gotoChild2">跳转到child1</div>
    <div @click="gotoIndex">跳转到首页</div>
  </div>
</template>

<script>
export default {
  name: "Child1",
  mounted() {
    console.log(this.$router);
  },
  methods: {
    gotoChild2() {
      this.$router.push('/main/child2')
    },
    gotoIndex() {
      this.$router.push('/')

    }
  }
}
</script>

<style scoped>

</style>
