<template>
  <h1>testInject</h1>
  <h1>{{ info }}</h1>
  <button @click="changeInfo">更改info</button>
</template>

<script setup>
import {inject} from "vue";
const info = inject('info')
console.log(info.value)
function changeInfo() {
  info.value = 1111
  console.log(info)
}
</script>

<style scoped>

</style>