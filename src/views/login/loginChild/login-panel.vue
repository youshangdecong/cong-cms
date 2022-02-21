<template>
  <div class="pannel" @keyup.enter="enter">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" stretch v-model="editableTabsValue">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><avatar class="i" /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><iphone class="i" /></el-icon>手机登录
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="about-password">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button @click="loginUp" class="login-up" type="primary"
      >点击登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { Avatar, Iphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Avatar,
    Iphone,
    LoginAccount,
    LoginPhone
  },
  setup() {
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const isKeepPassword = ref(true)

    const loginUp = () => {
      if (editableTabsValue.value === 'account') {
        // console.log(accountRef.value, '111')

        if (accountRef.value) {
          console.log(accountRef.value)

          accountRef.value?.validateAccount(isKeepPassword?.value)
        }

        // console.log(route)

        // route.reaplace('/main')
      } else if (editableTabsValue.value === 'phone') {
        console.log('phone')
      }
    }
    const enter = () => {
      loginUp()
    }
    const editableTabsValue = ref('account')

    return {
      loginUp,
      accountRef,
      isKeepPassword,
      enter,
      editableTabsValue
    }
  }
})
</script>

<style lang="less" scoped>
.pannel {
  width: 320px;

  .title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 28px;
  }
  .i {
    position: relative;
    top: 2px;
    left: -2px;
  }
  .about-password {
    display: flex;
    justify-content: space-between;
  }
  .login-up {
    width: 100%;
  }
}
</style>
