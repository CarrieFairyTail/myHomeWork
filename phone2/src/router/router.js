import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import index from '../index/index'
import indexTwo from '../index/indexTwo'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/indexTwo',
      name: 'indexTwo',
      component: indexTwo
    }
  ]
})

export default router