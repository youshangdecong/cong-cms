<template>
  <div class="user">
    <pc-table
      tableTitle="菜单列表"
      isexpand="true"
      :userlist="userlist"
      @isShowDialog="isShowDialog"
      @deleteInfo="deleteInfo"
      :tableConfig="tableConfig"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { PcTable } from '@/base-ui/src'
import { tableConfig } from './config/menu/src'

import { useStore } from '@/store'
// import { useStore } from 'vuex'
export default defineComponent({
  components: {
    PcTable
  },
  setup() {
    const store = useStore()
    const userlist = computed(() => {
      return store.state.system.menuList
    })

    store.dispatch('system/getListAction', {
      data: { offset: 0, size: 10 },
      name: 'menu'
    })

    //获取所有的角色和所有的部门
    //控制PcDialog的显示
    // const changeType = ref('')
    // let formDataResult = ref({})
    // const dialogRef = ref<InstanceType<typeof PcDialog>>()
    // const isShowDialog = (playload: any) => {
    //   const { type, formData } = playload
    //   if (dialogRef.value) {
    //     dialogRef.value.dialogVisible = true
    //     changeType.value = type
    //     formDataResult.value = formData
    //   }
    // }

    //删除用户信息
    // const deleteInfo = (id: number) => {
    //   store.dispatch('system/deleteUserAction', {
    //     id: id,
    //     name: 'user'
    //   })
    // }

    return {
      tableConfig,
      userlist
    }
  }
})
</script>

<style lang="less"></style>
