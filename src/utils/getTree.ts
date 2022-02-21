interface Iinfo {
  id?: number
  label?: string
  children?: Iinfo[]
}

export const getTreeRole = (data: any) => {
  const treeResult: any[] = []

  data.forEach((item: any) => {
    const info: Iinfo = {}
    if (item.id) {
      info.id = item.id
    }
    if (item.name) {
      info.label = item.name
    }
    if (item.children && item.children.length > 0) {
      info.children = getTreeRole(item.children)
    }
    const newInfo = { ...info }
    treeResult.push(newInfo)
  })

  return treeResult
}

export const getIds = (data: any[]) => {
  const result: number[] = []
  const _getIds = (data: any[]) => {
    data.forEach((item) => {
      // if (item.id) {

      // }
      if (item.children && item.children.length > 0) {
        _getIds(item.children)
      } else {
        if (!item.children) {
          result.push(item.id)
        }
      }
    })
  }

  _getIds(data)

  return result
}
