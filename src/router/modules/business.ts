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
      path: 'carGroup',
      name: 'CarGroup',
      meta: { title: 'carGroup' },
      component: () => import(/* webpackChunkName: "banner" */ '@/views/app/business/carGroup/index.vue'),
    },
    {
      path: 'carGroupBuild',
      name: 'CarGroupBuild',
      meta: { title: 'carGroupBuild', hidden: true },
      component: () => import(/* webpackChunkName: "banner" */ '@/views/app/business/carGroup/build.vue'),
    },
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
    {
      path: 'vehicleManage',
      name: 'vehicleManage',
      meta: { title: 'vehicleManage' },
      component: () => import(/* webpackChunkName: "banner" */ '@/views/businessSupport/vehicleManage.vue')
    },
  ]
}

export default businessRoutes
