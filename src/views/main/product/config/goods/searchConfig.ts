import type { IsearchConfig } from '@/base-ui/form/type'
export const searchConfig: IsearchConfig = {
  labalWidth: '80px',
  formItem: [
    {
      prop: 'name',
      label: '商品名称',
      placeholder: '请输入商品名称',
      type: 'text'
    },
    {
      prop: 'realname',
      label: '商品地址',
      placeholder: '请输入商品地址',
      type: 'text'
    },
    {
      prop: 'enable',
      label: '状态',
      placeholder: '请选择',
      type: 'select',
      options: [
        {
          value: 1,
          label: '可用'
        },
        {
          value: 0,
          label: '下架'
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
