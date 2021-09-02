<template>
  <div>
    <div>生命周期页面</div>
    <div>
      {{ xxx }}
    </div>
    <div>
      <div v-for="(item, index) in arr" :key="index">{{ item }}</div>
    </div>
    <HelloWorld />

    <div>孙子组件修改value , 爷爷组件会修改 : {{ value }}</div>
    <el-button @click="update">修改数据 update</el-button>
    <el-button @click="updateArr">修改数据Arr update</el-button>

    <div v-for="n in 100" :key="n">{{ n }}</div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  name: "LifeCircle",
  components: {
    HelloWorld,
  },
  provide() {
    return {
      xxx: this,
      arr: this.arr,
    };
  },
  data() {
    return {
      xxx: 0,
      arr: [1, 2, 3, 4],
      value: 123,
    };
  },
  watch: {
    arr: {
      handler(n, o) {
        console.log("watch", n, o);
      },
      deep: true,
    },
  },
  methods: {
    updateArr() {
      this.arr.push(parseInt(Math.random() * 100));
    },
    update() {
      this.xxx = parseInt(Math.random() * 100);
      console.log(this.xxx);
    },
  },
  beforeCreate() {
    // 无法做DOM操作因为拿不到还没有挂载
    console.log(this.$el, "beforeCreate"); // undefined
  },
  created() {
    // 无法做DOM操作因为拿不到还没有挂载
    console.log(this.$el, "created"); // undefined
  },
  beforeMount() {
    console.log(this.$el, "beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    // 一定要再html里使用的数据修改了，才会触发生命周期
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style scoped></style>
