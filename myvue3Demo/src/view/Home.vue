<template>
  <div class="common-layout">
    <el-container>
      <el-header class="myHeader">
        <img src="../assets/vue.svg">
        <div>首页</div>
        <div>关于我们</div>
        <div>退出登录</div>

      </el-header>
      <el-container>
        <el-aside width="200px" class="myAside">
          <el-row>
            <el-col :span="24">
              <el-menu
                  active-text-color="#ffd04b"
                  background-color="#545c64"
                  class="myAside el-menu-vertical-demo"
                  default-active="2"
                  text-color="#fff"
                  @open="handleOpen"
                  @close="handleClose"
                  router
              >
                <el-menu-item :index="item.path" v-for="item in list" :key="item.path">
                  <span>{{ item.name }}</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";
const router = useRouter()
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const list = router.getRoutes().filter(item => item.meta.isShow)

</script>

<style scoped>
/**{*/
/*  border: 1px solid red;*/
/*}*/
.myHeader{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f64ac;
  color: white;
  height: 100px;
}
.myAside{
  height: 100vh;
  background-color: #565c63;
  color: white;

}
</style>