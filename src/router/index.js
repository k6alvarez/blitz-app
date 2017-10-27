import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Events from '@/components/Events/Events'
import Teams from '@/components/Teams/Teams'
import Profile from '@/components/Profile/Profile'
import Settings from '@/components/Settings/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
