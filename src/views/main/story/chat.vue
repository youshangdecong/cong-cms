<template>
  <div id="edit"></div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import E from 'wangeditor'
export default defineComponent({
  components: {},
  setup() {
    nextTick(() => {
      const editor = new E('#edit')
      editor.create()
    })
  }
})
</script>

<style lang="less">
#edit {
  .w-e-text-container {
    height: 500px !important;
  }
}
</style>
