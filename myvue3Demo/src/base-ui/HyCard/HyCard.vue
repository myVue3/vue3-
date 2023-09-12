<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <template #default>
      <slot></slot>
    </template>
  </el-card>
</template>

<script setup>
const props = defineProps({
  title:{
    type:String
  }
})
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  /*width: 480px;*/
  /*height: 400px;*/
}
</style>