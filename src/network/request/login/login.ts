import { request } from '../../index'
import type { login } from './type'
enum LoingApi {
  AccountLogin = '/login',
  UserInfo = '/users/',
  UserMenus = '/role/'
}
export function requestLoginAction(userInfo: login) {
  console.log(userInfo)

  return request.request<any>({
    method: 'POST',
    url: LoingApi.AccountLogin,
    data: userInfo
  })
}
export function requestUserInfo(id: number) {
  return request.get<any>({
    url: LoingApi.UserInfo + id
  })
}
export function requerstMenus(id: number) {
  return request.get<any>({
    url: LoingApi.UserMenus + id + '/menu'
  })
}
