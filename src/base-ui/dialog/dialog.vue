<template>
  <div class="dialog">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%">
      <pc-form
        :idArr="idArr"
        :name="name"
        ref="formRef"
        :searchConfig="type === 'edit' ? newConfigNoPassword : newConfig"
        :formDataResult="formDataResult"
      >
        <span></span>
      </pc-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleChange">确定</el-button>
        </span>
      </template>

      <div class="role">
        <slot name="role"> </slot>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import PcForm from '../form/form.vue'

export default defineComponent({
  props: {
    formDataResult: {
      type: Object,
      default: () => {
        return {}
      }
    },
    name: {
      type: String
    },
    type: {
      type: String,
      default: ''
    },
    isShowDialog: {
      type: Boolean,
      default: false
    },
    newConfig: {
      type: Object,
      default: () => {
        return {}
      }
    },
    searchConfig: {
      type: Object,
      default: () => {
        return {}
      }
    },
    idArr: {
      type: Array as PropType<number[]>,
      default: () => {
        return []
      }
    }
  },
  components: {
    PcForm
  },
  setup(prop) {
    const dialogVisible = ref(false)
    const formRef = ref<InstanceType<typeof PcForm>>()

    const formItem = prop.newConfig.formItem.filter((item: any) => {
      return item.prop !== 'password'
    })
    const newConfigNoPassword = { ...prop.newConfig }
    newConfigNoPassword.formItem = formItem
    const handleChange = () => {
      dialogVisible.value = false

      //判断点击类型，新建或者是修改
      if (prop.type === 'new') {
        formRef.value?.handleNewInfo()
      } else if (prop.type == 'edit') {
        formRef.value?.handleEditInfo()
      }
    }

    return {
      dialogVisible,
      handleChange,
      formRef,
      newConfigNoPassword
    }
  }
})
</script>

<style lang="less">
.dialog {
  .el-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    .el-form-item {
      margin: 0;
    }
  }
}
.role {
  width: 90%;
  margin: 10px auto;
}
</style>
