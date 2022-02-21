import type { IsearchConfig } from '@/base-ui/form/type'
export const newConfig: IsearchConfig = {
  labalWidth: '80px',
  formItem: [
    {
      prop: 'name',
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'text'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实的姓名',
      type: 'text'
    },
    {
      prop: 'password',
      label: '密码',
      placeholder: '请输入密码',
      type: 'password'
    },
    {
      prop: 'cellphone',
      label: '电话号码',
      placeholder: '请输入电话号码',
      type: 'text'
    },
    {
      prop: 'roleId',
      label: '选择角色',
      placeholder: '请选择角色',
      type: 'select',
      options: []
    },
    {
      prop: 'departmentId',
      label: '选择部门',
      type: 'select',
      options: []
    }
  ],
  styleLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  }
}
