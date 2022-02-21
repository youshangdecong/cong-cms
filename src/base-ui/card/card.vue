<template>
  <div class="card">
    <el-card class="box-card">
      <template #header>
        <div v-if="title" class="title">{{ title }}</div>
        <slot v-else name="hd"></slot>
      </template>
      <slot name="bd"></slot>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="less">
.card {
  .title {
    font-weight: 700;
  }
}
.el-card__body {
  padding: 10px 20px;
}
</style>
