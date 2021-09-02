<template>
  <div class="hello">
    <h1>Header组件</h1>
    <div>
      这是parent: {{this.arr}}
    </div>
    <div>
      这是child : <Child/>
    </div>

  </div>
</template>

<script>
import Child from './Child';
export default {
  name: 'HelloWorld',
  inject:['xxx','arr'],
  components:{
    Child
  },
  props: {
    msg: String
  },
  mounted() {
    console.log('[parent] inject xxx',this.xxx);
    console.log('[parent] inject arr',this.arr);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
