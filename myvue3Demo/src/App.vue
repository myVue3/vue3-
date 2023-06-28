<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Login from "./view/Login.vue";
</script>

<template>
  <router-view></router-view>
</template>

<style>

*{
  padding: 0;
  margin: 0;

}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
