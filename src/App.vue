<link rel="stylesheet" href="style.css">
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigation from "./components/Navigation.vue";
import {defineComponent} from "vue";
defineComponent({
  Navigation
})
</script>
<template>
  <Navigation/>
  <router-view>

  </router-view>
</template>

<style lang="less" scoped>

</style>
