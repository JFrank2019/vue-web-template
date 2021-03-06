import axios from 'axios'
import store from '@/store'
import NProgress from 'nprogress'
import { Message } from 'element-ui'

// 取消右上方的圈圈
NProgress.configure({ showSpinner: false })

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    config.headers['token'] = store.state.token
    NProgress.start()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    NProgress.done()
    return response
  },
  error => {
    Message.error({
      message: error.message
    })
    NProgress.done()
    return Promise.reject(error)
  }
)

export default request
