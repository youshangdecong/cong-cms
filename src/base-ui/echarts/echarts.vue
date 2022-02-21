<template>
  <div class="echarts">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, watch } from 'vue'
import { convertData } from './index'
import * as echarts from 'echarts'
const china = require('./china.json')
export default defineComponent({
  components: {},
  props: {
    option: {
      type: Object,
      default: () => ({})
    },
    idName: {
      type: String
    }
  },
  setup(props) {
    watch(
      () => props.option,
      () => {
        nextTick(() => {
          const option = { ...props.option }

          var chartDom = document.querySelector(
            `#${props.idName}`
          ) as HTMLElement
          if (props.idName === 'addressMap') {
            const data = option.series && option.series[0].data

            console.log(convertData(data))

            option.series[0].data = convertData(data)
          }

          // chartDom.setAttribute('_echarts_instance_', '')
          let myChart = echarts.init(chartDom)
          echarts.registerMap('china', china)
          option && myChart?.setOption(option)

          window.addEventListener('resize', () => {
            myChart.resize()
          })
        })
      },
      {
        deep: true
      }
    )
  }
})
</script>

<style lang="less">
.echarts {
  width: 100%;
  height: 360px;
}
</style>
