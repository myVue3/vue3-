<template>
  <div class="page-table">
    <HyTable
        @getListData="getListData"
        v-bind="props.contentConfig"
        :listCount="systemStore.listCount((pageName))"
        :listData="systemStore.listData((pageName))"
        ref="hyTable">
      <!--为子元素头部信息插槽添加内容-->
      <template #header-handler>
        <el-button @click="handleCreateClick" :disabled="!isCreate" type="primary"><el-icon><CirclePlusFilled /></el-icon>&nbsp;新增</el-button>
      </template>
      <!--为子元素插槽自定义列内容-->
      <template #createAt="scope">
        <span>{{ $filter.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filter.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <el-button @click="handleEditClick(scope.row)"  :disabled="!isUpdate" bg link size="small" type="primary">
          <el-icon :size="11"><Edit /></el-icon>编辑
        </el-button>
        <el-button @click="handleDeleteClick(scope.row)" :disabled="!isDelete" bg link size="small" type="danger">
          <el-icon :size="11"><Delete /></el-icon>删除
        </el-button>
      </template>
      <template v-for="item in otherPropsList" :key="item.prop" #[item.slotName]="scope">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>

    </HyTable>
  </div>
</template>

<script setup lang="ts">
import { CirclePlusFilled, Delete, Edit } from "@element-plus/icons-vue";
import HyTable from "../../../base-ui/Hytable/hyTable.vue";
import {useSystemStore} from "../../../store";
import {provide, reactive, ref} from "vue";
import {useButtonPermission} from "../../../hooks/useButtonPermission";
import {messageBoxOpen} from "../../../global/global-elements";
import cache from "../../../utils/cache";

const hyTable = ref()
const systemStore = useSystemStore()
const props = defineProps({
  contentConfig:{
    type:Object
  }
})
const {pageName,propList} = props.contentConfig;
const isDelete = useButtonPermission(pageName,'delete')
const isQuery = useButtonPermission(pageName,'query')
const isCreate = useButtonPermission(pageName,'create')
const isUpdate = useButtonPermission(pageName,'update')
const getListData = (queryInfo = {}) => {
  //如果没有查询权限，直接return，无法进行后面的步骤
  if(!isQuery) return
  systemStore.getPageList({
    pageName:pageName,
    queryInfo:{
      size:systemStore.pageSize,
      offset:systemStore.pageSize * (systemStore.currentPage - 1),
      ...queryInfo
    }
  })
}
getListData()

//控制按钮权限

const otherPropsList = propList.filter((item) => {
  return !(item.slotName === 'updateAt' || item.slotName === 'createAt' || item.slotName === 'handler');
})
//删除按钮
const handleDeleteClick = (row) => {
  messageBoxOpen('确定要删除吗？','error',() => {
    systemStore.deletePageDataAction(pageName,row)
  })
}
const emits = defineEmits(['createBtnClick','editBtnClick'])
//新增按钮
const handleCreateClick = () => {
  emits('createBtnClick')
}
const handleEditClick = (row) => {
  emits('editBtnClick',row)
}

defineExpose({
  getListData
})
</script>

<style scoped>

</style>