<template>
  <div class="pie-charts">
    <HyEcharts :options="options"/>
  </div>
</template>

<script setup>
import HyEcharts from "../../../base-ui/HyEcharts/HyEcharts.vue";
import {computed} from "vue";

const props = defineProps({
  pieData:{
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
        radius: '50%',
        data: props.pieData,
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