<template>
  <div class="goods">
    <pageSearch :searchFormConfig="goodsSearchFormConfig"
                @resetClick="handleResetClick"
                @queryClick="handleQueryClick"/>
    <pageContent :contentConfig="goodsContentConfig" ref="contentRef">
      <template #image="scope">
        <el-image
            preview-teleported
            style="width: 60px; height: 60px"
            :src="scope.row.imgUrl"
            :preview-src-list="[scope.row.imgUrl]"
        />
      </template>
      <template #oldPrice="scope">
        <span>¥{{scope.row.oldPrice}}</span>
      </template>
      <template #newPrice="scope">
        <span>¥{{scope.row.newPrice}}</span>
      </template>
    </pageContent>
  </div>
</template>

<script setup lang="ts">
import PageSearch from "../../../../component/page-search";
import {goodsContentConfig} from "./config/goodsContentConfig";
import PageContent from "../../../../component/page-content";
import {goodsSearchFormConfig} from "./config/goodsSearchFormConfig";
import {usePageSearch} from "../../../../hooks/usePageSearch";
const {contentRef, handleResetClick, handleQueryClick} = usePageSearch()


</script>

<style scoped lang="scss">

</style>