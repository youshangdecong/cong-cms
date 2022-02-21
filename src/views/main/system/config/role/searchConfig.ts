import type { IsearchConfig } from '@/base-ui/form/type'
export const searchConfig: IsearchConfig = {
  labalWidth: '80px',
  formItem: [
    {
      prop: 'name',
      label: '角色名称',
      placeholder: '请输入角色名',
      type: 'text'
    },
    {
      prop: 'intro',
      label: '权限介绍',
      placeholder: '请输入权限介绍',
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
