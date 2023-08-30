<template>
  <div class="department">
    <PageSearch :searchFormConfig = "departmentSearchFormConfig"
                @resetClick="handleResetClick"
                @queryClick="handleQueryClick"/>
    <PageContent :contentConfig="departmentContentConfig"
                 ref="contentRef"
                 @editBtnClick="handleModelEdit"
                 @createBtnClick="handleModelCreate"/>
    <PageModal :defaultFormData="defaultFormData"
               :modalConfig="departmentModelConfig"
               ref="pageModal"/>
  </div>
</template>

<script setup lang="ts">
import PageSearch from "../../../../component/page-search";
import {departmentSearchFormConfig} from "./config/departmentSearchFormConfig";
import PageContent from "../../../../component/page-content";
import {departmentContentConfig} from "./config/departmentContentConfig";
import {departmentModelConfig} from "./config/departmentModalConfig";
import {usePageModal} from "../../../../hooks/usePageModal";
import {usePageSearch} from "../../../../hooks/usePageSearch";
import PageModal from "../../../../component/page-modal";
const {contentRef, handleResetClick, handleQueryClick} = usePageSearch()
const {pageModal, handleModelCreate, handleModelEdit, defaultFormData} = usePageModal()

</script>

<style scoped lang="scss">

</style>