// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'

// const routes: Array<RouteRecordRaw> = [

// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router

import {createRouter,createWebHistory, RouteLocationNormalized, RouteLocationNormalizedLoaded} from 'vue-router'
import {collectRoute} from '../../scripts/collectRouter'


const path = require.context('../docs/zh-cn', true, /.md$/)

collectRoute(path)

type _ScrollPositionNormalized = {
  behavior?: ScrollOptions['behavior'];
  left: number;
  top: number;
};
collectRoute(path)
const routes = [
  { path: '/', redirect: { name: 'Introduce' } },
  ...collectRoute(path),
]

function scrollBehavior(to:RouteLocationNormalized, from:RouteLocationNormalizedLoaded, savedPosition:_ScrollPositionNormalized | null) {
  window.scrollTo(0, 0)
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
})

export default router