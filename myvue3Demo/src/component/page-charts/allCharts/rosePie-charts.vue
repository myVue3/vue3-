<template>
  <div class="rosePie-charts">
    <HyEcharts :options="options"/>
  </div>
</template>

<script setup>
import HyEcharts from "../../../base-ui/HyEcharts/HyEcharts.vue";
import {computed} from "vue";

const props = defineProps({
  roseData:{
    type:Array,
    default:() => []
  }
})
const options = computed(() => {
  return{
    tooltip: {},
    legend:{},
    series: [
      {
        type: 'pie',
        radius: [10, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
})
</script>

<style scoped>

</style>