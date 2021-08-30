import Api from '@/api/index'

const plugin = {
  install (Vue,options) {

    Vue.prototype.$api=Api
    Vue.prototype.$eventBus = new Vue()

    Vue.prototype.$log=()=>{
      console.log('plugin.install 执行了$log');
    }

    options.value
    // console.log('options',options);

    Vue.mixin({})

    Vue.directive(
        'log',{
          inserted: function (el,options) {

            console.log('这是自定义指令,options',options);
            console.log('这是自定义指令打出dom',el);

          }
        }
    )
  }
}


export default plugin
