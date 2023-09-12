<template>
  <div class="role">
    <PageSearch :searchFormConfig="roleSearchFormConfig"
                @resetClick="handleResetClick"
                @queryClick="handleQueryClick"/>
    <PageContent ref="contentRef" :contentConfig="roleContentConfig"
                 @editBtnClick="handleModelEdit"
                 @createBtnClick="handleModelCreate">
      <template #menuList="scope">
        <template v-if="scope.row.menuList.length > 0" >
          <el-button
              v-for="item in scope.row.menuList"
              :key="item.name"
              bg
              text
              type="success"
              size="small"
              plain>
            {{item.name}}
          </el-button>
        </template>
        <template v-else>
          <el-button bg text type="info" size="small" plain>
            暂无权限
          </el-button>
        </template>
      </template>
    </PageContent>
    <PageModal
        :defaultFormData="defaultFormData"
        :modalConfig="roleModelConfig"
        ref="pageModal"/>
  </div>
</template>

<script setup lang="ts">
import {roleSearchFormConfig} from "./config/roleSearchFormConfig";
import PageSearch from "../../../../component/page-search";
import {roleContentConfig} from "./config/roleContentConfig";
import PageContent from "../../../../component/page-content";
import {usePageSearch} from "../../../../hooks/usePageSearch";
import {roleModelConfig} from "./config/roleModalConfig";
import PageModal from "../../../../component/page-modal/src/page-modal.vue";
import {usePageModal} from "../../../../hooks/usePageModal";

const { contentRef, handleResetClick, handleQueryClick } = usePageSearch()
const {pageModal, handleModelCreate, handleModelEdit, defaultFormData} = usePageModal()

</script>

<style scoped lang="scss">

</style>