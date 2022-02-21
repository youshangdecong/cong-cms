<template>
  <div dashboadr>
    <div class="count">
      <count-card
        :count="amountList.length"
        :amountList="amountList"
      ></count-card>
    </div>

    <div class="figure">
      <el-row :gutter="10">
        <el-col :span="7">
          <pc-echarts
            title="分类商品数量(饼图)"
            :option="goodsCountListOption"
            idName="goodsCountListPie"
          ></pc-echarts
        ></el-col>
        <el-col :span="10">
          <pc-echarts
            title="不同城市商品销量"
            idName="addressMap"
            :option="goodsAdressListOption"
          ></pc-echarts>
        </el-col>
        <el-col :span="7">
          <pc-echarts
            title="分类商品数量(玫瑰图)"
            idName="rosePie"
            :option="goodsCountRoseOption"
          ></pc-echarts>
        </el-col>
      </el-row>

      <el-row :gutter="10" :style="{ marginTop: '15px' }">
        <el-col :span="12">
          <pc-echarts
            title="分类商品的销量"
            :option="goodsSalesListOption"
            idName="categorySales"
          ></pc-echarts>
        </el-col>
        <el-col :span="12">
          <pc-echarts
            title="分类商品的收藏"
            :option="goodsCollectionListOption"
            idName="categoryCollection"
          ></pc-echarts>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { CountCard } from '@/components/src'
import { useStore } from '@/store'
import { PcEcharts } from '@/components/src'
import {
  categoryCount,
  categoryCountRose,
  categorySale,
  categoryCollection,
  chanaMap
} from './config/dashboard/src'

// import { PcCard } from '@/base-ui/src'
export default defineComponent({
  components: {
    CountCard,
    PcEcharts
  },
  setup() {
    const store = useStore()
    store.dispatch('analysis/actionAmountList')
    store.dispatch('analysis/actionGetGoodsInfo')

    const amountList = computed(() => {
      return store.state.analysis.amountList
    })
    const goodsCountListOption = computed(() => {
      const goodsCountList = store.state.analysis.goodsCountList
      categoryCount.series[0].data = goodsCountList.map((item: any) => {
        return {
          value: item.goodsCount,
          name: item.name
        }
      })

      return { ...categoryCount }
    })

    const goodsCountRoseOption = computed(() => {
      const goodsCountList = store.state.analysis.goodsCountList
      categoryCountRose.series[0].data = goodsCountList.map((item: any) => {
        return {
          value: item.goodsCount,
          name: item.name
        }
      })

      return { ...categoryCountRose }
    })

    const goodsAdressListOption = computed(() => {
      const goodsAdressList = store.state.analysis.goodsAdressList
      chanaMap.series[0].data = goodsAdressList.map((item: any) => {
        return {
          value: item.count,
          name: item.address
        }
      })

      return { ...chanaMap }
    })

    const goodsSalesListOption = computed(() => {
      const goodsSalesList = store.state.analysis.goodsSalesList
      categorySale.xAxis.data = goodsSalesList.map((item: any) => {
        return item.name
      })
      categorySale.series[0].data = goodsSalesList.map((item: any) => {
        return item.goodsCount
      })
      return { ...categorySale }
    })
    const goodsCollectionListOption = computed(() => {
      const goodsCollectionList = store.state.analysis.goodsCollectionList
      categoryCollection.xAxis.data = goodsCollectionList.map((item: any) => {
        return item.name
      })
      categoryCollection.series[0].data = goodsCollectionList.map(
        (item: any) => {
          return item.goodsFavor
        }
      )
      return { ...categoryCollection }
    })

    return {
      amountList,
      goodsCountListOption,
      goodsCountRoseOption,
      goodsAdressListOption,
      goodsSalesListOption,
      goodsCollectionListOption
    }
  }
})
</script>

<style lang="less" scoped>
.figure {
  margin-top: 15px;
}
</style>
