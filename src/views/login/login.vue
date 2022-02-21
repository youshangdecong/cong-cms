<template>
  <div id="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './loginChild/login-panel.vue'
export default defineComponent({
  components: {
    LoginPanel
  }
})
</script>

<style lang="less">
#login {
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg') repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
