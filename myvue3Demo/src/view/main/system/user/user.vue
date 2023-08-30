<template>
  <div class="user">
    <PageSearch :searchFormConfig="userSearchFormConfig"
                @resetClick="handleResetClick"
                @queryClick="handleQueryClick"/>
    <PageContent :contentConfig="userContentConfig"
                 ref="contentRef"
                 @editBtnClick="handleModelEdit"
                 @createBtnClick="handleModelCreate">
      <template #enable="scope">
        <el-button
            text
            size="small"
            ref="type"
            :type="scope.row.enable===1?'success':'danger'">
          {{scope.row.enable===1 ? '启用':'禁用'}}
          <el-icon v-if="scope.row.enable===1"><SuccessFilled /></el-icon>
          <el-icon v-else><CircleCloseFilled /></el-icon>
        </el-button>

      </template>
    </PageContent>
    <PageModal :defaultFormData="defaultFormData"
               :modalConfig="userModelConfigRef"
               ref="pageModal"/>
  </div>
</template>

<script setup>
import {CircleCloseFilled, SuccessFilled} from "@element-plus/icons-vue";
import PageSearch from "../../../../component/page-search";
import PageContent from "../../../../component/page-content";
import PageModal from "../../../../component/page-modal";
import {userSearchFormConfig} from "./config/userSearchFormConfig";
import {userContentConfig} from "./config/userContentConfig";
import {userModelConfig} from "./config/userModelConfig";
import {useRootStore} from "../../../../store/index.ts";

import {usePageSearch} from "../../../../hooks/usePageSearch";
import {usePageModal} from "../../../../hooks/usePageModal";
import {computed} from "vue";
const rootStore = useRootStore()
const editCallBack = () => {
//在编辑的时候不显示编辑 密码
  const passwordItem = userModelConfig.formItem.find((item) => item.field === 'password')
  passwordItem.isHidden = true

}
const createCallBack = () => {
  const passwordItem = userModelConfig.formItem.find((item) => item.field === 'password')
  passwordItem.isHidden = false
}
rootStore.getAllDepartmentAndRole()
//监听userModelConfig的变化，在值发生改变时传递userModelConfigRef到子组件
const userModelConfigRef = computed(() => {
  const departmentItem = userModelConfig.formItem.find((item) => item.field === 'departmentId')
  departmentItem.options = rootStore.allDepartment.map((item) => {
    return {label:item.name,value:item?.id}
  })
  const roleItem = userModelConfig.formItem.find((item) => item.field === 'roleId')
  roleItem.options = rootStore.allRole.map((item) => {
    return {label:item.name,value:item?.id}
  })
  return userModelConfig
})

const {contentRef, handleResetClick, handleQueryClick} = usePageSearch()
const {pageModal, handleModelCreate, handleModelEdit, defaultFormData} = usePageModal(createCallBack,editCallBack)

</script>

<style scoped lang="scss">

</style>