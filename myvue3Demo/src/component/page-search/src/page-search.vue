<template>
  <div class="page-search">
    <h2>{{route.name}}</h2>
    <HyForm v-bind="props.searchFormConfig" v-model="formData"/>
    <div class="search-button">
      <el-button @click="handleResetClick">
        <el-icon><RefreshLeft/></el-icon><span></span>
        重置
      </el-button>
      <el-button type="primary" @click="handleQueryClick">
        <el-icon><Search/></el-icon><span></span>
        查询
      </el-button>
    </div>
  </div>
</template>

<script setup>
import HyForm from "../../../base-ui/HyForm/HyForm.vue";
import {defineEmits, ref} from "vue";
import { Search, RefreshLeft } from '@element-plus/icons-vue'
import { useRoute } from "vue-router";
const route = useRoute()
const props = defineProps({
  searchFormConfig:{
    type:Object,
    required:true
  }
})
//双向绑定的属性应该由配置文件的field来决定
const formOriginData = {}
const { formItem } = props.searchFormConfig
formItem.map((item) => {
  formOriginData[item.field] = ''
})
const formData = ref(formOriginData)
const emits = defineEmits(['resetClick','queryClick'])
//重置按钮点击事件
const handleResetClick = () => {
  //不可以这样，修改不了值
  // formData.value = formOriginData
  for (const i in formOriginData){
    formData.value[i] = formOriginData[i]
  }
  //触发父元素绑定的resetClick事件
  emits('resetClick')
}
//查询按钮点击事件
const handleQueryClick = () => {
  //触发父元素绑定的queryClick事件
  emits('queryClick',formData.value)
}
</script>

<style scoped lang="scss">
.page-search{
  background-color: white;
  padding: 45px 50px 45px 0;
  h2{
    text-align: center;
    margin-bottom: 20px;
  }
  .search-button{
    text-align: right;
    padding-right: 30px;
    margin-top: 10px;
  }
}
</style>