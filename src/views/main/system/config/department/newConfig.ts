import type { IsearchConfig } from '@/base-ui/form/type'
export const newConfig: IsearchConfig = {
  labalWidth: '80px',
  formItem: [
    {
      prop: 'name',
      label: '部门名称',
      placeholder: '请输入部门名称',
      type: 'text'
    },
    {
      prop: 'parentId',
      label: '上级部门',
      placeholder: '请输入上级部门',
      type: 'select',
      options: []
    },
    {
      prop: 'leader',
      label: '领导名称',
      placeholder: '请输入领导名称',
      type: 'text'
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
