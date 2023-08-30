<template>
  <div class="HyForm">
    <el-form :label-width="props.labelWidth">
      <el-row>
        <el-col v-bind="colum" v-for="item in props.formItem" :key="item.label">
          <el-form-item v-if="!item.isHidden" class="form-item" :label="item.label" :style="itemStyle">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input v-model="formData[`${item.field}`]" :placeholder="item.placeholder" :label="item.label" :show-password="item.label==='password'"></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select :placeholder="item.placeholder" v-model="formData[`${item.field}`]" style="width: 100%">
                <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value" />
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker :placeholder="item.placeholder" v-model="formData[`${item.field}`]" style="width: 100%" v-bind="item.otherOptions"></el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import {ref, defineEmits, watch} from "vue";

const props = defineProps({
  //vue3中父元素使用v-model绑定传过来子元素默认使用modelValue接收
  modelValue:{
    type:Object,
    required:true
  },
  formItem:{
    default:[]
  },
  labelWidth:{
    default:'20%'
  },
  itemStyle:{
    default:{
      padding:'15px 40px',
    }
  },
  colum:{
    default:{
      xl:8,
      lg:8,
      md:12,
      sm:24,
      xs:24
    }
  }
})
//因为vue不支持子组件直接修改父组件的值（会损耗性能，违背单项数据流原则）
//所以先拷贝父元素传来的值进行修改再emit出去，这样就不用直接修改父元素的值
const formData = ref({...props.modelValue})
//' update:modelValue '为vue3提供的更新modelValue的快捷写法
//数组里面为事件名称
const emits = defineEmits(['update:modelValue'])
watch(formData,(newValue) => {
  //参数第一个为要发送给父元素的事件名称（这里有vue3的快捷方法），第二个为要修改的值
      console.log(newValue)
  emits('update:modelValue',newValue)
},
    //因为是监听对象内的变化，所以要开启深度监听
    { deep:true}
)


</script>

<style scoped>

</style>