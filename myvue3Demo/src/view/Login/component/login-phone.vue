<template>
  <div class="form-phone">
    <el-form
        label-position="top"
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        status-icon
        label-width="120px"
        class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input
            size="large"
            v-model="ruleForm.phoneNumber"
            type="text"
        />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input
            size="large"
            v-model="ruleForm.code"
            autocomplete="off">
              <template class="getCode" #append>获取验证码</template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {FormInstance} from "element-plus";
import {login} from "../../../service/login/login";
import {useRouter} from "vue-router";
import {open} from "../../../global/global-elements/message";
//引入自定义的账号密码校验规则
import {rules} from "../config/phoneRulesConfig";

const router = useRouter()
const ruleFormRef = ref<FormInstance>()
let ruleForm = reactive({
  phoneNumber:'',
  code:''
})

const phoneSubmit = (isChecked) => {
  // if (!ruleFormRef.value) return
  // ruleFormRef.value.validate((valid) => {
  //   if (valid) {
  //     login().then(() => {
  //       localStorage.setItem('token','hahahaha')
  //       router.push({path:'/home'})
  //       open('登陆成功','success')
  //     })
  //   } else {
  //     console.log('error submit!')
  //     return false
  //   }
  // })
}
defineExpose({
  phoneSubmit
})
</script>

<style lang="scss" scoped>
.form-phone{
  width: 15vw;
  margin: 0 auto;
  .LoginBtn{
    width: 100%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 700px) {
  .form-phone{
    width: 70vw;
  }
}
</style>