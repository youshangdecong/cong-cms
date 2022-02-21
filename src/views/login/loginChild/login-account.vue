<template>
  <div class="account">
    <el-form :model="userInfo" :rules="rules" ref="elForm">
      <el-form-item label="账号" label-width="60px" prop="name">
        <el-input v-model="userInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="60px" prop="password">
        <el-input v-model="userInfo.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'

import { defineComponent, reactive, ref } from 'vue'
import { pccatch } from '@/utils/catch'
import { useStore } from 'vuex'
import { rules } from './account.config'
export default defineComponent({
  components: {},
  setup() {
    const name = pccatch.getCatch('name')
    const password = pccatch.getCatch('password')
    const userInfo = reactive({
      name: name ?? '',
      password: password ?? ''
    })
    const elForm = ref<InstanceType<typeof ElForm>>()
    const store = useStore()

    const validateAccount = (isKeepPassword: boolean) => {
      elForm.value?.validate((isvalidate) => {
        if (isvalidate) {
          // 1.是否记住密码
          if (isKeepPassword) {
            console.log(isKeepPassword)

            pccatch.setCatch('name', userInfo.name)
            pccatch.setCatch('password', userInfo.password)
          } else {
            console.log('asdasd')

            pccatch.deleteCacth('name')
            pccatch.deleteCacth('password')
          }

          // 2.发送请求获取token
          store.dispatch('login/actionAccountLogin', { ...userInfo })

          //
        }
      })
    }

    return {
      userInfo,
      rules,
      validateAccount,
      elForm
    }
  }
})
</script>

<style lang="less"></style>
