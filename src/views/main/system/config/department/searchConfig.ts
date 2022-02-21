import type { IsearchConfig } from '@/base-ui/form/type'
export const searchConfig: IsearchConfig = {
  labalWidth: '80px',

  formItem: [
    {
      prop: 'name',
      label: '部门名称',
      placeholder: '请输入部门名称',
      type: 'text'
    },
    {
      prop: 'leader',
      label: '部门领导',
      placeholder: '请输入部门领导',
      type: 'text'
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
