export const chanaMap: any = {
  title: {
    text: '校友中国分布地图'
  },
  tooltip: {
    trigger: 'item'
  }, // 鼠标移到图里面的浮动提示框
  visualMap: [
    {
      min: 0,
      max: 70000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#fff'
      },
      showLegendSymbol: true
    }
  ],
  geo: {
    map: 'china',
    roam: 'scale',
    emphasis: {
      areaColor: '#f4cccc',
      borderColor: 'rgb(9, 54, 95)',
      itemStyle: {
        areaColor: '#f4cccc'
      }
    }
  },
  series: [
    {
      map: 'china',
      type: 'scatter',
      aspectScale: 0.75,
      tooltip: {
        show: true
      },
      geoIndex: 0,
      name: '销量',
      coordinateSystem: 'geo',
      data: [],
      encode: {
        value: 2
      }
    }
  ]
}
