export const categorySale: any = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['分类销量统计']
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '分类销量统计',
      type: 'line',
      emphasis: {
        focus: 'series'
      },
      data: [],
      areaStyle: {}
    }
  ]
}
