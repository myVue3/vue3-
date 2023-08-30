<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in props.breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import IBreadcrumb from "./IBreadcrumb";
import {PropType} from "vue";
const props = defineProps({
  breadcrumbs:{
    type:Array as PropType<IBreadcrumb[]>,
    default:[]
  }
})

</script>

<style scoped lang="scss">
.el-breadcrumb ::v-deep .el-breadcrumb__inner {
  color: white !important;
  font-weight:400 !important;
  cursor: pointer;
}
.el-breadcrumb__item:last-child ::v-deep .el-breadcrumb__inner {
  color: whitesmoke !important;
  font-weight:800 !important;
}
</style>