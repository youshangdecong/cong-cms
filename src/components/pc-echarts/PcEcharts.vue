<template>
  <div class="pc-echarts">
    <pc-card :title="title">
      <template #bd>
        <echarts :option="option" :idName="idName">
          <template #default>
            <div
              :id="idName"
              :style="{ width: '100%', height: echactsHeight + 'px' }"
            ></div>
          </template>
        </echarts>
      </template>
    </pc-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PcCard, Echarts } from '@/base-ui/src'
export default defineComponent({
  components: {
    PcCard,
    Echarts
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    echactsHeight: {
      type: Number,
      default: 360
    },
    option: {
      type: Object,
      default: () => ({})
    },
    idName: {
      type: String
    }
  }
})
</script>

<style lang="less">
.pc-echarts {
  .title {
    font-weight: 400;
  }
}
</style>
