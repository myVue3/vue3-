<template>
  <div class="login">
    <LoginPanel/>
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from "./component/login-panel.vue";
</script>

<style scoped>

/**{*/
/*  border: 1px solid red;*/
/*}*/
.login{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>