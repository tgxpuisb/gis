import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OpenLayers from '@/components/OpenLayers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/openlayers',
      name: 'OpenLayers',
      component: OpenLayers
    }
  ]
})
