<template>
  <div class="count-card">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="24 / count">
          <pc-card>
            <template #hd>
              <div class="title">
                <div>{{ item.subtitle }}</div>
                <div class="prpover">
                  <el-tooltip
                    :content="item.tips"
                    placement="top"
                    effect="light"
                  >
                    <el-icon>
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </div>
              <div class="count">
                <pc-countup :number="item.number1" />
              </div>
            </template>
            <template #bd>
              <div class="bd">
                {{ item.title }}
                <pc-countup :number="item.number1" />
              </div>
            </template>
          </pc-card>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PcCard, PcCountup } from '@/base-ui/src'
import { Warning } from '@element-plus/icons-vue'
import { formDataNumber } from '@/utils/formDataNumber'
import { getCurrentInstance } from 'vue'

export default defineComponent({
  props: {
    amountList: {
      type: Array,
      default: () => []
    },
    count: {
      type: Number,
      default: 6
    }
  },
  components: {
    PcCard,
    PcCountup,
    Warning
  },
  setup() {
    console.log(getCurrentInstance(), '---')

    return {
      formDataNumber
    }
  }
})
</script>

<style lang="less" scoped>
.title {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 14px;
}
.count {
  font-size: 26px;
  position: relative;
  top: 10px;
}
.bd {
  font-size: 14px;
}
</style>
