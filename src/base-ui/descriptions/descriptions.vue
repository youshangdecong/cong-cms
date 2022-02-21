<template>
  <div class="descriptions">
    <el-descriptions class="margin-top" :title="title" :column="cloumn" border>
      <template v-for="(value, key) in dependencies" :key="key">
        <el-descriptions-item :label="key" :width="cloumn === 1 ? '100%' : ''">
          <el-button color="#626aef" size="small" plain> {{ value }}</el-button>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},
  props: {
    dependencies: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ''
    },
    cloumn: {
      type: Number,
      default: 2
    }
  }
})
</script>

<style lang="less">
.el-descriptions__table.is-bordered {
  tr {
    display: flex;
    td {
      width: 25%;
    }
  }
}
.el-descriptions__title {
  font-weight: 400;
}
</style>
