import { request } from '@/network'

export function getAmountList() {
  return request.get({
    url: 'goods/amount/list'
  })
}

//通过传入的参数 获取每个分类商品的 个数或者销量或者收藏
export function getCategoryInfo(params: string) {
  return request.get({
    url: 'goods/category/' + params
  })
}

//获取不同城市的销量
export function getAddressList() {
  return request.get({
    url: 'goods/address/sale'
  })
}
