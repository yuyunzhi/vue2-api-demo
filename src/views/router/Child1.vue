<template>
  <div>
    <div @click="gotoChild2">跳转到child2</div>
  </div>
</template>

<script>
export default {
  name: "Child1",
  methods: {
    gotoChild2() {
      this.$router.push("/main/child2");
    },
  },
};
</script>

<style scoped></style>
