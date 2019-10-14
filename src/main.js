import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入normalize.css、nprogress样式文件
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
// 引入ElementUI框架
import ElementUI from 'element-ui'
import '@/assets/styles/styles.scss'
// 引入全局注册组件文件
import './components'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
