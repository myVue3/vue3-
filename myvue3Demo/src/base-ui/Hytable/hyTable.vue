<template>
  <div class="hyTable">
    <slot name="header">
      <div class="header">
        <h3>{{title}}</h3>
        <slot name="header-handler"></slot>
      </div>
    </slot>
    <el-table
        v-bind="childrenProp"
        :data="listData"
        border style="width: 100%;z-index: 0"
        @selection-change="handleSelectionChange">

      <!--由父元素决定是否展示该列-->
      <el-table-column align="center" v-if="showSelectColum" type="selection" mi-width="60px"></el-table-column>

      <!--由父元素决定是否展示该列-->
      <el-table-column align="center" v-if="showIndexColum" type="index" label="序号" min-width="60px"></el-table-column>

      <template v-for="item in propList" :key="item.prop">
        <el-table-column align="center" v-bind="item" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              <span>{{scope.row[item.prop]}}</span>
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <slot name="footer" v-if="showFooter">
      <div class="footer">
        <el-pagination
            v-model:current-page="systemStore.currentPage"
            v-model:page-size="systemStore.pageSize"
            :page-sizes="[10, 20, 30]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="listCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import {inject} from "vue";
import cache from "../../utils/cache";
import {useSystemStore} from "../../store";
const systemStore = useSystemStore()
const emits = defineEmits(['selectRow','getListData'])
const props = defineProps({
  title:{
    type:String
  },
  listData:{
    type:Array,
  },
  listCount:{
    type:Number
  },
  align:{
    type:String,
    default:'center'
  },
  propList:{
    type:Array,
  },
  showIndexColum:{
    type:Boolean,
    default:false
  },
  showSelectColum:{
    type:Boolean,
    default:false
  },
  childrenProp:{
    type:Object
  },
  showFooter:{
    type:Boolean,
    default:true
  }
})
const handleSelectionChange = (val) => {
  //将选中信息传递给父元素，并触发父元素selectRow方法来对数据进行操作
  emits('selectRow',val)
}
const handleSizeChange = (val: number) => {
  systemStore.pageSize = val
  emits('getListData',val)
}
const handleCurrentChange = (val: number) => {
  systemStore.currentPage = val
  emits('getListData',val)
}
</script>

<style scoped lang="scss">
.hyTable{
  margin-top: 20px;
  padding: 30px;
  background-color: white;
}
.el-table__inner-wrapper{
  z-index: 0!important;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.footer{
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 25px;
}
</style>