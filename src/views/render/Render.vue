<script>
export default {
  name: "Render",
  data(){
    return {
      value:6666
    }
  },
  methods:{
    handleClick(){
      console.log('点击了');
    }
  },
  render(createElement) {
    return createElement(
        'div',
        {
          ref:'refValue',
          on:{
            click:this.handleClick
          }
        },
        [
            createElement(
                'span',
                {
                  ref:'span'
                },
                this.value
        )]
    )
  }
}
</script>

<style scoped>

</style>
