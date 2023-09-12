<template>
  <div class="HyEcharts">
    <div ref="myEcharts" :style="{height: height,width: width}"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import {ref, onMounted, watchEffect} from 'vue'
const myEcharts = ref()

const props = defineProps({
  width:{
    default:() => "100%"
  },
  height:{
    default:() => "360px"
  },
  options:{
    type:Object
  }
})
//不能直接在setup写，因为此时节点还未挂载
onMounted(() => {
  const myEchartsInterface = echarts.init(myEcharts.value)
 //数据变化后重新挂载
  watchEffect(() => {
    myEchartsInterface.setOption(props.options);
  })
  //echarts图标自适应方法
  window.addEventListener('resize',() => {
    myEchartsInterface.resize()
  })
})
</script>

<style scoped>

</style>