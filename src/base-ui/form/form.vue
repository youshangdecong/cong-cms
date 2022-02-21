<template>
  <div class="form">
    <h3 v-if="title">{{ title }}</h3>
    <el-form :inline="true" class="demo-form-inline" v-model="formData">
      <el-row>
        <template v-for="item in searchConfig.formItem" :key="item.label">
          <el-col v-bind="searchConfig.styleLayout">
            <el-form-item
              :label="item.label"
              :label-width="searchConfig.labalWidth"
            >
              <template v-if="item.type === 'text' || item.type === 'password'">
                <el-input
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  :label="item.label"
                  :class="item.type === 'password' && 'show-password'"
                >
                </el-input>
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  :label="item.label"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  >
                  </el-option>
                </el-select>
              </template>

              <template v-else-if="item.type === 'date'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  :style="{ width: '100%' }"
                  type="daterange"
                  v-bind="item.otherOptions"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>

        <slot>
          <div class="footer">
            <div class="change">
              <div class="reset" @click="reset">
                <el-button>
                  <el-icon><RefreshRight /></el-icon>

                  重置</el-button
                >
              </div>
              <div class="submit" @click="getFormData">
                <el-button type="primary">
                  <el-icon><Check /></el-icon>
                  提交</el-button
                >
              </div>
            </div>
          </div>
        </slot>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import type { PropType } from 'vue'
import type { IsearchConfig } from './type'
import { Check, RefreshRight } from '@element-plus/icons-vue'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    formDataResult: {
      type: Object,
      default: () => {
        return {}
      }
    },
    searchConfig: {
      type: Object as PropType<IsearchConfig>,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    idArr: {
      type: Array as PropType<number[]>,
      default: () => {
        return []
      }
    }
  },
  components: {
    Check,
    RefreshRight
  },
  setup(props) {
    const formData: any = ref({})

    props.searchConfig.formItem.forEach((item: any) => {
      formData.value[item.prop] = ''
    })
    watch(
      () => props.formDataResult,
      (value: any) => {
        for (const key in formData.value) {
          formData.value[key] = value[key]
        }
      },
      {
        immediate: true
      }
    )

    const store = useStore()
    const reset = () => {
      for (const key in formData.value) {
        formData.value[key] = ''
      }
      store.dispatch('system/getListAction', {
        data: formData.value,
        name: props.name
      })
    }
    const getFormData = () => {
      store.dispatch('system/getListAction', {
        data: formData.value,
        name: props.name
      })
    }
    const handleNewInfo = () => {
      if (props.idArr.length > 0) {
        formData.value = { ...formData.value, menuList: [...props.idArr] }
      }
      store.dispatch('system/newUserAction', {
        name: props.name,
        formData: formData.value
      })
    }
    const handleEditInfo = () => {
      if (props.idArr.length > 0) {
        formData.value = { ...formData.value, menuList: [...props.idArr] }
      }
      const id = props.formDataResult?.id
      store.dispatch('system/editUserAction', {
        name: props.name,
        id,
        formData: formData.value
      })
    }
    return {
      formData,
      getFormData,
      reset,
      handleNewInfo,
      handleEditInfo
    }
  }
})
</script>

<style lang="less">
.form {
  padding-top: 15px;
  background-color: #fff;
  h3 {
    text-align: center;
    font-size: 24px;
    padding: 40px 0 20px;
    .el-form-item {
      text-align: right;
    }
  }
  .el-form-item {
    padding: 10px 30px;
    margin-right: 0;
    display: flex;
    .el-input {
      flex: 1;
    }
    .el-select {
      width: 100%;
    }
  }
  .footer {
    width: 100%;
    padding-bottom: 30px;
    .change {
      margin-right: 30px;
      float: right;
      .reset,
      .submit {
        float: left;
        margin-right: 20px;
      }
    }
  }
}
</style>
