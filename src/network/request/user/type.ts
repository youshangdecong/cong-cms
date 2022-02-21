export interface IuserList {
  offset:number
  size:number
  name?: string,
  cellphone?: number
}

export interface InewUser {
  name: string
  realname: string
  password: string | number
  cellphone: number
  departmentId: number
  roleId: number
}

