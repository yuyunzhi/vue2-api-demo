export default {
  data(){
    return {
       mixin:'这是mixin'
    }
  },
  methods: {
      log(){
        console.log('log',this.mixin);
      }
  }
}
