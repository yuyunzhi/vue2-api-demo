<template>
  <div>
    <div>这是动画页面</div>
  </div>
</template>

<script>
export default {
  name: "Transition",
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style scoped></style>
