<template>
  <div class="nav-header">
    <el-radio-group v-model="LoginStore.isCollapse">
      <el-radio-button :label="false" v-if="LoginStore.isCollapse===true"><el-icon size="25"><Expand /></el-icon></el-radio-button>
      <el-radio-button :label="true" v-else><el-icon size="25"><Fold /></el-icon></el-radio-button>
    </el-radio-group>
    <div class="header-info">
      <div >
        <Breadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div class="user">
        <span>欢迎你，</span>
        <el-dropdown class="drop">
    <span class="el-dropdown-link">
      {{ LoginStore.userInfo.name }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleExitLogin">退出登录</el-dropdown-item>
              <hr>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>我的收藏</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Fold, Expand, ArrowDown } from '@element-plus/icons-vue'
import { useLoginStore } from "../../../store";
import Breadcrumb from "../../../base-ui/breadcrumd/breadcrumb.vue";

import { useRoute } from "vue-router";
import { computed } from "vue";
import {getBreadcrumb} from "../../../utils/mapMeunToRoutes.js";
import {messageBoxOpen} from "../../../global/global-elements";
import cache from "../../../utils/cache";
import {useRouter} from "vue-router";

const router = useRouter()
const LoginStore = useLoginStore()
//路由发生变化的时候改变传递给面包屑传递组件的参数
const breadcrumbs = computed(() => {
  const userMenu = LoginStore.userMenu
  const route = useRoute()
  const path = route.path
  return getBreadcrumb(userMenu,path)
})
const handleExitLogin = () => {
  messageBoxOpen('确定要退出吗？','warning',() => {
    let name = cache.getCache('name')
    cache.clearCache()
    cache.setCache('name',name)
    LoginStore.isChecked = false
    router.push('/login')
    open('退出成功',"success")
  })
}

</script>

<style scoped lang="scss">
:deep(.el-tooltip__trigger:focus-visible) {
  outline: unset;
}
.nav-header{
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #2f64ac;
  color: white;
  padding: 10px 20px;
}
hr{
  opacity: .2;
}
.header-info{
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .user{
    display: flex;
    align-items: center;
    .drop{
      color: white;
      cursor: pointer;
    }
  }
  .user-name{
    font-size: 19px;
    font-weight: bold;

  }
  .user-head{
    margin-right: 15px;
  }
}
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>