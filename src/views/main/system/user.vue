<template>
  <div class="user">
    <pc-form name="users" :searchConfig="searchConfig" />
    <pc-table
      tableTitle="用户列表"
      :userlist="userlist"
      @isShowDialog="isShowDialog"
      @deleteInfo="deleteInfo"
      @changePages="changePages"
      :TotalCount="TotalCount"
      :tableConfig="tableConfig"
    />
    <pc-dialog
      name="users"
      :newConfig="modelConfig"
      ref="dialogRef"
      :type="changeType"
      :formDataResult="formDataResult"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { PcForm, PcTable, PcDialog } from '@/base-ui/src'
import { searchConfig, tableConfig, newConfig } from './config/user/src'

import { useList } from '@/hook/useList'
import { useStore } from '@/store'
import { getlist } from '@/utils/getlist'
// import { useStore } from 'vuex'
export default defineComponent({
  components: {
    PcForm,
    PcTable,
    PcDialog
  },
  setup() {
    const store = useStore()
    const {
      isShowDialog,
      deleteInfo,
      changePages,
      changeType,
      formDataResult,
      dialogRef
    } = useList('users')

    const userlist = computed(() => {
      return store.state.system.userList
    })
    const TotalCount = computed(() => {
      return store.state.system.userListTotalCount
    })
    // store.dispatch('system/getListAction', {
    //   data: { offset: 0, size: 10 },
    //   name: 'users'
    // })

    //获取所有的角色和所有的部门
    store.dispatch('system/getListAction', {
      data: { offset: 0, size: 10 },
      name: 'role'
    })
    store.dispatch('system/getListAction', {
      data: { offset: 0, size: 10 },
      name: 'department'
    })
    const modelConfig = computed(() => {
      const rolelist = store.state.system.roleList
      const departmentlist = store.state.system.department

      const role = getlist(rolelist)
      const department = getlist(departmentlist)

      const formItem = newConfig.formItem.map((item) => {
        if (item.prop === 'roleId') {
          item.options = role
          return item
        } else if (item.prop === 'departmentId') {
          item.options = department
          return item
        } else return item
      })
      newConfig.formItem = formItem
      return newConfig
    })

    // //控制PcDialog的显示
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

    // //删除用户信息
    // const deleteInfo = (id: number) => {
    //   store.dispatch('system/deleteUserAction', {
    //     id: id,
    //     name: 'user'
    //   })
    // }

    // // 监听分页的改变
    // const changePages = (pages: number) => {
    //   store.dispatch('system/getListAction', {
    //     data: { offset: 0, size: pages },
    //     name: 'users'
    //   })
    // }

    return {
      searchConfig,
      tableConfig,
      modelConfig,
      TotalCount,
      userlist,
      isShowDialog,
      deleteInfo,
      dialogRef,
      changeType,
      formDataResult,
      changePages
    }
  }
})
</script>

<style lang="less"></style>
