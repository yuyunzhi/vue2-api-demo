import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/Index'),
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/views/main/Main'),
      children: [
        {
          // 当 /router/:id/child1 匹配成功，
          path: 'child1',
          component: () => import('@/views/router/Child1')
        },
        {
          // 当 /router/:id/child1 匹配成功，
          path: 'child2',
          component: () => import('@/views/router/Child2')
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/Login')
    },

  ]
})
