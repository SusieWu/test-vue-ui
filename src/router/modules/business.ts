import { RouteConfig } from 'vue-router'
import Layout from '@/components/layout/index.vue'

const businessRoutes: RouteConfig = {
  path: '/business',
  component: Layout,

  name: 'Business',
  meta: {
    title: 'business',
    icon: 'user'
  },
  children: [
    {
      path: 'appConfig',
      name: 'AppConfig',
      meta: { title: 'appConfig' },
      component: () => import(/* webpackChunkName: "banner" */ '@/views/app/business/appConfig/appConfig.vue'),
      children: [
        {
          path: 'banner',
          component: () => import(/* webpackChunkName: "banner" */ '@/views/app/business/appConfig/banner/index.vue'),
          name: 'Banner',
          meta: { title: 'banner' }
        },
        {
          path: 'screen',
          component: () => import(/* webpackChunkName: "screen" */ '@/views/app/business/appConfig/screen/index.vue'),
          name: 'Screen',
          meta: { title: 'screen' }
        }
      ]
    },
  ]
}

export default businessRoutes
