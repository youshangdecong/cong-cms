<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <div v-if="!collapse" class="title">VUE3+TS</div>
    </div>
    <el-menu
      :collapse="collapse"
      :default-active="menuId"
      class="el-menu-vertical-demo"
    >
      <template v-for="menuItem in userMenus">
        <template v-if="menuItem.type === 1">
          <el-sub-menu :key="menuItem.id" :index="menuItem.id + ''">
            <template #title>
              <!-- <el-icon><location /></el-icon> -->
              <el-icon>
                <Monitor />
              </el-icon>
              <span>{{ menuItem.name }}</span>
            </template>

            <template v-for="item in menuItem.children">
              <el-sub-menu
                v-if="
                  item.children?.length > 0 && item.children?.some((i) => i.url)
                "
                :key="item.id"
              >
                <template #title>
                  <span>{{ item.name }}</span>
                </template>

                <el-menu-item
                  name="menu"
                  @click="menuNav(item)"
                  v-for="itemI in item.children"
                  :key="itemI.id"
                  :index="itemI.id + ''"
                >
                  {{ itemI.name }}
                </el-menu-item>
              </el-sub-menu>

              <el-menu-item
                v-else
                @click="menuNav(item)"
                :key="item.id"
                :index="item.id + ''"
                :class="item.id == menuId ? 'activeStyle' : ''"
              >
                {{ item.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="menuItem.type === 2">
          <el-menu-item :key="menuItem.id" :index="menuItem.id + ''">
            {{ menuItem.name }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
// import { routerMenu } from '@/utils/routerMenu'
import { Monitor } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { getMenuInfo } from '@/utils/routerMenu'
// import { getBreadcrumbList } from '@/utils/routerMenu'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Monitor
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    // watch(prpps, (value) => {
    //   console.log(value)
    // })

    const userMenus = computed(() => {
      return store.state.login.userMenus
    })

    // routerMenu(userMenus)
    // let BreadcrumbList: any

    let menuId = computed(() => {
      const routePath = useRoute().path

      return getMenuInfo(routePath, userMenus.value, 'id')
    })
    const menuNav = (navItem: any) => {
      // emit('breadcrumbFn', BreadcrumbList)
      // const route = useRoute()
      // console.log(route)

      // debugger

      // const routePath = useRoute().path
      // console.log(routePath)

      // menuId.value = getMenuInfo(routePath, userMenus.value, 'id')

      router.push({
        path: navItem.url
      })
    }
    return {
      userMenus,
      menuNav,
      menuId
      // BreadcrumbList
    }
  }
})
</script>

<style lang="less">
.nav-menu {
  height: 100%;
  ul {
    background-color: rgba(0, 0, 0, 0.5);

    .el-sub-menu__title,
    .el-menu-item {
      color: #ccc;
    }
  }

  .logo {
    height: 45px;
    display: flex;
    align-items: center;

    img {
      height: 25px;
      width: 25px;
      margin-left: 20px;
      margin-right: 15px;
    }
    .title {
      color: #fff;
      font-size: 16px;
    }
  }
}
.activeStyle {
  background-color: #0a60bd !important;
}

.el-sub-menu__title:hover {
  background-color: rgba(0, 0, 0, 0.5) !important;
  color: #fff !important;
}
.el-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.5) !important;
  color: #fff !important;
}
</style>
