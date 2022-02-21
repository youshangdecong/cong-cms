<template>
  <div class="overview">
    <pc-card title="关于">
      <template #bd>
        <div :style="{ paddingBottom: '15px' }">
          Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
          、TypeScript、Echart5 等后台系统解决方案
        </div>
      </template>
    </pc-card>
    <pc-card title="技术栈" class="space-top">
      <template #bd>
        <pc-link :style="{ margin: '20px 0' }" :linkList="linkList"></pc-link>

        <pc-descriptions
          title="生产环境依赖"
          :dependencies="dependencies"
          class="space-top"
        />

        <pc-descriptions
          title="开发环境依赖"
          :dependencies="devDependencies"
          class="space-top"
        />
      </template>
    </pc-card>

    <pc-card title="项目结构" class="space-top">
      <template #bd>
        <pc-tree :directoryTree="directoryTree"></pc-tree>
      </template>
    </pc-card>

    <pc-card title="项目规范" class="offfsetTop">
      <template #bd>
        <pc-descriptions
          title="文件命名规范"
          :dependencies="fileNameRules"
          class="space-top"
          :cloumn="1"
        />
      </template>
    </pc-card>
    <pc-card title="编写规范" class="offfsetTop">
      <template #bd>
        <pc-descriptions
          title="文件命名规范"
          :dependencies="writeRules"
          class="space-top"
          :cloumn="1"
        />
      </template>
    </pc-card>
    <pc-card title="提交规范" class="offfsetTop">
      <template #bd>
        <pc-descriptions
          title="文件命名规范"
          :dependencies="submitRules"
          class="space-top"
          :cloumn="1"
        />
      </template>
    </pc-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PcCard, PcLink, PcDescriptions, PcTree } from '@/base-ui/src'
import {
  linkList,
  directoryTree,
  writeRules,
  submitRules
} from './config/overview/src'
const packageConfig = require('../../../../package.json')
export default defineComponent({
  components: {
    PcCard,
    PcLink,
    PcDescriptions,
    PcTree
  },
  setup() {
    const dependencies = packageConfig.dependencies
    const devDependencies = packageConfig.devDependencies

    const fileNameRules = {
      文件夹: '统一小写,多个单词用-分割',
      '文件(.ts .vue .json .d.ts)': '统一小写, 多个单词使用-分割'
    }
    return {
      linkList,
      dependencies,
      devDependencies,
      directoryTree,
      fileNameRules,
      writeRules,
      submitRules
    }
  }
})
</script>

<style lang="less">
.space-top {
  margin-top: 20px;

  .el-card__body {
    padding-top: 0;
  }
}
.offfsetTop {
  margin-top: 20px;
}
</style>
