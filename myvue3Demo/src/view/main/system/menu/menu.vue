<template>
  <div class="menu">
    <PageSearch  :searchFormConfig="menuSearchFormConfig"/>
    <PageContent :contentConfig="menuContentConfig"/>
  </div>
</template>

<script setup lang="ts">
import PageSearch from "../../../../component/page-search";
import {menuSearchFormConfig} from "./config/menuSearchFormConfig";
import PageContent from "../../../../component/page-content";
import {menuContentConfig} from "./config/menuContentConfig";
</script>

<style scoped lang="scss">

</style>