<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
//设置element语言为中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = zhCn

</script>
<style>

*{
  padding: 0;
  margin: 0;

}
</style>
