<template>
  <h1>{{ count }}</h1>
  <Test1 :addAll="addAll" :remove="removeOne" :add="addOne" :count="count" :title="title"></Test1>
  <button @click="changeInfo">从源头更改Info（整条数据流发生改变）</button>
</template>

<script setup>
import {provide, ref, defineAsyncComponent} from "vue";
let count = ref(20)
const Test1 = defineAsyncComponent(() => import('../component/Test1.vue'))
let addOne = () => {
  count.value++
}
let removeOne = () => {
  count.value--
}
let addAll = (num) => {
  count.value = count.value + num
}
const title = ['衣服','鞋子','帽子',]
const myInfo = ref('这是动态信息')
provide('info',myInfo)

function changeInfo() {
  myInfo.value = '哈哈哈哈'
}
</script>

<style scoped>

</style>