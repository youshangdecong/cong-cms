import type { IsearchConfig } from '@/base-ui/form/type'
export const searchConfig: IsearchConfig = {
  labalWidth: '80px',
  formItem: [
    {
      prop: 'name',
      label: '类别名称',
      placeholder: '请输入类别名称',
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
