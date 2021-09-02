<script>
export default {
  name: "Render",
  data(){
    return {
      value:6666
    }
  },
  render(createElement) {
    return createElement(
        'div',
        {
          ref:'refValue'
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
