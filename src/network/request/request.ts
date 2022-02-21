import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading.d'
import type { Intercepts, PcAxiosRequestConfig } from './type'
export class PcRequest {
  instance: AxiosInstance
  intercepts?: Intercepts
  showLoading?: boolean
  loadingInstance?: LoadingInstance
  constructor(config: PcAxiosRequestConfig) {
    this.instance = axios.create(config)
    this.intercepts = config.intercepts
    this.showLoading = config.showLoading ?? true
    //给单个实例添加拦截器
    this.instance.interceptors.request.use(
      this.intercepts?.requestIntercepts,
      this.intercepts?.requestInterceptsCatch
    )
    this.instance.interceptors.response.use(
      this.intercepts?.responseIntercepts,
      this.intercepts?.responseInterceptsCatch
    )

    //给所有的实例添加拦截器
    this.instance.interceptors.request.use(
      (config: PcAxiosRequestConfig) => {
        // config = config.intercepts?.requestIntercepts(config)
        // console.log('所有的实例全部拦截')
        console.log(this.showLoading)

        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: '正在加载中...',
            background: 'rgba(0, 0,0, 0.3)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有的实例响应拦截')
        this.loadingInstance?.close()
        return res
      },
      (err) => {
        return err
      }
    )

    //外面单独传的拦截器
  }
  request<T>(config: PcAxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      const firstLoading = this.showLoading
      //给单个实例添加拦截器
      if (config.showLoading) {
        this.showLoading = config.showLoading
      }

      if (config.intercepts?.requestIntercepts) {
        config = config.intercepts.requestIntercepts(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.intercepts?.responseIntercepts) {
            res = config.intercepts.responseIntercepts(res)
          }
          resolve(res)
          return res
        })
        .catch((err) => {
          this.showLoading = firstLoading
          reject(err)
          return err
        })
    })
  }
  get<T>(config: PcAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: PcAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T>(config: PcAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T>(config: PcAxiosRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}
