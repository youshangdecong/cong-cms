<template>
  <el-container class="main">
    <el-aside class="aside-menu" :width="collapse ? '60px' : '210px'">
      <nav-menu @breadcrumbFn="breadcrumbFn" :collapse="collapse"></nav-menu>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header @menuIsCollapse="menuIsCollapse"></nav-header>
      </el-header>
      <el-main class="main-content">
        <div class="page-content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import NavMenu from '@/components/nav-menu/navMenu.vue'
import NavHeader from '@/components/nav-header/navHeader.vue'
export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    let collapse = ref(false)
    let menuBreadcrumbList: Ref<any[]> = ref([])
    const menuIsCollapse = (isCollapse: Ref<boolean>) => {
      collapse.value = isCollapse.value
    }
    return {
      menuIsCollapse,
      collapse,
      menuBreadcrumbList
    }
  }
})
</script>

<style lang="less">
.main {
  height: 100%;
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -o-transition: width 0.25s;
  .aside-menu {
    background-color: #001529;
    height: 100%;
    // overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
    // width: 210px;
    transition: width 0.3s 0s linear;
    &::-webkit-scrollbar {
      display: none !important; /* Chrome Safari */
    }
  }
  .main-content {
    background: #eee;
  }
}
</style>
