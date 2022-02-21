import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Intercepts<R = AxiosResponse> {
  requestIntercepts?: (config:AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptsCatch?: (err: any) => any
  responseIntercepts?: (res: R) => R
  responseInterceptsCatch?: (err: any) => any
}

export interface PcAxiosRequestConfig<R = AxiosResponse> extends AxiosRequestConfig {
  intercepts?: Intercepts<R>
  showLoading?: boolean
}

export interface DataType {
  data:any
  returnCode:string | number
  success:boolean
}
