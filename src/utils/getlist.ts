export const getlist = (data: any[]) => {
  const result: any[] = []
  data.forEach((item: any) => {
    result.push({
      value: item.id,
      label: item.name
    })
  })
  return result
}
