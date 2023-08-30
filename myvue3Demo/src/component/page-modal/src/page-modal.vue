<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" :title="title" width="30%" center destroy-on-close>
      <HyForm v-bind="modalConfig" v-model="formData"/>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirmClick">
          确认
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import HyForm from "../../../base-ui/HyForm/HyForm.vue";
import {useSystemStore} from "../../../store/index.ts";
const systemStore = useSystemStore()
const props = defineProps({
  modalConfig:{
    type:Object
  },
  defaultFormData:{
    type:Object,
    default:() => {}
  }
})
let dialogVisible = ref(false)
const {title} = props.modalConfig
const formData = ref({})


watch(() => props.defaultFormData,(newValue) => {
  if (newValue){
    props.modalConfig.formItem.map((item) => {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    })
  }
})
const handleConfirmClick = () => {
  dialogVisible.value = false
  //以props.defaultFormData有无值来判断是点击新建还是点击编辑
  if (Object.keys(props.defaultFormData).length === 0){
    systemStore.createPageDataAction(props.modalConfig.pageName,formData.value)
  }else {
    systemStore.editPageDataAction(props.modalConfig.pageName,formData.value,props.defaultFormData.id)
  }
}

defineExpose({
  dialogVisible
})
</script>

<style scoped>

</style>