<template>
  <div class="user">
    <pc-table
      :userlist="userlist"
      @isShowDialog="isShowDialog"
      @deleteInfo="deleteInfo"
      :tableConfig="tableConfig"
      tableTitle="故事列表"
    >
      <span></span>
    </pc-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PcTable } from '@/base-ui/src'
import { tableConfig } from './config/list/tableConfig'

// import { useStore } from 'vuex'
export default defineComponent({
  components: {
    PcTable
  },
  setup() {
    return {
      tableConfig
    }
  }
})
</script>

<style lang="less"></style>
