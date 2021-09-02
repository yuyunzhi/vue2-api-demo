<template>
  <div>
    <div @click="gotoChild1">child2</div>
  </div>
</template>

<script>
export default {
  name: "Child1",
  methods: {
    gotoChild1() {
      this.$router.push("/main/child1");
    },
  },
};
</script>

<style scoped></style>
