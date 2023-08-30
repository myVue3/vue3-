<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="myAside" :width="LoginStore.isCollapse?'65px':'210px'">
        <NavMenu/>
      </el-aside>
      <el-container>
        <el-header class="myHeader">
          <NavHeader/>
        </el-header>
        <el-main>
          <div class="view-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import {useRouter} from "vue-router";
import {messageBoxOpen} from "../../global/global-elements/messageBox";
import {loginOut} from "../../service/login/login";
import {open} from "../../global/global-elements/message";
import NavMenu from "../../component/nav-menu/src/nav-menu.vue";
import {NavHeader} from "../../component/nav-header";
const router = useRouter()
import {useLoginStore} from "../../store";
import {useRootStore} from "../../store";

const LoginStore = useLoginStore()
const RootStore = useRootStore()
RootStore.getAllDepartmentAndRole()
const openMessage = () => {
  messageBoxOpen('确认要退出登录吗', 'warning', outLogin)
}
const outLogin = () => {
  loginOut().then(() => {
    localStorage.removeItem('token')
    router.push('/')
    open('退出成功，请重新登录','success')
  })

}


</script>

<style scoped lang="scss">
.myHeader{
  padding: 0;
}
.common-layout{
  background-color: whitesmoke;
}
.myAside{
  transition: linear .3s;
  overflow: hidden;
}
</style>