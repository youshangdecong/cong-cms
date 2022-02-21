<template>
  <div>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <button>按钮</button>
    <el-button type="primary">Primary</el-button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {}
})
</script>

<style scoped lang="less">
// import 'element-plus/dist/index.css'
@import url('../node_modules/element-plus/dist/index.css');
</style>
