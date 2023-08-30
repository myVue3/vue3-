<template>
  <div class="form-account">
    <el-form
        label-position="top"
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        status-icon
        label-width="120px"
        class="demo-ruleForm"
    >
      <el-form-item label="姓名" prop="name">
        <el-input
            size="large"
            v-model="ruleForm.name"
            type="text"
        />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
            size="large"
            v-model="ruleForm.pass"
            show-password
            autocomplete="off" />
      </el-form-item>

    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {FormInstance} from "element-plus";
import {useRouter} from "vue-router";
import {rules} from "../config/accountRulesConfig";
import cache from "../../../utils/cache";
import {useLoginStore} from "../../../store";
import {storageAccount,deleteStorageAccount} from "../config/storageAccountControl";
const LoginStore = useLoginStore()
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
let ruleForm:object = reactive({
  name:cache.getCache('name') ?? '',
  pass:cache.getCache('pass') ?? ''
})

const accountSubmit = (isChecked:boolean) => {
  if (!ruleFormRef.value) return
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
       isChecked?storageAccount(ruleForm.name, ruleForm.pass):deleteStorageAccount()
       await LoginStore.accountLogin({name:ruleForm.name,password:ruleForm.pass})
       await LoginStore.getUserInfo()
       await LoginStore.getUserMenu()
       await router.push({path: '/main'})
    } else {
      console.log('error submit!')
      return false
    }
  })
}
defineExpose({
  accountSubmit
})
</script>

<style lang="scss" scoped>
*{

}
.form-account{
  width: 15vw;
  margin: 0 auto;
  .LoginBtn{
    width: 100%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 700px) {
  .form-account{
    width: 70vw;
  }
}
</style>