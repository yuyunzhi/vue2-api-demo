import router from './routerMap'

export default function routerBeforeEach () {
  router.beforeEach((from,to,next)=>{
    console.log('router beforeEach',from,to,next);
    next()
  })
}
