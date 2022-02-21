<template>
  <div class="nav-header">
    <div class="header-left">
      <el-icon :style="{ fontSize: '40px' }">
        <component :is="isCollapse" @click="isCollapseFn"></component>
      </el-icon>
      <div :style="{ marginLeft: '20px' }">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/main' }">{{
            breadcrum.breadCroumb
          }}</el-breadcrumb-item>

          <el-breadcrumb-item
            v-for="item in breadcrum.newBreadCroumbItem"
            :key="item"
          >
            {{ item }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="header-right">
      <el-avatar :size="30" :src="url"></el-avatar>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ name }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="exitLogin">退出登录</el-dropdown-item>
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item>系统管理</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed } from 'vue'
import { Fold, Expand, ArrowDown, ArrowRight } from '@element-plus/icons-vue'
import { useStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import { getBreadcrumbList, getMenuInfo } from '@/utils/routerMenu'
import { pccatch } from '@/utils/catch'
export default defineComponent({
  components: {
    Fold,
    Expand,
    ArrowDown,
    ArrowRight
  },
  setup(props, { emit }) {
    const isCollapse: Ref<string> = ref('Expand')
    const router = useRouter()
    const store = useStore()
    let flag = ref(false)
    const isCollapseFn = () => {
      flag.value = !flag.value
      if (flag.value) {
        isCollapse.value = 'Fold'
      } else {
        isCollapse.value = 'Expand'
      }
      emit('menuIsCollapse', flag)
    }
    const url =
      'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    const name = computed(() => {
      return store.state.login.userInfo.name
    })

    const breadcrum = computed(() => {
      const urlpath = useRoute().path

      // console.log('--------------')
      const userMenus = store.state.login.userMenus

      const navItemName = getMenuInfo(urlpath, userMenus, 'name')

      const allBreadcrumbList = getBreadcrumbList(userMenus)

      const BreadcrumbList = allBreadcrumbList.find((item) => {
        let flag = false
        item.newBreadCroumbItem.forEach((breadItem: any) => {
          if (breadItem === navItemName) {
            // console.log()

            flag = true
          }
        })
        if (flag) {
          return true
        }
      })

      return BreadcrumbList
    })

    const exitLogin = () => {
      pccatch.clearCatch()
      router.replace('/login')
    }
    return {
      isCollapse,
      isCollapseFn,
      url,
      name,
      breadcrum,
      exitLogin
    }
  }
})
</script>

<style lang="less">
.nav-header {
  display: flex;
  justify-content: space-between;

  .header-left {
    height: 60px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .header-right {
    display: flex;
    align-items: center;
    cursor: pointer;
    line-height: 60px;
    padding-right: 20px;
    .el-icon--right {
      position: relative;
      top: 4px;
    }
    .el-avatar {
      margin-right: 7px;
    }
  }
}
</style>
