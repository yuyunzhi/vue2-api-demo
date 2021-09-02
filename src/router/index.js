import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/Login'),
      meta: {
        pageId: '30034',
        title: '选择课文页面666666',
        pageIdMap: {
          publishHomework: '30034',
        }
      }
    },
    {
      path: '/render',
      name: 'Render',
      component: () => import('@/views/render/Render'),
      meta: {
        pageId: '30034',
        title: '选择课文页面666666',
      }
    },
    {
      path: '/lifeCircle',
      name: 'LifeCircle',
      component: () => import('@/views/life/LifeCircle'),
      meta: {
        pageId: '30034',
        title: '选择课文页面666666',
        pageIdMap: {
          publishHomework: '30034',
        }
      }
    },
    {
      path: '/api',
      name: 'Api',
      component: () => import('@/views/watch-computed/Api'),
      meta: {
        pageId: '30034',
        title: '选择课文页面666666',
        pageIdMap: {
          publishHomework: '30034',
        }
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/Index'),
      // redirect: { name: 'Child2' }, 当走到/ 会自动匹配name为 Child2的页面
      meta: {
        pageId: '30034',
        title: '选择课文页面',
        pageIdMap: {
          publishHomework: '30034',
          autoHomework: '30111'
        }
      }
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/views/main/Main'),
      children: [
        {
          // 当 /main/child1 匹配成功，
          path: 'child1',
          name: 'Child1',
          component: () => import('@/views/router/Child1'),
          meta: {
            pageId: '300341111',
            title: '选择课文页面11111',
            pageIdMap: {
              autoHomework: '30111'
            }
          }
        },
        {
          // 当 /main/child2 匹配成功，
          path: 'child2',
          name: 'Child2',
          component: () => import(/* webpackChunkName: "group-foo" */ '@/views/router/Child2'),
          meta: {
            pageId: '30034',
            title: '选择课文页面222222',
            pageIdMap: {
              publishHomework: '30034'
            }
          }
        },
      ]
    },

    {
      path: '/store',
      name: 'Store',
      component: () => import('@/views/store/Store'),
      meta: {
        title: 'Store'
      }
    },
  ]
})

router.beforeEach((to,from,next)=>{
  console.log('router.beforeEach isLogin -----',store.state.isLogin);
  if(store.state.isLogin === false && to.path !== '/login'){
    next({ path: '/login' })
  }else{
    next()
  }
})

export default router
