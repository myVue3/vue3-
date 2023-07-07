<template>
  <div>
    <button @click="add">+1</button>
    <button @click="remove">-1</button>
    <button @click="addAll(10)">+10</button>
    <div class="titleTest">
      <div :class="{activeRed:currentIndex === index}" v-for="(item,index) in title" @click="beRed(index)">
        {{ item }}
      </div>
    </div>
    <test-inject></test-inject>
    {{ info }}
  </div>

</template>

<script setup>
import {inject, provide, ref} from "vue";
import testInject from "./TestInject.vue";
import TestInject from "./TestInject.vue";
const info = inject('info')

const props = defineProps({
  add:{
    type:Function
  },
  remove:{},
  addAll:{},
  title:{
    type:Array
  }
})
console.log(props.title)
let currentIndex = ref(0)
function beRed(index) {
  currentIndex.value = index
}
</script>

<style scoped>
.titleTest{
  border: 1px solid red;
  margin-top: 100px;
  display: flex;
  width: 300px;
  justify-content: space-evenly;
  align-items: center;
}
.activeRed{
  color: red;
}
</style>