// import { AxiosRequestConfig } from 'axios'
import { pccatch } from '@/utils/catch'
import { BASE_TIMEOUT, BASE_URL } from './request/config'
import { PcRequest } from './request/request'
const request = new PcRequest({
  baseURL: BASE_URL,
  timeout: BASE_TIMEOUT,
  intercepts: {
    requestIntercepts: (config) => {
      const token = pccatch.getCatch('token')
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }

      // console.log('请求拦截成功')
      return config
    },
    requestInterceptsCatch: (err) => {
      console.log('请求拦截失败')
      return err
    },
    responseIntercepts: (res) => {
      // console.log('响应拦截成功')
      // console.log(res.data)
      const data = res.data
      if (data.returnCode === -1001) {
        // console.log('请求失败')
        return `错误是：${data.returnCode}`
      }
      return res.data
    },
    responseInterceptsCatch: (err) => {
      console.log('响应拦截失败')

      if (err.response.status === 404) {
        return '错误是404'
      }
      return err
    }
  }
  // showLoading: false
  // showLoading: false
})

export { request }
