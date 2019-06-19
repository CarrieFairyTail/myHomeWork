// import Vue from 'vue'
import Axios from 'axios'

export default request => {
  // request.params = request.params || {}
  // if (!request.params.account) {
  //   request.params.account = window.account
  // }

  const method = request.method || 'GET'
  // Axios.defaults.withCredentials = true
  return Axios({
    url: process.env.VUE_APP_API_URL + request.url, // 注意robot+具体某一个url
    method,
    params: method === 'GET' || method === 'DELETE' ? Object.assign({ user: window.account }, request.params) : {},
    data: method !== 'GET' || method === 'DELETE' ? Object.assign({ user: window.account }, request.params) : {}
  }).then(res => {
    return Promise.resolve(res)
  }).catch(error => {
    // eslint-disable-next-line no-console
    console.log('错误信息:' + error.message)
  })
}
