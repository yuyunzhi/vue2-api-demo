<template>
  <div>
    <div>生命周期页面</div>
    <div>
      {{xxx}}
    </div>

    <el-button @click="update">修改数据 update</el-button>
  </div>
</template>

<script>
export default {
  name: "LifeCircle",
  data(){
    return {
      xxx : 0
    }
  },
  methods: {
    update() {
        this.xxx = parseInt(Math.random()*100)
      console.log(this.xxx);
    }
  },
  beforeCreate() {
    // 无法做DOM操作因为拿不到还没有挂载
    console.log(this.$el,'beforeCreate'); // undefined
  },
  created() {
    // 无法做DOM操作因为拿不到还没有挂载
    console.log(this.$el,'created'); // undefined
  },
  beforeMount() {
    console.log(this.$el,'beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() { // 一定要再html里使用的数据修改了，才会触发生命周期
    console.log('updated');
  },
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  }
}
</script>

<style scoped>

</style>
