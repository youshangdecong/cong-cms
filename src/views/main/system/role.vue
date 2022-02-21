<template>
  <div class="user">
    <pc-form name="role" :searchConfig="searchConfig" />
    <pc-table
      tableTitle="角色列表"
      :userlist="userlist"
      @isShowDialog="isShowDialog"
      @deleteInfo="deleteInfo"
      @changePages="changePages"
      :tableConfig="tableConfig"
      :TotalCount="TotalCount"
    />
    <pc-dialog
      name="role"
      :newConfig="newConfig"
      ref="dialogRef"
      :type="changeType"
      :formDataResult="formDataResult"
      :idArr="idArr"
    >
      <template #role>
        <el-tree
          ref="treeRef"
          :data="getRoleTree"
          show-checkbox
          node-key="id"
          :props="defaultProps"
          @check-change="handleRole"
          :default-checked-keys="defaultSelect"
        />
      </template>
    </pc-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

import { PcForm, PcTable, PcDialog } from '@/base-ui/src'
import { searchConfig, tableConfig, newConfig } from './config/role/src'

import { ElTree } from 'element-plus'
import { getTreeRole, getIds } from '@/utils/getTree'
import { useStore } from '@/store'
import { useList } from '@/hook/useList'
// import { useStore } from 'vuex'
export default defineComponent({
  components: {
    PcForm,
    PcTable,
    PcDialog
  },
  setup() {
    const store = useStore()
    const { deleteInfo, changePages } = useList('role')

    const userlist = computed(() => {
      return store.state.system.roleList
    })
    const TotalCount = computed(() => {
      return store.state.system.roleListTotalCount
    })

    //控制PcDialog的显示
    const changeType = ref('')
    let formDataResult = ref({})
    const dialogRef = ref<InstanceType<typeof PcDialog>>()
    const isShowDialog = (playload: any) => {
      const { type, formData = {} } = playload
      console.log(type)
      if (type == 'new') {
        defaultSelect.value = []
        treeRef.value?.setCheckedKeys([], false)
      }

      const menuList = formData.menuList
      if (menuList) {
        const result = getIds(menuList)
        defaultSelect.value = result
        treeRef.value?.setCheckedKeys(result, false)
      }
      if (dialogRef.value) {
        dialogRef.value.dialogVisible = true
        changeType.value = type
        formDataResult.value = formData
      }
    }
    const getRoleTree = computed(() => {
      const menuList = store.state.system.menuList || []

      if (menuList.length <= 0) {
        store.dispatch('system/getListAction', {
          data: { offset: 0, size: 10 },
          name: 'menu'
        })
      }
      const result = getTreeRole(menuList)
      return result
    })

    // //删除用户信息
    // const deleteInfo = (id: number) => {
    //   store.dispatch('system/deleteUserAction', {
    //     id: id,
    //     name: 'role'
    //   })
    // }

    const defaultProps = {
      children: 'children',
      label: 'label'
    }
    const defaultSelect = ref()

    const treeRef = ref<InstanceType<typeof ElTree>>()

    let idArr = ref()
    const handleRole = () => {
      if (treeRef.value) {
        idArr.value = treeRef.value
          ?.getCheckedNodes(false, true)
          .map((item) => {
            return item.id
          })
      }
    }

    return {
      searchConfig,
      tableConfig,
      newConfig,
      userlist,
      isShowDialog,
      deleteInfo,
      dialogRef,
      changeType,
      formDataResult,
      getRoleTree,
      defaultProps,
      handleRole,
      treeRef,
      idArr,
      defaultSelect,
      changePages,
      TotalCount
    }
  }
})
</script>

<style lang="less"></style>
