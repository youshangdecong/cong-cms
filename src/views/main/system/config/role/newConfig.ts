import type { IsearchConfig } from '@/base-ui/form/type'
export const newConfig: IsearchConfig = {
  labalWidth: '80px',
  formItem: [
    {
      prop: 'name',
      label: '角色名称',
      placeholder: '请输入角色名称',
      type: 'text'
    },
    {
      prop: 'intro',
      label: '角色描述',
      placeholder: '请输入角色描述',
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
