<template>
  <div class="login-panel">
    <h1 class="title">欢迎登陆111</h1>
    <el-tabs class="demo-tabs" stretch @tab-click="tabClick">
      <el-tab-pane>
        <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>账号登陆</span>
        </span>
        </template>
        <LoginAccount ref="accountRef"></LoginAccount>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
        <span class="custom-tabs-label">
          <el-icon><Iphone /></el-icon>
          <span>手机登录</span>
        </span>
        </template>
        <LoginPhone ref="phoneRef"></LoginPhone>
      </el-tab-pane>
      <div class="storage">
        <el-checkbox v-model="LoginStore.isChecked">记住密码</el-checkbox>
        <el-link>忘记密码</el-link>
      </div>
      <el-button class="LoginBtn" size="large" type="primary" @click="loginButton"
      >登陆</el-button>
    </el-tabs>


  </div>
</template>

<script lang="ts" setup>
import { Calendar,Iphone } from '@element-plus/icons-vue'
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";
import {ref} from "vue";
import { useLoginStore } from "../../../store";
const LoginStore = useLoginStore()

const accountRef = ref()
const phoneRef = ref()
//初始在account登陆页
const currentTab = ref(0)
//观察是在account还是在phone登陆
const tabClick = (pane) => {
  currentTab.value = pane.paneName
}
const loginButton = () => {
  if (currentTab.value === 0){
    accountRef.value.accountSubmit(LoginStore.isChecked)
  }else {
    phoneRef.value.phoneSubmit(LoginStore.isChecked)
  }
}







</script>

<style scoped lang="scss">
.LoginBtn{
  width: 100%;
  margin: 0 auto;
}
.storage{
  display: flex;
  justify-content: space-between;
  margin: -10px 0 15px;
  padding-top: 0;
}
.title{
  text-align: center;
  margin: 6vw 0 1vw;
}
.storage{
  display: flex;
  justify-content: space-between;
  margin: -10px 0 15px;
  padding-top: 0;
}

.demo-tabs{
  padding: 2vw 8vw 1vw;
  border: 1px solid #dddfe5;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
