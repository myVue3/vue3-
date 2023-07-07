<template>
  <h1>about</h1>
  <TestInject></TestInject>
</template>


<script setup>
import TestInject from "../component/TestInject.vue";
import {provide} from "vue";
provide('info','第二段信息')


</script>

<style scoped>

</style>