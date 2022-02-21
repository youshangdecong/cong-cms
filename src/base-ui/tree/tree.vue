<template>
  <div class="tree">
    <pre>
      <code class="language-html" >
        <div class="tree-content" v-html="directoryTree"></div>
      </code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},
  props: {
    directoryTree: {
      type: String
    }
  }
})
</script>

<style lang="less">
.tree {
  .tree-content {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 8px;
  }
}
</style>
