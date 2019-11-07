// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
// http request 請求攔截器，有token值則配置上token值
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('JWT_TOKEN')) {
      config.headers.Authorization = 'Bearer' + localStorage.getItem('JWT_TOKEN')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        localStorage.removeItem('token')
    }
    return Promise.reject(error.response.data)
  }
})

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
