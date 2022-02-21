import type { IsearchConfig } from '@/base-ui/form/type'
export const searchConfig: IsearchConfig = {
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
      placeholder: '请输入密码',
      type: 'text'
    },
    {
      prop: 'cellphone',
      label: '电话号码',
      placeholder: '请输入查询的电话号码',
      type: 'text'
    },
    {
      prop: 'enable',
      label: '状态',
      placeholder: '请选择状态',
      type: 'select',
      options: [
        {
          value: 1,
          label: '启用'
        },
        {
          value: 0,
          label: '禁用'
        }
      ]
    },
    {
      prop: 'createAt',
      label: '创建时间',
      type: 'date',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ],
  styleLayout: {
    xl: 8,
    lg: 8,
    md: 8,
    sm: 12,
    xs: 24
  }
}
