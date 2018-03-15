import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditorPage from '@/components/EditorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EditorPage',
      component: EditorPage
    }, {
      path: '/help',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
