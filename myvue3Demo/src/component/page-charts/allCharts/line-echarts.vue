<template>
  <div class="line-echarts">
    <HyEcharts :options="options"/>
  </div>
</template>

<script setup>
import HyEcharts from "../../../base-ui/HyEcharts/HyEcharts.vue";
import {computed} from "vue";

const props = defineProps({
  lineData: {
    type: Array,
    default: () => []
  },
  lineXData:{
    type: Array,
    default: () => []
  }
})
const options = computed(() => {
  return {
    tooltip:{
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.lineXData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.lineData,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<style scoped>

</style>