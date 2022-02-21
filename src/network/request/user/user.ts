import { request } from '../../index'
import type { IuserList } from './type'

const defaultOffsetPage = { offset: 0, size: 10 }

//因为获取所有的list请求 都是差不多的 格式都是 /{{user}}/list
//所有我让外界发送请求的时候，多传入一个 name

enum UserApi {
  // userLise = '/users/list'
  list = '/list',
  newList = '/users'
}

export function getUserList(data: IuserList = defaultOffsetPage, name: string) {
  return request.post<any>({
    url: '/' + name + UserApi.list,
    data: data
  })
}

export function newUser(formInfo: any) {
  const { name, formData } = formInfo

  return request.post<any>({
    url: `/${name}`,
    data: formData
  })
}

export function deleteUser(formInfo: any) {
  const { name, id } = formInfo
  return request.delete<any>({
    url: `/${name}/${id.id}`
  })
}

export function editUser(formInfo: any) {
  const { name, id, formData } = formInfo

  return request.patch<any>({
    url: `/${name}/${id}`,
    data: formData
  })
}
