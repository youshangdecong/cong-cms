<template>
  <div class="user">
    <pc-form name="department" :searchConfig="searchConfig" />
    <pc-table
      tableTitle="部门列表"
      :userlist="departmentlist"
      @isShowDialog="isShowDialog"
      @deleteInfo="deleteInfo"
      :tableConfig="tableConfig"
      @changePages="changePages"
      name="department"
    />
    <pc-dialog
      name="department"
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
import { searchConfig, tableConfig, newConfig } from './config/department/src'

import { useStore } from '@/store'
import { getlist } from '@/utils/getlist'
import { useList } from '@/hook/useList'

// import { useStore } from 'vuex'
export default defineComponent({
  components: {
    PcForm,
    PcTable,
    PcDialog
  },
  setup() {
    const {
      isShowDialog,
      deleteInfo,
      changePages,
      changeType,
      formDataResult,
      dialogRef
    } = useList('department')

    const store = useStore()
    const departmentlist = computed(() => {
      return store.state.system.department
    })

    //获取和所有的部门
    store.dispatch('system/getListAction', {
      name: 'department'
    })
    const modelConfig = computed(() => {
      const departmentlist = store.state.system.department
      const department = getlist(departmentlist)

      const formItem = newConfig.formItem.map((item) => {
        if (item.prop === 'parentId') {
          item.options = department
          return item
        } else return item
      })
      newConfig.formItem = formItem
      return newConfig
    })

    return {
      searchConfig,
      tableConfig,
      modelConfig,
      departmentlist,
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
