import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import inputFields from '@/components/form/input-field-group'
import Home from '@/components/HelloFromVux'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/input-fields',
      name: 'inputFields',
      component: inputFields
    }
  ]
})
