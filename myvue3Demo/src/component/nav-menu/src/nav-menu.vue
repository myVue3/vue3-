<template>
  <div class="nav-menu">
    <div class="title-group">
      <img src="../../../../src/assets/img/logo_white-e1669512635862.png" alt="">
      <span></span>
    </div>
    <el-menu
        :collapse="LoginStore.isCollapse"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#fff"
        :default-active="LoginStore.activeTab"
    >
      <template v-for="item in LoginStore.userMenu" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><CirclePlus /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item @click="go(subItem)" v-for="subItem in item.children" :index="subItem.id + ''" :key="subItem.id">{{ subItem.name }}</el-menu-item>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">{{ item.name }}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { CirclePlus } from '@element-plus/icons-vue'
import {useLoginStore} from "../../../store";
import {useRouter} from "vue-router";

const router = useRouter()
const LoginStore = useLoginStore()
const go = (item) => {
  router.push(item.url)
  LoginStore.activeTab = item.id + ''
}
</script>

<style scoped lang="scss">
.nav-menu{
  height: 130%;
  min-height: 100vh;
  background-color: #565c63;
  width: 100%;
  color: white;
  border: 1px solid #565c63;
}
.title-group{
  display: flex;
  justify-content: start;
  align-items: center;
  img{
    height: 45px;
    margin: 20px 10px;
  }
  span{
    font-size: 20px;
    font-weight: bold;
  }
}
</style>