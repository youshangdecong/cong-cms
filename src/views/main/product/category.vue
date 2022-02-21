<template>
  <div class="user">
    <pc-form name="category" :searchConfig="searchConfig" />
    <pc-table
      tableTitle="类别列表"
      :userlist="userlist"
      @isShowDialog="isShowDialog"
      @deleteInfo="deleteInfo"
      :tableConfig="tableConfig"
    />
    <pc-dialog
      name="category"
      :newConfig="modelConfig"
      ref="dialogRef"
      :type="changeType"
      :formDataResult="formDataResult"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { PcForm, PcTable, PcDialog } from '@/base-ui/src'
import { searchConfig, tableConfig, newConfig } from './config/category/src'

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
    const userlist = computed(() => {
      return store.state.system.categoryList
    })

    store.dispatch('system/getListAction', {
      data: { offset: 0, size: 10 },
      name: 'category'
    })

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

    //控制PcDialog的显示
    const changeType = ref('')
    let formDataResult = ref({})
    const dialogRef = ref<InstanceType<typeof PcDialog>>()
    const isShowDialog = (playload: any) => {
      const { type, formData } = playload
      if (dialogRef.value) {
        dialogRef.value.dialogVisible = true
        changeType.value = type
        formDataResult.value = formData
      }
    }

    //删除用户信息
    const deleteInfo = (id: number) => {
      store.dispatch('system/deleteUserAction', {
        id: id,
        name: 'user'
      })
    }

    return {
      searchConfig,
      tableConfig,
      modelConfig,
      userlist,
      isShowDialog,
      deleteInfo,
      dialogRef,
      changeType,
      formDataResult
    }
  }
})
</script>

<style lang="less"></style>
