<template>
  <div class="dashboard">
    <el-row :gutter=20>
      <el-col :span="7">
        <HyCard title="分类商品数量">
          <PieCharts :pieData="pieData"/>
        </HyCard>
      </el-col>
      <el-col :span="10">
        <HyCard title="不同城市商品销量">
          <BarEcharts v-bind="addressData"/>
        </HyCard>
      </el-col>
      <el-col :span="7">
        <HyCard title="分类商品数量(玫瑰图)">
          <RosePieCharts :roseData="pieData"/>
        </HyCard>
      </el-col>
    </el-row>
    <el-row :gutter=20 style="margin-top: 20px">
      <el-col :span="12">
        <HyCard title="分类商品销量">
          <LineEcharts v-bind="saleData"/>
        </HyCard>
      </el-col>
      <el-col :span="12">
        <HyCard title="不同城市商品销量">
          <BarEcharts v-bind="addressData"/>
        </HyCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import HyCard from "../../../../base-ui/HyCard/HyCard.vue"
import {useDashboardStore} from "../../../../store";
import {PieCharts,RosePieCharts,LineEcharts,BarEcharts} from "../../../../component/page-charts";
import {computed,ref} from "vue";
const dashboardStore = useDashboardStore()
dashboardStore.getGoodsAction()
//获取pieEcharts数据
let pieData = computed(() => {
  return dashboardStore.categoryCount.map((item) => {
    return {name:item.name,value:item.goodsCount}
  })
})


//获取lineEcharts数据
const saleData = computed(() => {
  const lineData = []
  const lineXData = []
  dashboardStore.categorySale.map((item) => {
    lineXData.push(item.name)
    lineData.push(item.goodsCount)
  })
  return {lineData, lineXData}
})
console.log(saleData.value)
//获取barEcharts数据
const addressData = computed(() => {
  const count = []
  const city = []
  dashboardStore.addressSale.map((item) => {
    count.push(item.count)
    city.push(item.address)
  })
  return {count,city}
})
</script>

<style scoped lang="scss">
.dashboard{
  background-color: white;
  padding: 20px;
}
</style>