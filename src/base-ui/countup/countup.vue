<template>
  <span id="number" ref="numberRef">
    {{ number }}
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { CountUp } from 'countup.js'
export default defineComponent({
  components: {},
  props: {
    number: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const numberRef = ref()

    onMounted(() => {
      const countUp = new CountUp(numberRef.value, props.number)
      if (!countUp.error) {
        countUp.start()
      } else {
        console.error(countUp.error)
      }
    })

    return {
      numberRef
    }
  }
})
</script>

<style lang="less"></style>
