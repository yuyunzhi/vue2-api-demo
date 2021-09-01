<template>
  <div>{{this.arr}}</div>
</template>

<script>
export default {
name: "Chid",
  inject:['xxx','arr'],
  mounted() {
    console.log('[child] inject xxx',this.xxx);
    console.log('[child] inject arr',this.arr);
  }
}
</script>

<style scoped>

</style>
