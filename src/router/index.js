import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  }
]

// 递归该文件夹的所有js文件
const requireContext = require.context('./', true, /\.js$/)

// 把文件夹下的所有js文件合并到routes中
requireContext.keys().forEach(filename => {
  if (filename === './index.js') return
  const routerModule = requireContext(filename)
  routes = [...routes, ...(routerModule.default || routerModule)]
})

const router = new Router({
  routes
})

// 添加路由，如404页面
router.addRoutes([
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
])

// 全局路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
