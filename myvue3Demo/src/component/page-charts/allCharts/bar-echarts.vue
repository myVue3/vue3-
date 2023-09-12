<template>
  <div class="line-echarts">
    <HyEcharts :options="options"/>
  </div>
</template>

<script setup>
import HyEcharts from "../../../base-ui/HyEcharts/HyEcharts.vue";
import {computed} from "vue";

const props = defineProps({
  count: {
    type: Array,
    default: () => []
  },
  city: {
    type: Array,
    default: () => []
  }
})
const options = computed(() => {
  return {
    xAxis: {
      type: 'category',
      data: props.city
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.count,
        type: 'bar'
      }
    ]
  }
})
</script>

<style scoped>

</style>