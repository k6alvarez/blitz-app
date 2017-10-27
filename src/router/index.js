import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Events from '@/components/Events/Events'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    }
  ]
})
