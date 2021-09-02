<template>
  <div>
    <div>arr:{{this.arr}}</div>
  </div>
</template>

<script>
export default {
name: "Chid",
  inject:['xxx','arr'],
  mounted() {
    console.log('[child] inject xxx',this.xxx);
    console.log('[child] inject arr',this.arr);
  },
  methods:{
    updateValue(){
      this.m.value = Math.random()
    }
  }
}
</script>

<style scoped>

</style>
