<template>
  <div class="link">
    <template v-for="item in linkList" :key="item.key">
      <div class="link-content">
        <span>{{ item.key }}</span
        >：
        <el-link type="primary">{{ item.value }}</el-link>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},
  props: {
    linkList: Array,
    default: () => []
  }
})
</script>

<style lang="less" scope>
.link-content {
  height: 23px;
  line-height: 23px;
}
.link-content::before {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: black;
  vertical-align: middle;
  margin: 0 10px;
  position: relative;
  top: -1px;
}
</style>
