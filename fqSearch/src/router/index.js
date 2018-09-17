import Vue from 'vue'
import Router from 'vue-router'
import detail from '@/components/detail'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'detail',
      component: detail
    }, 
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

  ]
})
