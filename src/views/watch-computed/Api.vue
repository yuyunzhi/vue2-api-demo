<template>
  <div> api 页面
      <div>{{obj.a}}</div>
      <slot name="header"></slot>
      <slot name="main"></slot>
      <el-button @click="updateObj">修改Obj的值</el-button>
  </div>
</template>

<script>
export default {
name: "Api",
  data(){
    return {
      obj:{
        a:123
      }
    }
  },
  watch:{
    obj:{
      handler(n,o){
        console.log('watch obj',n,o);
      },
      deep:true,
      immediate:false // 表示绑定第一次就会执行
    },
    'obj.a':{
      handler(n,o){
        console.log('watch obj.a',n,o);
      }
    }
  },
  methods:{
    updateObj(){
      this.obj.a = Math.random()*100
    },
  }
}
</script>

<style scoped>

</style>
