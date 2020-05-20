import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import third from '@/components/third'
import second from '@/components/second'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/third',
      name: 'third',
      component: third
    },
    {
      path: '/second',
      name: 'second',
      component: second
    }
  ]
})
