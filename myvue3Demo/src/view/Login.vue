<template>
  <div class="login">
    <h1 class="title">欢迎登陆</h1>
    <div class="form">
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
              type="input"
          />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
              size="large"
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button size="large" style="margin: 2vw auto 0" type="primary" @click="submitForm(ruleFormRef)"
          >登陆</el-button
          ></el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {FormInstance,FormRules} from "element-plus";
import {login} from "../request/api";
import {useRouter} from "vue-router";
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
let ruleForm = reactive({
  name:'',
  pass:''
})
let loading = ref(false)

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the name'))
  } {
    callback()
  }
}
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } {
    callback()
  }
}
const rules = reactive<FormRules>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  name: [{ validator: validatePass2, trigger: 'blur' }],
})
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      login(null).then((data) => {
        console.log(data)
        localStorage.setItem('token','hahahaha')
        router.push({path:'/home'})

      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>

<style scoped>

.title{
  text-align: center;
  margin-top: 10vw;
}
.form{
  width: 25vw;
  margin: 3vw auto;
  padding: 40px 40px;
  box-shadow: 10px 10px 40px;
  border-radius: 30px;
}
@media screen and (max-width: 700px) {
  .form{
    width: 70vw;
  }
}
</style>